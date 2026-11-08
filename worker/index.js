// Tiny Cloudflare Worker that sits behind the static site.
// Static files (everything in dist/) are served first as usual; this only
// runs for paths that aren't a file, like /api/videos.
//
// /api/videos returns the 3 latest long-form YouTube videos as JSON, cached
// for an hour, so the homepage stays current without a rebuild.
//
// /api/inquiry receives the Services page form and emails it to Paige using
// Cloudflare Email Routing (the INQUIRY_EMAIL binding in wrangler.toml).

import { EmailMessage } from 'cloudflare:email';
import { FEED_URL, parseFeed } from '../src/data/youtube.js';

const FROM = 'inquiries@techpaige.ca';

function clean(value, max = 2000) {
  return String(value ?? '').replace(/\r/g, '').trim().slice(0, max);
}

async function handleInquiry(request, env) {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  let data;
  try {
    data = await request.json();
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  // Honeypot: bots fill the hidden "website" field. Pretend success.
  if (clean(data.website)) return new Response('{"ok":true}', { status: 200 });

  const name = clean(data.name, 120).replace(/\n/g, ' ');
  const email = clean(data.email, 200).replace(/\n/g, ' ');
  const message = clean(data.message, 5000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
    return new Response('Missing fields', { status: 400 });
  }
  if (!env.INQUIRY_EMAIL) return new Response('Email not configured', { status: 503 });

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${clean(data.business, 200) || '-'}`,
    `Service: ${clean(data.service, 120) || '-'}`,
    `Timeline: ${clean(data.timeline, 200) || '-'}`,
    `Budget: ${clean(data.budget, 60) || 'Prefer not to say'}`,
    '',
    message,
  ].join('\r\n');

  const subject = `New inquiry: ${clean(data.service, 120) || 'Services'} from ${name}`;
  const raw = [
    `From: TechPaige Inquiries <${FROM}>`,
    `To: ${env.INQUIRY_TO}`,
    `Reply-To: ${name} <${email}>`,
    `Subject: ${subject.replace(/[^\x20-\x7E]/g, '')}`,
    `Message-ID: <${crypto.randomUUID()}@techpaige.ca>`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    '',
    body,
  ].join('\r\n');

  try {
    await env.INQUIRY_EMAIL.send(new EmailMessage(FROM, env.INQUIRY_TO, raw));
  } catch (err) {
    console.error('Inquiry send failed', err);
    return new Response('Send failed', { status: 502 });
  }
  return new Response('{"ok":true}', {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/inquiry') return handleInquiry(request, env);

    if (url.pathname === '/api/videos') {
      const cache = caches.default;
      const cached = await cache.match(request);
      if (cached) return cached;

      let videos = [];
      try {
        const res = await fetch(FEED_URL, { cf: { cacheTtl: 3600 } });
        if (res.ok) videos = parseFeed(await res.text(), 3);
      } catch {}

      const response = new Response(JSON.stringify(videos), {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': `public, max-age=${videos.length ? 3600 : 60}`,
        },
      });
      if (videos.length) ctx.waitUntil(cache.put(request, response.clone()));
      return response;
    }

    // Anything else falls through to the static site (including its 404).
    return env.ASSETS.fetch(request);
  },
};

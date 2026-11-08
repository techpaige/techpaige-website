// Tiny Cloudflare Worker that sits behind the static site.
// Static files (everything in dist/) are served first as usual; this only
// runs for paths that aren't a file, like /api/videos.
//
// /api/videos returns the 3 latest long-form YouTube videos as JSON, cached
// for an hour, so the homepage stays current without a rebuild.

import { FEED_URL, parseFeed } from '../src/data/youtube.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

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

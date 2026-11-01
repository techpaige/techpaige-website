// Latest long-form YouTube videos, pulled from the channel's public RSS feed.
// Shared by the homepage (at build time) and worker/index.js (live, at
// /api/videos) so both parse the feed the same way. Shorts are skipped.
// Nothing to maintain: upload to YouTube and the homepage picks it up.

export const CHANNEL_ID = 'UCLEmNSoZtA62Wuo4axYc_1g';
export const CHANNEL_URL = 'https://www.youtube.com/@TechPaige';
export const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

export function parseFeed(xml, limit = 3) {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
  return entries
    .map((entry) => {
      const pick = (re) => (entry.match(re) || [])[1] || '';
      const id = pick(/<yt:videoId>([^<]+)</);
      const url = pick(/<link rel="alternate" href="([^"]+)"/);
      return {
        id,
        title: decode(pick(/<title>([^<]*)</)),
        url,
        published: pick(/<published>([^<]+)</),
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        isShort: url.includes('/shorts/'),
      };
    })
    .filter((v) => v.id && !v.isShort)
    .slice(0, limit)
    .map(({ isShort, ...v }) => v);
}

export async function fetchLatestVideos(limit = 3) {
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) return [];
    return parseFeed(await res.text(), limit);
  } catch {
    // Offline or YouTube unreachable: the homepage still builds, and the
    // live /api/videos call fills the section in on the real site.
    return [];
  }
}

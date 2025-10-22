export default async function handler(req, res) {
  try {
    const rssUrl = (req.query && req.query.rss) || 'https://sunnys-newsletter.beehiiv.com/feed';
    const upstream = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rssUrl);
    const r = await fetch(upstream);
    if (!r.ok) {
      res.status(r.status).json({ error: 'Upstream failed' });
      return;
    }
    const data = await r.json();
    // cache at the edge for 30m; serve stale for 12h
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=43200');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e?.message || 'proxy error' });
  }
}


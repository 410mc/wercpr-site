# We R CPR website

Static rebuild of wercpr.com, hosted on Cloudflare Workers (static assets).

- `public/` holds the site (HTML, CSS)
- `wrangler.jsonc` is the Worker config (assets directory `./public`)
- Course detail pages still link to the live pages on wercpr.com until they are rebuilt

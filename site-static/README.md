# Smart-Sweet Popcorn — Static Site (No build)

This is a single-file static landing page (plus a small CSS/JS file) so you can open it directly in a browser without Vite or Node.

Files

- `index.html` — the landing page (uses Tailwind CDN)
- `styles.css` — small complementary styles
- `script.js` — small JS for newsletter demo and smooth scroll

How to preview

Option A — Open directly:
- Open `site-static/index.html` in your browser.

Option B — Serve with Python (recommended for consistent behavior):
```bash
cd site-static
python3 -m http.server 8000
# open http://localhost:8000
```

Notes

- Tailwind is included via the official CDN; no build step required.
- Icons are inline SVGs; if you want Lucide specifically, I can swap them to use the Lucide CDN.
- To publish to GitHub Pages, you can push the `site-static/` contents to the `gh-pages` branch or copy the files into the repository root/docs folder and configure Pages to use `/docs`.

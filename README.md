# SnackCompany — GitHub Pages test site

This repository contains a tiny static website to test GitHub Pages deployment.

Files added:

- `index.html` — minimal homepage
- `styles.css` — simple styling

How to preview locally

You can serve the folder locally using Python 3's built-in server:

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000
```

How to publish with GitHub Pages

1. Commit and push these files to your repository (on the `main` branch):

```bash
git add index.html styles.css README.md
git commit -m "Add basic GitHub Pages test site"
git push origin main
```

2. On GitHub, go to Settings → Pages. Under "Source" choose:
   - Branch: `main`
   - Folder: `/ (root)`

3. Save. GitHub Pages will publish the site shortly. The URL will be:

```
https://<your-github-username>.github.io/<repo>/
```

Notes

- If you prefer the `docs/` folder approach, move the files into a `docs/` directory and select that as the Pages source.
- To skip Jekyll processing, add an empty `.nojekyll` file to the root.

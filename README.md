# ARKLINE Website

Bilingual corporate website for ARKLINE Architectural Door & Interior Systems.

## GitHub Pages

This repository includes an automatic deployment workflow for:

`https://tian5085.github.io/arkline-website/`

In GitHub, open **Settings → Pages** and select **GitHub Actions** under **Build and deployment / Source**. Every push to `main` will then build and publish the website automatically.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

To verify the GitHub Pages static export:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/arkline-website npm run build:pages
```

The static output is generated in `out/`.

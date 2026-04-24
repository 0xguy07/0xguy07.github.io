# 0xguy07.github.io

Personal site for [Guy Friley / 0xguy](https://0xguy07.github.io).

Built with [Astro](https://astro.build) + a hand-rolled Tokyo Night / Tech Orange theme that matches the companion [Obsidian Publish notebook](https://publish.obsidian.md/0xguy/Home). Deployed to GitHub Pages via GitHub Actions.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview production build
```

## Structure

- `src/pages/index.astro` — landing page content
- `src/layouts/Base.astro` — shared page shell
- `src/styles/global.css` — Tokyo Night palette + site styles
- `public/` — static assets served at the site root
- `.github/workflows/deploy.yml` — build + deploy to GitHub Pages

## Palette

Accent `#E8734A` on a Tokyo Night base (`#1a1b26`). Matches `publish.css` in the Obsidian vault so both surfaces feel like one brand.

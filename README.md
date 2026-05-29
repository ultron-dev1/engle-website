# Englemount Real Estate Management — Website Redesign

A modern, minimal redesign of [englemount.com](https://englemount.com/), built as a multi-page Jekyll static site for deployment on GitHub Pages.

## Stack

- Plain HTML + CSS + JS
- Jekyll (auto-built by GitHub Pages) for shared layouts/includes
- Google Fonts: Inter + Playfair Display
- Stock imagery from Unsplash

## Pages

- `/` — Home
- `/services/` — Management Services
- `/esg/` — Sustainability & ESG
- `/team/` — Leadership
- `/properties/` — Portfolio showcase
- `/insights/` — Blog index
  - `/insights/conflict-free-property-management/`
  - `/insights/esg-commercial-real-estate-roi/`
  - `/insights/tenant-relationships-asset-value/`
- `/contact/` — Contact form (mailto)

## Local preview

```bash
# Requires Ruby + Jekyll
bundle exec jekyll serve
# Then open http://localhost:4000
```

Or for a quick preview without Jekyll, just open `index.html` (note: includes/layouts won't render — use Jekyll for full preview).

## Deployment

This repo is configured to deploy via GitHub Pages from the `main` branch. Settings → Pages → Source: `main` / `/ (root)`.

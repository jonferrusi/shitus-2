# Pelham St. Grill

A modern, high-end restaurant website for **Pelham St. Grill** — 1507 Pelham St,
Fonthill, ON L0S 1E3. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Full-screen animated hero with drifting ember particles and a letter-by-letter
  "sear" text reveal
- Filterable, animated menu (Starters, From the Grill, Sides, Drinks, Desserts,
  Vegetarian) with hover-zoom dishes and a shimmering "Chef's Pick" badge
- Masonry food/interior gallery with a keyboard-navigable lightbox
- Location section with an embedded Google Map, animated pin drop, click-to-call,
  click-to-navigate, and a **live open/closed status** computed from real
  Eastern-time hours
- Sticky "Reserve a Table" CTA that appears after scrolling past the hero
- Auto-cycling testimonials carousel with animated star ratings
- Reservation form and footer with animated newsletter signup confirmation
- Scroll-triggered fade/slide-up animations throughout, fully responsive

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Content to swap before launch

- `src/data/menu.js` — replace placeholder dishes/prices with the real menu
- `src/data/content.js` — real phone number, hours, gallery photos, testimonials
- Hero, About, Menu, and Gallery images are currently Unsplash placeholders —
  swap in real food/interior photography (see the original brief's "Images
  Needed" list: hero shot, 8–12 food photos, interior/exterior shots, chef/team
  photo, transparent logo PNG)
- `RESTAURANT.mapEmbedSrc` in `src/data/content.js` currently geocodes the
  address by search query; swap in a place-ID embed URL once the business has
  a verified Google Business listing

## Deploying (GitHub Pages)

A workflow at `.github/workflows/deploy.yml` builds and deploys the site on
every push to `main`. One-time setup:

1. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   select **GitHub Actions**.
2. Push to `main` (or re-run the workflow from the **Actions** tab) — the site
   publishes to `https://<your-github-username>.github.io/shitus-2/`.

### Using a custom domain

1. Add a `public/CNAME` file containing just your domain, e.g. `pelhamstgrill.com`
   (this also flips the build's base path from `/shitus-2/` to `/` automatically —
   see `vite.config.js`).
2. At your domain registrar, point the domain at GitHub Pages: an `A` record
   for the apex domain to GitHub's Pages IPs, or a `CNAME` record for a `www`
   subdomain to `<your-github-username>.github.io`. Exact records:
   https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS**
   once DNS propagates.

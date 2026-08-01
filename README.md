# The Pelham Street Grille

A modern website for **The Pelham Street Grille** — a family owned breakfast &
brunch restaurant at 1507 Pelham Street, Fonthill, ON L0S 1E0. Built with
React, Vite, Tailwind CSS, and Framer Motion. Menu, hours, contact info,
logo, and photos are pulled from the restaurant's real content.

## Features

- Full-screen animated hero using a real interior photo, with drifting
  ambient particles and a letter-by-letter title reveal
- Full real menu (13 categories, breakfast through Fish & Chips Fridays and
  vegan options), filterable by category, text-forward with name/description/price
- Photo gallery (real interior + food photography) with a keyboard-navigable
  lightbox
- Location section with an embedded Google Map, animated pin drop, click-to-call,
  click-to-navigate, click-to-email, and a **live open/closed status** computed
  from real Eastern-time hours (including Friday's split breakfast/dinner hours)
- Sticky "Call Us" CTA that appears after scrolling past the hero
- Prime Rib Night section (last Saturday of the month) with a reservation
  request form
- Auto-cycling testimonials carousel, footer with animated newsletter signup
  confirmation
- Scroll-triggered fade/slide-up animations throughout, fully responsive

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Still placeholder / to confirm

- **Testimonials** (`src/data/content.js`) are illustrative — swap in real
  Google/Facebook reviews when available
- **Social links** (`src/components/Footer.jsx`) point to `#` — add real
  Instagram/Facebook URLs
- **Years open / founding details** aren't included since they weren't on the
  source site — add them to `About.jsx` if you'd like a stat/timeline
- `RESTAURANT.mapEmbedSrc` in `src/data/content.js` currently geocodes the
  address by search query; swap in a place-ID embed URL once there's a
  verified Google Business listing
- Gallery/hero photography is limited to the 5 photos recovered from the old
  site (`src/assets/photos/`) — add more for a fuller gallery

## Deploying (GitHub Pages)

A workflow at `.github/workflows/deploy.yml` builds and deploys the site on
every push to `main`. One-time setup:

1. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   select **GitHub Actions**.
2. Push to `main` (or re-run the workflow from the **Actions** tab) — the site
   publishes to `https://<your-github-username>.github.io/shitus-2/`.

### Using a custom domain

1. Add a `public/CNAME` file containing just your domain, e.g. `thepelhamstreetgrille.com`
   (this also flips the build's base path from `/shitus-2/` to `/` automatically —
   see `vite.config.js`).
2. At your domain registrar, point the domain at GitHub Pages: an `A` record
   for the apex domain to GitHub's Pages IPs, or a `CNAME` record for a `www`
   subdomain to `<your-github-username>.github.io`. Exact records:
   https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS**
   once DNS propagates.

# GymTech — Nuxt 3 front-end (Phase 2 build)

    npm install
    npm run dev          # http://localhost:3000  (redirects to /ar or /en)
    npm run build && node .output/server/index.mjs
    npm test             # membership rules + branch/price data checks

## What is real vs placeholder
- **Real:** home page (all sections), /clubs, /links, 404, bilingual AR/EN routing (`/ar`, `/en`), preloader, membership selector + compare, branch filters/empty state, floating WhatsApp, mobile nav, SEO (hreflang, sitemap, robots, JSON-LD).
- **Fixture data** (client-supplied): `data/branches.ts`, `data/plans.ts`, `data/links.ts`. Read through `lib/api/branches.ts`.
- **NOT connected to the existing backend (endpoints unknown):** `lib/api/auth.ts` (login/register throw `NotConfigured`; forms show a clear message), `/profile/*` pages are shells. Replace the adapter bodies once the HAR / API docs are available.
- Subscribe CTA links to `/profile/membership/not-subscribe?duration=&access=&branch=&gender=`. Whether the old backend reads those params is unverified.

## Assumptions to confirm
- Logo: only the attached 150px image was available (exact SVG was unreachable) → `public/img/logo.png` is a transparent recolor of it. Swap in the original SVG.
- Photos are color-graded to the palette (`public/img/*.webp`); confirm usage rights. The third-party "Bagit" ad was not used.
- App Store link uses `/sa/` (live site uses `/eg/`). TikTok + info@gymtech.sa come from the live site.
- Globe markers are city-level (exact branch coordinates not supplied).
- Arabic copy is a draft for native review. Store buttons are styled links, not official badge artwork.
- Tailwind skipped on purpose (tokens + scoped CSS cover it); add if you want it.

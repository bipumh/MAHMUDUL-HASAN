# Brew & Crumb

A premium café and bakery website for **Brew & Crumb** — a specialty coffee roastery and artisan bakery in Gulshan, Dhaka, Bangladesh.

## Overview

Built with a warm, editorial, premium café aesthetic: large serif display type, generous whitespace, warm cream & espresso palette, rich photography and subtle, respectful motion.

### Tech stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (design tokens via `@theme`)
- **Framer Motion** (scroll reveals, page transitions, reduced-motion aware)
- **Lucide React** (icons)
- CMS-ready structured data in `src/data/` for easy later integration

## Pages

- `/` — Home (hero, intro, featured menu, seasonal specials, bakery highlight, atmosphere, testimonials, location/hours, CTAs)
- `/menu` — Full menu with sticky category navigation
- `/cakes` — Cake gallery, categories, flavours, sizes, custom info + order form
- `/gallery` — Filterable masonry gallery
- `/reservations` — Table reservation form + hours & location
- `/about` — Brand story, philosophy, values, team
- `/contact` — Contact info, form, map, social
- `/privacy` & `/terms` — Legal pages

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & quality

```bash
npm run lint
npm run build
npm run start
```

## Data

All site content lives in `src/data/` (`site.ts`, `menu.ts`, `cakes.ts`, `gallery.ts`, `testimonials.ts`, `about.ts`) so it can be swapped for a CMS later without touching the UI components.

> **Note:** Contact details, addresses and reviews are fictional/demo values for this showcase. Replace them with real Brew & Crumb details before going to production.

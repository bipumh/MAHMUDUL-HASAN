# MD. Mahmudul Hasan — IT & Cybersecurity Leader

A premium executive personal website for **MD. Mahmudul Hasan**, an IT & Cybersecurity Leader with 13+ years directing enterprise IT infrastructure, network engineering, information security, IT service management, and multi-site technology operations.

## Overview

A single-page, "Digital Command Center" themed executive website: a dark, minimal, technical aesthetic with a conceptual, interactive enterprise topology visual, animated executive metrics, a layered expertise stack, career timeline, certification wall, and a dramatic closing CTA. All content is sourced from the CV and rendered as structured data in `src/data/`.

### Tech stack

- **Next.js 16** (App Router, TypeScript, static generation)
- **Tailwind CSS v4** (design tokens via `@theme`)
- **Framer Motion** (scroll reveals, counters, reduced-motion aware)
- **Lucide React** (icons)

## Sections

Single-page flow: Hero → Executive Metrics → About / Executive Profile → Expertise (stack + capabilities) → AI-Assisted Operations → Security Operations → Measurable Impact → Achievement Stories → Experience (milestones + timeline) → Current Role → Walton Enterprise Scale → Government ICT → Capability Journey → Certifications → Training → Education → Leadership Principles → Contact.

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

All content lives in `src/data/`: `site.ts`, `profile.ts`, `experience.ts`, `achievements.ts`, `competencies.ts`, `ai.ts`, `certifications.ts`, `training.ts`, `education.ts`, `government.ts`, `journey.ts`.

> **To do before deploying:** place the CV PDF at `public/MD-Mahmudul-Hasan-CV.pdf` (linked by the site's Download CV buttons), and replace the placeholder canonical domain `https://mdmahmudulhasan.com` and YouTube link in `src/data/site.ts` with the real values.

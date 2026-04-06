# Matt Kaszubski — personal site

Static site for Matt Kaszubski — engineering leadership at Asana (Warsaw), bio, and engineering leadership writing.

## Stack

- [Astro](https://astro.build) — static site generator
- `@astrojs/mdx` — MDX support for articles (Astro components inside content)
- `@astrojs/sitemap` — generated sitemap
- TypeScript (strict)
- Vanilla CSS — custom properties, `clamp()` fluid typography, dark theme

## Features

- Home, About, Writing, Stack, and Accessibility pages
- MDX content collection with Zod schema (ISO 8601 dates, typed frontmatter)
- Astro image optimisation via `astro:assets` — article images processed at build time
- Reusable `Callout` component for pull quotes inside articles
- JSON-LD structured data (WebSite, Person, Article)
- Open Graph and Twitter Card meta on every page
- Sitemap via `@astrojs/sitemap`
- Skip link, semantic landmarks, ARIA, focus styles
- All text colours pass WCAG AAA (7:1+)
- `prefers-reduced-motion` respected throughout
- 44×44 px minimum touch targets
- Mobile-first layout

## Project structure

```
src/
  assets/
    writing/           # Article images (optimised at build time)
  content/
    writing/           # MDX articles
  content.config.ts    # Zod schema for writing collection
  i18n/
    en.ts              # Copy and Translations type
    index.ts
  layouts/
    BaseLayout.astro
  components/
    Nav.astro
    Footer.astro
    Callout.astro      # Pull-quote component for MDX articles
  pages/
    index.astro
    about.astro
    writing.astro
    writing/[slug].astro
    accessibility.astro
    stack.astro
    404.astro
public/
  favicon.svg
  robots.txt
```

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## Copy

All English strings live in `src/i18n/en.ts`. Pages import `{ en as t }` from `@/i18n` (re-exported in `index.ts`).

The writing list page (`writing.astro`) pulls post metadata from `en.ts`. The homepage latest-posts section pulls directly from the content collection via `getCollection()`. When adding a new article, update both the MDX file and the matching entry in `en.ts`.

## Nice to have

Improvements flagged for future development.

### SEO

- [x] Add `og-image.svg` to `public/` — branded 1200×630 card; referenced in BaseLayout and Article JSON-LD
- [ ] Convert the static `og-image.svg` to a raster PNG for broadest social platform support (Twitter/X and LinkedIn prefer PNG)
- [ ] Per-page OG images instead of one global fallback
- [x] Add `image` and `dateModified` fields to Article JSON-LD
- [x] Add `isoDate` field to each post in `en.ts`; visible dates now use `<time datetime="...">` throughout

### WCAG AAA

- [x] Wrap visible dates in `<time datetime="...">` — `writing.astro` and `writing/[slug].astro`
- [x] Add breadcrumb navigation on article pages — `<nav aria-label="Breadcrumb">` + `BreadcrumbList` JSON-LD (SC 2.4.8)
- [x] Add `<abbr>` glossary on About page for IC, EM, KPI, SLII, DORA (SC 3.1.3 / 3.1.4)
- [x] Add `<noscript>` fallback for the Experience marquee on the home page

### Robustness

- [ ] Wrap `localStorage.setItem` / `sessionStorage.setItem` calls in try/catch to handle `QuotaExceededError` gracefully
- [ ] Add a null guard at the top of the marquee script (`index.astro`) so a missing DOM element doesn't fail silently
- [ ] Guard `console.error` in `writing/[slug].astro` behind `import.meta.env.DEV` so it doesn't surface in production
- [ ] Make the site URL configurable via env var for staging/preview builds: `process.env.PUBLIC_SITE_URL || "https://mattkaszubski.com"` in `astro.config.ts`

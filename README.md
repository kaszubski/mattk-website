# Matt Kaszubski — personal site

Static site for Matt Kaszubski — engineering leadership at Asana (Warsaw), bio, and engineering leadership writing.

## Stack

- [Astro](https://astro.build) — static site generator
- TypeScript (strict)
- Vanilla CSS — custom properties, `clamp()` fluid typography, dark theme

## Features

- Home, About, Writing, and Accessibility pages
- Content collection with Zod schema (ISO 8601 dates)
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
  content/
    config.ts        # Zod schema for writing collection
    writing/         # Markdown articles
  i18n/
    en.ts            # copy and Translations type
    index.ts
  layouts/
    BaseLayout.astro
  components/
    Nav.astro
    Footer.astro
  pages/
    index.astro
    about.astro
    writing.astro
    writing/[slug].astro
    accessibility.astro
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

## Nice to have

Improvements flagged for future development.

### SEO

- [ ] Add `og-image.png` to `public/` — BaseLayout references it but the file doesn't exist, so every social share shows a broken image
- [ ] Per-page OG images instead of one global fallback
- [ ] Add `image` and `dateModified` fields to Article JSON-LD
- [ ] Custom 404 page
- [ ] Convert i18n dates (`en.ts`) to ISO 8601 to match the content collection

### WCAG AAA

- [ ] Wrap visible dates in `<time datetime="...">` for machine-readable semantics
- [ ] Add breadcrumb navigation on article pages (SC 2.4.8 Location)
- [ ] Add `<abbr>` tags or a glossary for abbreviations like DORA, EM, SLII, IC (SC 3.1.3 / 3.1.4)
- [ ] Add a `<noscript>` fallback message for the hero and marquee

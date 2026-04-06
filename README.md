# Matt Kaszubski — personal site

Static site for Matt Kaszubski — engineering leadership at Asana (Warsaw), bio, and engineering leadership writing.

**Live site:** [mattkaszubski.com](https://mattkaszubski.com)

## Stack

- **[Astro](https://astro.build) 6** — static output, islands / client router where needed
- **MDX** (`@astrojs/mdx`) — articles with a typed content collection (Zod)
- **RSS** (`@astrojs/rss`) — feed generated from the same collection as the writing pages
- **Sitemap** (`@astrojs/sitemap`)
- **TypeScript** (strict) + **`@astrojs/check`** for template/type diagnostics
- **Vanilla CSS** — design tokens in `:root`, scoped components, `clamp()` typography, light/dark themes

## Features

- Pages: Home, About, Writing, Stack, Accessibility, AI manifesto, 404/500
- **Single source of truth** for posts: `src/content/writing/*.mdx` drives the writing index, article routes, **RSS**, and related metadata (titles on About are resolved from the collection)
- `astro:assets` for optimised article images
- JSON-LD (`WebSite`, `Person`, `Article`), Open Graph / Twitter meta, canonical URLs
- **Trailing slashes** enforced in config (`trailingSlash: "always"`) for consistent URLs
- Skip link, landmarks, focus styles, reduced motion, WCAG-oriented contrast (see [Accessibility](https://mattkaszubski.com/accessibility/) on the site)
- **Vitest** (unit helpers) + **Playwright** + **axe** (serious/critical) in CI, with HTML report artifacts on failure

## Project structure

```
src/
  content/writing/       # MDX articles (schema in content.config.ts)
  i18n/en.ts             # Site copy; writing section labels + about featured slugs only
  lib/                   # Shared helpers + *.test.ts
  ...
  pages/
e2e/                     # Playwright specs + helpers
.github/workflows/       # CI (check, unit tests, Playwright)
public/                  # favicon, robots.txt, og-image, self-hosted fonts
```

## Requirements

- **Node.js 22+** (`engines` in `package.json`)

## Development

```bash
npm install
npm run dev              # http://localhost:4321

npm run build
npm run preview

npm run check            # astro check
npm run test             # Vitest
npm run playwright:install   # first-time Playwright browser (local)
npm run test:e2e         # build + preview + Playwright

npm run verify           # check + Vitest + e2e (matches CI)
```

## Content

Add or edit **`src/content/writing/*.mdx`** with valid frontmatter (`title`, `description`, `date`, `mediumUrl`, `category`). The writing index, RSS, and article URLs are derived automatically.

For the About page “featured essays” list, add the slug to **`featuredWritingSlugs`** in `src/i18n/en.ts`. Category labels for the writing index live under **`writing.sectionLabels`**.

## Nice to have

- Raster OG image (PNG/WebP) for broader social crawler support
- Per-article OG images
- Optional hardening: storage quota guards for theme/intro scripts, env-based `site` URL for staging

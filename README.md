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
- **Vitest** (unit helpers) + **Playwright** + **axe** (moderate/serious/critical) in CI, with HTML report artifacts on failure

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

Add or edit **`src/content/writing/*.mdx`** with valid frontmatter (`title`, `description`, `date`, `mediumUrl`, `category`, optional `ogImage`). The writing index, RSS, and article URLs are derived automatically. Articles with `ogImage` get a 1200×630 PNG for social previews; others fall back to the generic OG card.

For the About page “featured essays” list, add the slug to **`featuredWritingSlugs`** in `src/i18n/en.ts`. Category labels for the writing index live under **`writing.sectionLabels`**.

## Future work & tech debt

### Completed

- ~~Raster OG (PNG/WebP) for social crawler support~~ ✅
- ~~Per-route OG images for articles~~ ✅ (articles with `ogImage` frontmatter)
- ~~`try/catch` around `localStorage` / `sessionStorage`~~ ✅
- ~~Theme toggle `aria-pressed` sync on first paint~~ ✅
- ~~Gate CI on axe moderate violations~~ ✅

### Next up

**Content & UX** — highest impact

- Flesh out placeholder articles (4 of 6 are stubs that bounce users to Medium) or remove article routes for stubs and link directly to Medium from the writing index
- Add `ogImage` frontmatter to future articles that include images

**SEO**

- Add `<atom:link rel="self">` to RSS feed for strict validator compliance
- Env-based `site` URL for staging or preview builds so canonicals stay correct

**Accessibility**

- Periodic manual checks: screen reader spot tests, full keyboard pass on custom widgets (marquee, theme control, etc.)
- Add `aria-label` to RSS `<link>` in `<head>`

**Engineering** — low priority / blocked

- `content.config.ts`: Zod API deprecation hints from upstream — revisit when Astro documents the replacement
- Visual regression tests (Playwright screenshots) — nice-to-have, not critical for a personal site
- Broader Playwright coverage beyond axe (keyboard paths, critical interactions) — nice-to-have

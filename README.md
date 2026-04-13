# mattkaszubski.com

Personal site — engineering leadership writing, bio, and career arc.

**[mattkaszubski.com](https://mattkaszubski.com)**

### Highlights

- **6 runtime dependencies** — Astro, MDX, RSS, Sitemap, Vercel Speed Insights, Vercel Web Analytics.
- **Minimal third-party scripts** — only Vercel Speed Insights and Web Analytics (privacy-friendly, no cookies); no external fonts.
- **WCAG AAA accessibility** — automated axe tests on every route in light & dark mode, 44px touch targets, `prefers-reduced-motion` respected across 28 media queries.
- **Fluid design system** — CSS custom properties, `clamp()` typography, full dark/light theme, scoped component styles.
- **CI quality gate** — TypeScript strict, Vitest, Playwright + axe (moderate/serious/critical).

## Stack

| Layer | Choice |
| --- | --- |
| Framework | [Astro 6](https://astro.build) — static output, client router for view transitions |
| Content | MDX with typed Zod collections |
| Styling | Vanilla CSS — design tokens, scoped components, `clamp()` fluid type |
| Fonts | Self-hosted WOFF2 (Syne, Outfit, DM Mono) with `font-display: swap` |
| Testing | Vitest + Playwright + axe-core |
| SEO | JSON-LD, Open Graph, Twitter cards, sitemap, RSS |

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

## License

- **Code** — [MIT](LICENSE)
- **Content** (original articles, images, and written material in `src/content/` and `public/og-image.*`, `public/videos/`) — [CC BY-NC 4.0](LICENSE-content)
- **Third-party fonts** in `public/fonts/` (Syne, Outfit, DM Mono) — [SIL Open Font License](https://openfontlicense.org/)

## Roadmap

- Related-article links at the end of each post
- BreadcrumbList JSON-LD on article pages
- Responsive `srcset` for article images
- Periodic manual screen-reader testing (NVDA, VoiceOver)

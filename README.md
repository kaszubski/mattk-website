# capitaljs.com — Matt Kaszubski

Personal brand website for [Matt Kaszubski](https://capitaljs.com) — Lead Creative Technologist at Asana, Warsaw. Portfolio, bio, and engineering leadership writing.

## Stack

- [Astro](https://astro.build) — static site generator, zero JS runtime
- TypeScript (strict)
- Vanilla CSS — custom properties, `clamp()` fluid typography, dark mode
- No external UI or i18n libraries

## Features

- **Bilingual** — English (`/`) and Polish (`/pl/`) with `hreflang` and `x-default`
- **WCAG 2.2 AA** — skip navigation, `focus-visible`, semantic HTML, proper contrast
- **Mobile-first** — responsive breakpoint at 768px
- **Zero client-side JS**

## Project structure

```
src/
  i18n/
    en.ts          # source-of-truth translations, exports Translations type
    pl.ts          # typed against en.ts — missing keys fail the build
    index.ts       # useTranslations(), getLocaleFromUrl(), getAlternatePath()
  layouts/
    BaseLayout.astro
  components/
    Nav.astro
    Footer.astro
  pages/
    index.astro    # EN /
    pl/
      index.astro  # PL /pl/
public/
  favicon.svg
```

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## Adding translations

All copy lives in `src/i18n/en.ts`. To add a new key:

1. Add it to `en.ts`
2. Add the Polish translation to `pl.ts` — TypeScript will error until both match
3. Use it in components via `useTranslations(locale)`

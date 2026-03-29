# Matt Kaszubski — personal site

Static site for Matt Kaszubski — engineering leadership at Asana (Warsaw), bio, and engineering leadership writing.

## Stack

- [Astro](https://astro.build) — static site generator
- TypeScript (strict)
- Vanilla CSS — custom properties, `clamp()` fluid typography, dark theme

## Features

- Home, About, and Writing sections
- Skip link, semantic regions, focus styles
- Mobile-first layout

## Project structure

```
src/
  i18n/
    en.ts          # copy and Translations type
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

## Copy

All English strings live in `src/i18n/en.ts`. Pages import `{ en as t }` from `@/i18n` (re-exported in `index.ts`).

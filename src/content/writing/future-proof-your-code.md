---
title: "Future-Proof Your Code: Mastering JavaScript Data Grouping"
description: "From forEach loops to Object.groupBy — a practical guide to data grouping in JavaScript with TypeScript-safe implementations."
date: "2024-01-01"
mediumUrl: "https://medium.com/@matt.kaszubski/future-proof-your-code-mastering-javascript-data-grouping-b4183540b8ad"
category: coding
---

*This is a placeholder. The full article is published on Medium.*

Data grouping is one of those operations you write over and over. You have an array of objects, and you want to bucket them by some key. Simple. Except JavaScript gave us no native way to do it for a very long time, so everyone invented their own version.

That changed with `Object.groupBy` — but the migration path is worth understanding.

## The old ways

The classic approach was `reduce`:

```ts
const grouped = items.reduce((acc, item) => {
  const key = item.category;
  (acc[key] ??= []).push(item);
  return acc;
}, {} as Record<string, typeof items>);
```

It works. It's also verbose, easy to get wrong under TypeScript strict mode, and not obviously readable at a glance.

## Object.groupBy

`Object.groupBy` is now baseline — available in all modern browsers and Node 21+:

```ts
const grouped = Object.groupBy(items, (item) => item.category);
```

One line. The TypeScript types (`Record<string, T[] | undefined>`) correctly reflect that a key might not exist.

---

*Read the full piece on [Medium](https://medium.com/@matt.kaszubski/future-proof-your-code-mastering-javascript-data-grouping-b4183540b8ad).*

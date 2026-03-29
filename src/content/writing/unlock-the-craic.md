---
title: "Unlock the Craic: The Konami Code in TypeScript"
description: "How to create a secret easter egg page triggered by the classic Konami Code — keyboard event detection in TypeScript from scratch."
date: "2024"
mediumUrl: "https://medium.com/@matt.kaszubski/unlock-the-craic-how-to-create-a-secret-page-with-the-konami-code-in-typescript-455b3123b873"
category: coding
---

*This is a placeholder. The full article is published on Medium.*

↑ ↑ ↓ ↓ ← → ← → B A

If you recognise that sequence, you already know where this is going.

The Konami Code has been a video game easter egg since 1986. It started as a cheat code in Gradius and became a cultural shorthand for hidden things, for people who look for them. Building one into your own site is partly a technical exercise and mostly an act of personality.

## The core logic

Detecting a key sequence in TypeScript is straightforward: maintain a buffer of recent keypresses, compare it against the target sequence after every key event, and clear the buffer when it either matches or diverges beyond recovery.

```ts
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown',
                 'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
                 'b','a'];

let buffer: string[] = [];

window.addEventListener('keydown', (e) => {
  buffer.push(e.key);
  buffer = buffer.slice(-KONAMI.length);
  if (buffer.join(',') === KONAMI.join(',')) {
    activate();
  }
});
```

## What you do with it

That part is up to you. Redirect, reveal, transform. The mechanism is the same; the payoff is whatever you decide is worth finding.

---

*Read the full piece on [Medium](https://medium.com/@matt.kaszubski/unlock-the-craic-how-to-create-a-secret-page-with-the-konami-code-in-typescript-455b3123b873).*

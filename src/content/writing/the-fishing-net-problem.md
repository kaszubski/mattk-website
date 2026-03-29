---
title: "The Fishing Net Problem"
description: "What we get wrong about measuring engineering efficiency — Goodhart's Law, DORA metrics, and the survivorship bias baked into most dashboards."
date: "2025-01-01"
mediumUrl: "https://medium.com/@matt.kaszubski/the-fishing-net-problem-what-we-get-wrong-about-measuring-engineering-efficiency-2d5688047f29"
category: leadership
---

*This is a placeholder. The full article is published on Medium.*

A fishing net catches what fits through its holes. Everything smaller escapes. If you only ever eat what you catch, you'll start to believe that small fish don't exist.

This is how most engineering efficiency dashboards work.

## Goodhart's Law, briefly

When a measure becomes a target, it ceases to be a good measure. This is Goodhart's Law, and it is possibly the single most violated principle in engineering management.

DORA metrics are useful. Deployment frequency, lead time for changes, change failure rate, time to restore — these things matter. But the moment they become OKRs, they start to deform. Teams optimise for deploys, not for value shipped. Lead time shrinks because the definition of "change" gets narrower. Dashboards look better as the software gets worse.

## Survivorship bias in the mesh

The net problem goes deeper. We measure what we can instrument. We instrument what's already been noticed. So our dashboards are full of metrics that survived the selection process of "things we thought to track" — which means they're biased toward the problems we already knew about.

The incidents that never showed up on the dashboard. The features that shipped on time but were never used. The engineers who left quietly because the metrics said everything was fine.

---

*Read the full piece on [Medium](https://medium.com/@matt.kaszubski/the-fishing-net-problem-what-we-get-wrong-about-measuring-engineering-efficiency-2d5688047f29).*

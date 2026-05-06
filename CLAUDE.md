# CLAUDE.md - Matt K Website

Project guidance for coding agents working in this repository.

## Intent

- Prioritize a fast, polished portfolio experience.
- Keep changes minimal, clear, and easy to review.
- Prefer practical improvements over broad refactors.

## Design and UX Priorities

- Maintain a clean, professional personal-brand aesthetic.
- Preserve responsive behavior across mobile, tablet, and desktop.
- Keep accessibility high: semantic HTML, keyboard support, and clear contrast.
- Avoid visual noise, unnecessary animations, or trendy UI that hurts readability.

## Engineering Principles

- Make surgical edits only for the requested task.
- Reuse existing patterns and components before introducing new abstractions.
- Keep dependencies lean; do not add packages unless clearly justified.
- Favor simple implementations over speculative flexibility.

## Content and Voice

- Keep copy concise, confident, and professional.
- Preserve Matt K's voice: direct, credible, and not overly salesy.
- Avoid filler text and generic AI-sounding phrasing.

## Performance and Quality Bar

- Optimize for Lighthouse-style fundamentals: performance, accessibility, SEO.
- Avoid shipping obvious regressions in load speed or layout stability.
- Validate changed pages/components locally when possible.

## Safety Rails

- Do not modify unrelated files.
- Do not rewrite large sections of the site unless explicitly requested.
- If requirements are ambiguous, ask a focused clarifying question before implementing.

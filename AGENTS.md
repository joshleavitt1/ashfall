# Ashfall project rules

## Product scope

Ashfall is a two-screen web prototype testing whether a moral decision feels meaningful when the village visibly remembers it.

Do not add new product features unless explicitly requested.

## Technical constraints

- React, Vite, and TypeScript.
- No backend.
- No authentication.
- No AI.
- No external artwork.
- No raster image assets.
- Render pixel art from TypeScript data through SVG rectangles.
- Persist game state with LocalStorage.
- Keep state transitions in pure testable functions.

## Design constraints

- Mobile-first.
- Premium dark medieval pixel-art tone.
- Restrained antique-gold accents.
- Avoid generic SaaS design.
- Avoid excessive rounded cards.
- Avoid glossy gradients.
- Keep pixels sharp.
- Concentrate polish on the moral choice and the changed village.

## Engineering expectations

- Inspect existing files before editing.
- Keep components focused.
- Do not add unnecessary dependencies.
- Preserve accessibility.
- Run typecheck, tests, and production build before finishing.
- Fix errors rather than suppressing them.
- Report what changed and any unresolved issues.

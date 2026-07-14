# Ashfall

Ashfall is a two-screen dark-fantasy pixel prototype about a moral choice that changes how a village remembers the player.

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` starts Vite.
- `npm run typecheck` runs TypeScript checks.
- `npm run test` runs Vitest logic tests.
- `npm run build` creates a production build.

## Architecture

- `src/pages` contains the Village Home and Today’s Trial screens.
- `src/components` contains reusable UI and SVG pixel renderers.
- `src/pixel` contains all editable sprite data.
- `src/state` contains pure game transitions and LocalStorage persistence.
- `src/content/trial.ts` contains the fixed moral dilemma copy.

## Pixel-data approach

Sprites are TypeScript objects with `width`, `height`, `palette`, and string rows. `PixelSprite` converts every non-transparent character into an SVG rectangle with crisp edges. Scenes layer these sprites in one responsive SVG coordinate system.

## Add a new sprite

Create a `PixelSpriteData` export in the appropriate `src/pixel/*` file, using `.` for transparent cells, then render it with `PixelSprite` inside `PixelScene` or another SVG.

## Reset the story

Use the small **Reset Story** control on the village screen. It clears `ashfall-game-state-v1` and restores initial traits and title.

## Limitations

This prototype intentionally has only two routes, one trial, no backend, no accounts, no sound, no inventory, and no additional RPG systems.

# Gate 8 — HERO implementation

This batch implements the HERO against Figma node `74:2` and the locked interaction rules.

## Implemented

- 1920 design geometry expressed responsively with container-relative units.
- Sculpted pearl rim, custom molded navigation bridge and non-generic compass dock.
- Playfair editorial headline; DM Mono/technical microcopy; live HTML.
- Real HTML5 video with no autoplay and no loop.
- Desktop pointer-X scrub over the whole HERO.
- Mobile horizontal pointer/touch drag over the same timeline.
- `requestAnimationFrame` interpolation at 0.08.
- Optimized frequent-keyframe MP4 plus WebP poster.
- Organic combined identity/blog rail rather than rectangular cards.
- Current official-source editorial links.
- Custom layered compass medallion.
- Responsive tablet/mobile recomposition.
- Compass control opens a deferred Lagos blueprint overlay shell.

## Deliberately not claimed

- The HERO is not automatically marked visually approved.
- The Lagos map data layer itself is not fabricated. MapLibre remains isolated until a real style/data source is selected.
- The supplied 720p source video remains the media-resolution ceiling.

## Browser acceptance

Run:

```bash
npm install
npx playwright install
npm run verify:assets
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

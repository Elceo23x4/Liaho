# Gate 7 — Code Foundation

## Purpose

This gate establishes a compiling production architecture before any high-fidelity section implementation begins.

It deliberately does **not** declare the HERO or BODY visually approved.

## Runtime architecture

- Next.js App Router + React + TypeScript
- Tailwind CSS v4 for structural utilities
- CSS Modules/custom CSS for art-directed section work
- GSAP + ScrollTrigger for cinematic timelines
- Lenis for smooth scroll, disabled for reduced-motion users
- Motion for React for isolated footer/UI micro-interactions
- MapLibre GL JS loaded only when the Lagos map overlay is needed
- Sanity wiring present but dormant until CMS credentials are supplied
- Playwright smoke coverage

## Non-negotiable implementation contracts

### HERO

- Video does not autoplay and does not loop.
- Desktop pointer X scrubs the timeline.
- Mobile horizontal drag controls the same timeline.
- Pointer Y is not mapped to video time.
- Editorial/blog content remains live HTML.
- Compass control opens the Lagos map experience.
- Existing HERO visual remains unapproved and must return to parity review.

### BODY

- One sticky cinematic system, approximately 900vh.
- Pinned visual stage approximately 100vh.
- Components remain visible after lock.
- Reveal order is immutable:
  `TS_hand → TS_optics → TS_left → TS_right → TS_lens → TS_core → TS_disp → TS_base → TS_foot → TS_comp`
- Giant outline typography remains visually above the instrument where letters intersect.
- Final 10% cross-resolves into `TS_comp.png`.

### FOOTER

- Terrain is one environmental layer.
- Logo/signs/poles/social controls remain live UI.
- Mobile signs become a horizontal draggable rail.
- Engraved copyright slab uses the dedicated raster engraving asset.
- Locked credit: `Crafted with ♥ by 8DAT`.

## Next gate

Gate 8 implements HERO → BODY → FOOTER, section by section, against Figma.

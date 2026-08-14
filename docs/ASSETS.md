# Asset Contract

## Already present in the repository

### Brand

- `public/brand/logo.png`

### HERO

- `public/media/hero/Liahona_hero.mp4`

### BODY

- `public/images/body/TS_hand.png`
- `public/images/body/TS_optics.png`
- `public/images/body/TS_left.png`
- `public/images/body/TS_right.png`
- `public/images/body/TS_lens.png`
- `public/images/body/TS_core.png`
- `public/images/body/TS_disp.png`
- `public/images/body/TS_base.png`
- `public/images/body/TS_foot.png`
- `public/images/body/TS_comp.png`

### FOOTER

- `public/images/footer/footer-terrain.png`

## Pending optimized/approved production assets

These are intentionally warnings, not Gate 7 blockers:

- `public/media/hero/Liahona_hero_scrub.mp4`
- `public/media/hero/Liahona_hero_poster.webp`
- `public/images/body/body-background.webp`
- `public/images/footer/footer-engraved-plaque.webp`

Run:

```bash
npm run verify:assets
```

The command fails only for missing required source assets and warns for pending optimized assets.

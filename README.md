# Liaho

Production landing site for Liahona Geoservices.

## Gate 7 status

The repository currently contains the approved source media/assets and this Gate 7 package adds the production code foundation.

This package does **not** mark HERO or BODY visually approved. It only establishes the architecture required to implement them without structural rework.

## Local setup

```bash
npm install
npx playwright install
cp .env.example .env.local
npm run verify:assets
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run test:e2e
```

## Important

Extract/copy this package into the existing `Liaho` repository root **without deleting the existing `public/` directory**.

See `docs/GATE7_FOUNDATION.md` and `docs/ASSETS.md`.

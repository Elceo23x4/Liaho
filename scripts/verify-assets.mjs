import { access } from "node:fs/promises";
import { constants } from "node:fs";

const required = [
  "public/brand/logo.png",
  "public/media/hero/Liahona_hero.mp4",
  "public/media/hero/Liahona_hero_scrub.mp4",
  "public/media/hero/Liahona_hero_poster.webp",
  "public/images/hero/hero-topography.svg",
  "public/images/body/TS_hand.png",
  "public/images/body/TS_optics.png",
  "public/images/body/TS_left.png",
  "public/images/body/TS_right.png",
  "public/images/body/TS_lens.png",
  "public/images/body/TS_core.png",
  "public/images/body/TS_disp.png",
  "public/images/body/TS_base.png",
  "public/images/body/TS_foot.png",
  "public/images/body/TS_comp.png",
  "public/images/footer/footer-terrain.png",
];

const pending = [
  "public/images/body/body-background.webp",
  "public/images/footer/footer-engraved-plaque.webp",
];

async function exists(path) {
  try {
    await access(path, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

let failed = false;
for (const path of required) {
  if (!(await exists(path))) {
    console.error(`MISSING REQUIRED: ${path}`);
    failed = true;
  } else {
    console.log(`OK: ${path}`);
  }
}
for (const path of pending) {
  if (!(await exists(path))) console.warn(`PENDING ASSET: ${path}`);
  else console.log(`OK: ${path}`);
}
if (failed) process.exit(1);

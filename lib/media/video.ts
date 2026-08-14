export const HERO_VIDEO = {
  source: "/media/hero/Liahona_hero.mp4",
  optimizedSource: "/media/hero/Liahona_hero_scrub.mp4",
  startSeconds: 0.2,
  endSeconds: 9.8,
  interpolation: 0.08,
} as const;

export function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

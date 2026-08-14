export const landingContent = {
  hero: {
    eyebrow: "REGISTERED SURVEYORS / MAPPING CONSULTANTS",
    headline: ["PRECISION, INSIGHT", "AND CONFIDENCE"],
    video: {
      source: "/media/hero/Liahona_hero.mp4",
      optimizedSource: "/media/hero/Liahona_hero_scrub.mp4",
      scrubRangeSeconds: [0.2, 9.8] as const,
      lerp: 0.08,
    },
  },
  navigation: [
    { label: "CORE VALUES", href: "/core-values" },
    { label: "TEAM", href: "/team" },
    { label: "ABOUT", href: "/about" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "HIRE US", href: "/hire-us" },
  ],
} as const;

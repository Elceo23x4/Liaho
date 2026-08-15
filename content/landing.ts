export const landingContent = {
  hero: {
    eyebrow: "REGISTERED SURVEYORS / MAPPING CONSULTANTS",
    headline: ["PRECISION, INSIGHT", "AND CONFIDENCE"],
    video: {
      source: "/media/hero/Liahona_hero.mp4",
      optimizedSource: "/media/hero/Liahona_hero_scrub.mp4",
      poster: "/media/hero/Liahona_hero_poster.webp",
      scrubRangeSeconds: [0.2, 9.8] as const,
      lerp: 0.08,
    },
    stories: [
      {
        category: "PLANNING & APPROVALS",
        headline: "SURVEY PLAN REQUIRED AT e-PLANNING SCREENING",
        source: "LAGOS ePP",
        meta: "LIVE GUIDANCE",
        href: "https://www.epp.lagosstate.gov.ng/Home/Guidance",
      },
      {
        category: "DEVELOPMENT CONTROL",
        headline: "176 ESTATES DIRECTED TO PROCESS LAYOUT APPROVALS",
        source: "LAGOS STATE GOVT",
        meta: "03 AUG 2025",
        href: "https://lagosstate.gov.ng/news/all/view/6890bf04fe883fedf8d7175d",
      },
      {
        category: "LAND ADMINISTRATION",
        headline: "PROPERTY SEARCH AND CERTIFIED TRUE COPY ONLINE",
        source: "LAGOS eGIS",
        meta: "LIVE SERVICE",
        href: "https://landonline.lagosstate.gov.ng/index.html",
      },
    ],
  },
  navigation: [
    { label: "CORE VALUES", href: "/core-values" },
    { label: "TEAM", href: "/team" },
    { label: "ABOUT", href: "/about" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "HIRE US", href: "/hire-us" },
  ],
} as const;

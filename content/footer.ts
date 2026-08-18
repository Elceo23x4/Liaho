export const footerContent = {
  office: {
    label: "OFFICE\nADDRESS:",
    address: "61, Kudirat Abiola Way,\nOregun, Ikeja,\nLagos, Nigeria",
  },
  navigation: {
    team: { label: "TEAM", href: "/team" },
    siteWorks: { label: "SITE WORKS", href: "/portfolio" },
    services: { label: "SERVICES", href: "/#services" },
  },
  contact: {
    label: "CONTACT US",
    email: "liahonageoservices@gmail.com",
    whatsappFallback: "2347039347537",
  },
  socials: [
    {
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || null,
    },
    {
      label: "X",
      href: process.env.NEXT_PUBLIC_X_URL || null,
    },
    {
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || null,
    },
    {
      label: "TikTok",
      href: process.env.NEXT_PUBLIC_TIKTOK_URL || null,
    },
  ],
} as const;

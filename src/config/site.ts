// Central site configuration. Update brand + contact info here — every
// component reads from this file so the site is trivially re-skinnable.
//
// User-facing labels live in src/i18n/translations.ts (bilingual). This file
// keeps only structural data: routes, contact details and SEO defaults.

export const siteConfig = {
  name: "Odd Concepts Digital",
  shortName: "Odd Concepts",
  email: "oddconcepts.ae@gmail.com",
  whatsappDisplay: "+971 56 480 8748",
  whatsappUrl:
    "https://wa.me/971564808748?text=Hi%20Odd%20Concepts%20Digital%2C%20I%27d%20like%20to%20get%20my%20free%20Growth%20Plan%20for%20my%20business.",
  primaryCta: {
    href: "/free-growth-plan",
  },
  nav: [
    { key: "home", href: "/" as const },
    { key: "services", href: "/services" as const },
    { key: "work", href: "/work" as const },
    { key: "about", href: "/about" as const },
    { key: "growthPlan", href: "/free-growth-plan" as const },
  ],
  legal: [
    { key: "privacy", href: "/privacy" as const },
    { key: "terms", href: "/terms" as const },
  ],
  seo: {
    defaultTitle: "Odd Concepts Digital — Premium Digital Growth Studio",
    defaultDescription:
      "Premium websites, sharper visibility and modern content that help ambitious local businesses turn attention into trust, enquiries and customers.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type NavKey = (typeof siteConfig.nav)[number]["key"];
export type LegalKey = (typeof siteConfig.legal)[number]["key"];

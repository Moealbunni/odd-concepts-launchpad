// Central site configuration. Update brand + contact info here — every
// component reads from this file so the site is trivially re-skinnable.

export const siteConfig = {
  name: "Odd Concepts Digital",
  shortName: "Odd Concepts",
  tagline: "Premium Digital Growth Studio",
  positioning:
    "A premium digital growth partner helping businesses turn attention into customers.",
  email: "oddconcepts.ae@gmail.com",
  whatsappDisplay: "+971 56 480 8748",
  whatsappUrl:
    "https://wa.me/971564808748?text=Hi%20Odd%20Concepts%20Digital%2C%20I%27d%20like%20to%20get%20my%20free%20Growth%20Plan%20for%20my%20business.",
  primaryCta: {
    label: "Get Your Free Growth Plan",
    href: "/free-growth-plan",
  },
  secondaryCta: {
    label: "WhatsApp Us",
    // Filled at usage site with whatsappUrl to avoid duplication.
  },
  nav: [
    { label: "Home", href: "/" as const },
    { label: "Services", href: "/services" as const },
    { label: "Work", href: "/work" as const },
    { label: "About", href: "/about" as const },
    { label: "Free Growth Plan", href: "/free-growth-plan" as const },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" as const },
    { label: "Terms", href: "/terms" as const },
  ],
  seo: {
    defaultTitle: "Odd Concepts Digital — Premium Digital Growth Studio",
    defaultDescription:
      "Premium websites, sharper visibility and modern content that help ambitious local businesses turn attention into trust, enquiries and customers.",
  },
} as const;

export type SiteConfig = typeof siteConfig;

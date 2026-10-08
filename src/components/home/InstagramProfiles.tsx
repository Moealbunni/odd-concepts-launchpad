import { Instagram } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { useT } from "@/i18n/LanguageContext";

/** Proper nouns — never translated. */
const accounts = [
  {
    name: "Room 44",
    handle: "@room44dubai",
    url: "https://www.instagram.com/room44dubai/",
    comingSoon: false,
  },
  {
    name: "The Spot Network",
    handle: "@thespotnetwrk",
    url: "https://www.instagram.com/thespotnetwrk/",
    comingSoon: false,
  },
  {
    name: "Amer Central AC",
    handle: "@amercentralac",
    url: "https://www.instagram.com/amercentralac/",
    comingSoon: false,
  },
  {
    name: "VenYa",
    handle: "@venya.dom",
    url: "https://www.instagram.com/venya.dom/",
    comingSoon: true,
  },
];

export function InstagramProfiles() {
  const t = useT();
  return (
    <Section aria-labelledby="instagram-profiles-heading">
      <SectionHeading
        eyebrow={t.instagram.eyebrow}
        title={<span id="instagram-profiles-heading">{t.instagram.title}</span>}
        subtitle={t.instagram.subtitle}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {accounts.map((a, i) => (
          <Reveal key={a.name} delay={i * 100}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.instagram.followAria.replace("{name}", a.name)}
              className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Card className="showcase-card flex h-full min-h-40 flex-col items-start justify-between gap-6 border-highlight-border/60 p-6">
                <div className="flex w-full items-center justify-between gap-2">
                  <Instagram className="size-6 shrink-0 text-highlight" aria-hidden="true" />
                  {a.comingSoon && (
                    <span className="whitespace-nowrap rounded-full border border-highlight-border bg-highlight-soft px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-highlight">
                      {t.instagram.comingSoon}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <h3
                    className="text-base font-semibold text-foreground md:text-lg"
                    dir="ltr"
                  >
                    {a.name}
                  </h3>
                  <p
                    className="mt-1 text-sm text-highlight/80"
                    dir="ltr"
                  >
                    {a.handle}
                  </p>
                </div>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

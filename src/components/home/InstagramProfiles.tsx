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

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {accounts.map((a, i) => (
          <Reveal key={a.name} delay={i * 100}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.instagram.followAria.replace("{name}", a.name)}
              className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Card className="flex h-full items-center justify-between gap-4 p-6">
                <div className="min-w-0">
                  <h3
                    className="text-base font-semibold text-foreground md:text-lg"
                    dir="ltr"
                  >
                    {a.name}
                  </h3>
                  <p
                    className="mt-0.5 truncate text-sm text-muted-foreground"
                    dir="ltr"
                  >
                    {a.handle}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {a.comingSoon && (
                    <span className="whitespace-nowrap rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {t.instagram.comingSoon}
                    </span>
                  )}
                  <Instagram
                    className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </div>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

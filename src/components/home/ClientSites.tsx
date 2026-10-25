import { ArrowUpRight, Globe2 } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { useT } from "@/i18n/LanguageContext";

/** Proper nouns — never translated. */
const clients = [
  { name: "Room 44", url: "https://room44dubai.com/" },
  { name: "VenYa", url: "https://venyadom.com/" },
  { name: "Amer Central AC", url: "https://amercentralac.com/" },
  { name: "The Spot Network", url: "https://thespot-network.com/" },
  { name: "NEXT", url: "https://dark-amber-foundation.lovable.app/en" },
];

export function ClientSites() {
  const t = useT();
  return (
    <Section aria-labelledby="client-sites-heading">
      <SectionHeading
        eyebrow={t.clientSites.eyebrow}
        title={<span id="client-sites-heading">{t.clientSites.title}</span>}
        subtitle={t.clientSites.subtitle}
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((c, i) => (
          <Reveal key={c.name} delay={i * 100}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.clientSites.visitAria.replace("{name}", c.name)}
              className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Card className="website-link-card flex h-full min-h-28 items-center gap-4 rounded-lg p-5 hover:translate-y-0">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background/30">
                  <Globe2 className="size-5 text-highlight" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1" dir="ltr">
                  <h3 className="text-base font-semibold leading-snug text-foreground">{c.name}</h3>
                </div>
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/30 text-muted-foreground group-hover:border-highlight-border group-hover:text-highlight" aria-hidden="true">
                  <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                </div>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

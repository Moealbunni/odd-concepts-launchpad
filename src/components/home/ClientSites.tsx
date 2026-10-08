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

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((c, i) => (
          <Reveal key={c.name} delay={i * 100}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.clientSites.visitAria.replace("{name}", c.name)}
              className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Card className="showcase-card flex h-full min-h-40 flex-col items-start justify-between gap-6 border-highlight-border/60 p-6">
                <div className="flex w-full items-center justify-between">
                  <Globe2 className="size-6 text-highlight" aria-hidden="true" />
                <ArrowUpRight
                  className="size-5 shrink-0 text-highlight transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
                  aria-hidden="true"
                />
                </div>
                <div className="w-full min-w-0" dir="ltr">
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">{c.name}</h3>
                  <p className="mt-1 break-all text-xs leading-relaxed text-highlight/80">{new URL(c.url).hostname}</p>
                </div>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

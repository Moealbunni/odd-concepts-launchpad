import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";

const clients = [
  { name: "Room 44", url: "https://room44dubai.com/" },
  { name: "VenYa", url: "https://venyadom.com/" },
  { name: "Amer Central AC", url: "https://amercentralac.com/" },
];

export function ClientSites() {
  return (
    <Section aria-labelledby="client-sites-heading">
      <SectionHeading
        eyebrow="Live client work"
        title={<span id="client-sites-heading">Sites we’ve shipped.</span>}
        subtitle="Real client websites, live and in use today."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((c, i) => (
          <Reveal key={c.name} delay={i * 100}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${c.name} website (opens in new tab)`}
              className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Card className="flex h-full items-center justify-between gap-4 p-6">
                <h3 className="text-base font-semibold text-foreground md:text-lg">
                  {c.name}
                </h3>
                <ArrowUpRight
                  className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  aria-hidden="true"
                />
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

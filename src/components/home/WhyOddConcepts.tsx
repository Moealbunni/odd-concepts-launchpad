import { MapPin, Target, ShieldCheck } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";

const asideItems = [
  {
    icon: MapPin,
    title: "Based in Dubai",
    line: "A boutique digital growth studio working with ambitious local businesses across the UAE.",
  },
  {
    icon: Target,
    title: "What we sell",
    line: "Growth, trust, visibility and customers — not just websites, AI or ads in isolation.",
  },
  {
    icon: ShieldCheck,
    title: "Our promise",
    line: "No invented clients, borrowed logos or made-up numbers. Everything here is honest.",
  },
];

export function WhyOddConcepts() {
  return (
    <Section aria-labelledby="why-heading">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About us"
            title={
              <span id="why-heading">A studio, not an agency.</span>
            }
            subtitle="Deliberately small, so clients work directly with the people doing the work."
          />
          <Reveal delay={160} className="mt-8 max-w-xl space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Odd Concepts Digital is a boutique digital growth studio in Dubai. We stay small by design: you talk to the strategist and the builder, not an account manager three layers deep.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              AI is our accelerator, not our product. It helps us move faster, write sharper, and build systems that work — but every decision is made by a human who cares about your business.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Card className="h-full p-7 md:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              What matters here
            </h3>
            <ul className="mt-6 space-y-5">
              {asideItems.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-[hsl(var(--surface-elevated))]"
                    aria-hidden
                  >
                    <item.icon className="size-4 text-muted-foreground" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="block text-sm font-medium text-foreground md:text-base">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {item.line}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

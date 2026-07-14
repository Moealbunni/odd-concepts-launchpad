import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";

const principles = [
  "Business problems before technology",
  "Clarity over complexity",
  "Premium execution, every time",
  "Automation that preserves quality",
];

export function WhyOddConcepts() {
  return (
    <Section aria-labelledby="why-heading">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Why Odd Concepts"
            title={
              <span id="why-heading">
                A growth partner — not just another agency.
              </span>
            }
          />
          <Reveal delay={160} className="mt-8 space-y-5 max-w-xl">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              We don&rsquo;t sell websites, AI or marketing for their own sake.
              We sell growth, trust, visibility and customers — and every
              decision we make is measured against those outcomes.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Our edge is combining business strategy, creative quality, speed
              and premium execution, with automation as the accelerator. The
              result: world-class work, delivered fast, without unnecessary
              complexity.
            </p>
          </Reveal>
          <Reveal delay={280} className="mt-8">
            <BrandButton asChild variant="secondary">
              <Link to="/about">More about us</Link>
            </BrandButton>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Card className="h-full p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              How we work
            </h3>
            <ul className="mt-6 space-y-4">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-[hsl(var(--surface-elevated))]"
                    aria-hidden
                  >
                    <Check className="size-3.5 text-foreground" strokeWidth={2.25} />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90 md:text-base">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

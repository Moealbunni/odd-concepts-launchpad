import { Eye, Search, Layers, Gauge } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";

const points = [
  {
    icon: Eye,
    text: "First impressions decide trust in seconds — and your website makes yours.",
  },
  {
    icon: Search,
    text: "If you're hard to find on Google, you're invisible to ready-to-buy customers.",
  },
  {
    icon: Layers,
    text: "Inconsistent content makes premium businesses look ordinary.",
  },
  {
    icon: Gauge,
    text: "Slow, clunky pages send people straight to your competitors.",
  },
];

export function TheReality() {
  return (
    <Section aria-labelledby="reality-heading">
      <SectionHeading
        eyebrow="The Reality"
        title={
          <span id="reality-heading">
            Most businesses lose customers before they ever get in touch.
          </span>
        }
        subtitle="Your digital presence is doing the deciding for you — often before a single conversation happens. When it looks ordinary, loads slowly, or can't be found, people quietly move on."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ icon: Icon, text }, i) => (
          <Reveal key={text} delay={i * 80}>
            <Card className="h-full">
              <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-[hsl(var(--surface-elevated))] text-muted-foreground transition-colors group-hover:text-foreground">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

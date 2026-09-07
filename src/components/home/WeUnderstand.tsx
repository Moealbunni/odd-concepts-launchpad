import {
  UtensilsCrossed,
  Scissors,
  Smile,
  HeartPulse,
  Dumbbell,
  Home,
  Calculator,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { useT } from "@/i18n/LanguageContext";

/** Icons follow the fixed order of `industries.items` in the dictionaries. */
const icons: LucideIcon[] = [
  UtensilsCrossed,
  Scissors,
  Smile,
  HeartPulse,
  Dumbbell,
  Home,
  Calculator,
  Scale,
];

export function WeUnderstand() {
  const t = useT();
  return (
    <Section
      aria-labelledby="industries-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow={t.industries.eyebrow}
        title={<span id="industries-heading">{t.industries.title}</span>}
        subtitle={t.industries.subtitle}
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.industries.items.map(({ name, line }, i) => {
          const Icon = icons[i] ?? UtensilsCrossed;
          return (
            <Reveal key={name} delay={(i % 4) * 60}>
              <Card className="h-full hover:translate-y-0 hover:shadow-none">
                <Icon
                  className="size-6 text-muted-foreground transition-colors group-hover:text-foreground"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {line}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="mt-12">
        <p className="text-center text-sm text-muted-foreground">
          {t.industries.closing}
        </p>
      </Reveal>
    </Section>
  );
}

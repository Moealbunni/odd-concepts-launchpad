import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { useT } from "@/i18n/LanguageContext";

export function ConceptWork() {
  const t = useT();
  return (
    <Section
      aria-labelledby="work-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow={t.concept.eyebrow}
        title={<span id="work-heading">{t.concept.title}</span>}
        subtitle={t.concept.subtitle}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.concept.items.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <Card className="relative flex h-full flex-col p-6">
              <span className="mb-5 inline-flex w-fit items-center rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {t.concept.tag}
              </span>
              <h3 className="text-base font-semibold text-foreground md:text-lg">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.line}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={400}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground/80">
          {t.concept.disclaimer}
        </p>
      </Reveal>
    </Section>
  );
}

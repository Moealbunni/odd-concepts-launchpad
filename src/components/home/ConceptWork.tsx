import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";

const concepts = [
  {
    title: "The Growth System",
    line: "How visibility, trust, content and conversion fit together as one connected machine.",
  },
  {
    title: "Website & interface design",
    line: "Premium, fast, conversion-focused layouts that sell before the visitor reads a second paragraph.",
  },
  {
    title: "Brand & content concepts",
    line: "Tone, messaging and visual systems that make a local business feel unmistakably credible.",
  },
  {
    title: "Industry brand photography",
    line: "Conceptual photo direction for salons, clinics, cafés and studios — the kind of visual trust that stops the scroll.",
  },
];

export function ConceptWork() {
  return (
    <Section
      aria-labelledby="work-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow="Proof of craft"
        title={
          <span id="work-heading">Proof is in the work.</span>
        }
        subtitle="We’re a new studio, so we’ll be straight with you — what you see here is concept work, the standard we build to. Every piece is labelled for exactly what it is. When we have client work we’re proud to show, it’ll live right here beside it."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {concepts.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <Card className="relative flex h-full flex-col p-6">
              <span className="mb-5 inline-flex w-fit items-center rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Concept
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
          All work shown is conceptual and created for demonstration purposes. No clients, logos, results or testimonials are invented.
        </p>
      </Reveal>
    </Section>
  );
}

import { Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";

const concepts = [
  {
    badge: "Concept Project",
    title: "Fine-Dining Restaurant",
    line: "A refined booking-focused concept built around atmosphere and trust.",
    label: "restaurant.concept",
    slug: "fine-dining",
  },
  {
    badge: "Creative Demonstration",
    title: "Modern Dental Clinic",
    line: "A calm, credible concept designed to convert nervous first-time patients.",
    label: "clinic.concept",
    slug: "dental",
  },
  {
    badge: "Sample Work",
    title: "Premium Barbershop",
    line: "A bold, mobile-first concept made to fill the appointment book.",
    label: "barber.concept",
    slug: "barber",
  },
];

/**
 * CSS-only "browser mockup" frame. Purely stylised — clearly not a screenshot.
 * The <img> is an empty, swappable placeholder so a real client image can be
 * dropped in later without touching layout.
 */
function ConceptMockup({ label }: { label: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[hsl(var(--surface-elevated))]">
      {/* Faux window chrome */}
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-border" aria-hidden />
        <span className="size-2.5 rounded-full bg-border" aria-hidden />
        <span className="size-2.5 rounded-full bg-border" aria-hidden />
        <span className="ml-3 flex-1 truncate rounded-md border border-border bg-background px-2 py-1 text-[11px] text-muted-foreground">
          {label}
        </span>
      </div>
      {/* Placeholder canvas */}
      <div
        className="relative flex aspect-[16/10] items-center justify-center"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 10%, hsl(var(--brand-primary) / 0.18) 0%, transparent 55%), radial-gradient(120% 90% at 90% 100%, hsl(var(--brand-accent) / 0.18) 0%, transparent 55%), hsl(var(--card))",
        }}
      >
        {/*
          Swappable placeholder image. Intentionally empty (data URI) — replace
          the src with a real screenshot/asset when a client concept ships.
        */}
        <img
          src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
        />
        <span className="text-sm font-semibold tracking-tight text-foreground/80">
          Odd Concepts <span className="gradient-text">Digital</span>
        </span>
      </div>
    </div>
  );
}

export function ConceptWork() {
  return (
    <Section
      aria-labelledby="work-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow="Selected Concept Work"
        title={
          <span id="work-heading">A glimpse of the standard we build to.</span>
        }
        subtitle="The pieces below are concept projects and creative demonstrations — crafted to show our design standard, not real client results."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {concepts.map((c, i) => (
          <Reveal key={c.slug} delay={i * 100}>
            <Card className="relative flex h-full flex-col overflow-hidden">
              <span className="absolute right-4 top-4 z-10 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                {c.badge}
              </span>
              <ConceptMockup label={c.label} />
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.line}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <BrandButton asChild variant="secondary" size="lg">
          <Link to="/work">View all concept work</Link>
        </BrandButton>
        <p className="text-xs italic text-muted-foreground">
          All work shown is conceptual and created for demonstration purposes.
        </p>
      </div>
    </Section>
  );
}

import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";

const industries = [
  "Restaurants",
  "Cafés",
  "Beauty Salons",
  "Barbers",
  "Gyms",
  "Dental Clinics",
  "Medical Clinics",
  "Real Estate",
  "Car Detailing",
  "Hospitality",
];

export function WeUnderstand() {
  return (
    <Section
      aria-labelledby="industries-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow="We Understand Your Business"
        title={
          <span id="industries-heading">
            Built for the businesses that live and die by first impressions.
          </span>
        }
        subtitle="We work with ambitious local businesses that rely on trust, reputation and a steady flow of new customers."
      />

      <ul className="mt-12 flex flex-wrap gap-3">
        {industries.map((label, i) => (
          <Reveal as="li" key={label} delay={i * 40}>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground/90 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground/40 hover:text-foreground">
              {label}
            </span>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

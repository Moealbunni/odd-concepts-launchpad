import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";

const faqs = [
  {
    q: "What does it cost?",
    a: "It’s priced to what you actually need. We don’t sell one-size-fits-all packages. The Growth Plan is free, and after that we recommend the right work for your goals and budget.",
  },
  {
    q: "How much of my time will this take?",
    a: "Very little. We do the heavy lifting — reviews, design, build, content and setup. You just need to answer a few questions, give us access, and approve the work.",
  },
  {
    q: "What kind of results can I expect?",
    a: "No one can honestly promise specific numbers. What we do is fix the specific reasons customers aren’t finding you, trusting you, or choosing you — then keep improving it.",
  },
  {
    q: "What industries do you work with?",
    a: "Local businesses where reputation and first impressions matter: hospitality, cafés, restaurants, salons, barbers, gyms, dental and medical clinics, real estate, accounting, law and professional services.",
  },
  {
    q: "What is the free Growth Plan?",
    a: "A free review of your visibility, reputation and conversion. You get the gaps we found, the fixes we recommend, and what it would take to put them in place — no cost, no obligation.",
  },
  {
    q: "What makes you different?",
    a: "We build and run one connected system, not a list of separate services. And we use AI as an accelerator behind the scenes — not as a shiny feature to sell you.",
  },
];

export function FaqSection() {
  return (
    <Section
      aria-labelledby="faq-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow="FAQ"
        title={<span id="faq-heading">Straight answers.</span>}
        align="center"
        className="mx-auto"
      />

      <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

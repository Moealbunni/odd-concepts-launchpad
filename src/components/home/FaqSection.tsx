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
    q: "What kind of businesses do you work with?",
    a: "Ambitious local businesses — restaurants, cafés, salons, barbers, gyms, clinics, real estate, car detailing and hospitality — where reputation and first impressions really matter.",
  },
  {
    q: "Do you only build websites?",
    a: "Websites are the foundation, but we also handle visibility, content, paid ads and an AI receptionist — everything that helps turn attention into customers.",
  },
  {
    q: "How long does it take?",
    a: "It depends on scope. After a short Discovery call we'll give you a clear, realistic timeline — most premium sites come together in a few weeks.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what your business needs. We'll recommend the right approach after understanding your goals — the best place to start is a free Growth Plan.",
  },
  {
    q: "What is a Growth Plan?",
    a: "A free, tailored set of recommendations for your business. No pressure and no obligation — just a clear picture of what's possible.",
  },
  {
    q: "Do I need to be technical?",
    a: "Not at all. We handle everything and keep it simple, so you can focus on running your business.",
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
        title={<span id="faq-heading">Questions, answered.</span>}
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

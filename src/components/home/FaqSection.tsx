import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { useT } from "@/i18n/LanguageContext";
import { en } from "@/i18n/translations";

/** English FAQs — used for the static FAQPage JSON-LD in the route head. */
export const faqs = en.faq.items;

export function FaqSection() {
  const t = useT();
  return (
    <Section
      aria-labelledby="faq-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow={t.faq.eyebrow}
        title={<span id="faq-heading">{t.faq.title}</span>}
      />

      <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-5 text-start text-base font-medium text-foreground hover:no-underline md:text-lg">
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

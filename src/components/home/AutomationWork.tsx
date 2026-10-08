import { BrainCircuit, MessageCircle, Workflow } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { useT } from "@/i18n/LanguageContext";

const icons = [BrainCircuit, MessageCircle, Workflow];

export function AutomationWork() {
  const t = useT();
  return (
    <Section aria-labelledby="automation-work-heading" className="border-y border-border/60">
      <SectionHeading
        eyebrow={t.automationWork.eyebrow}
        title={<span id="automation-work-heading">{t.automationWork.title}</span>}
        subtitle={t.automationWork.subtitle}
      />
      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {t.automationWork.items.map((item, index) => {
          const Icon = icons[index] ?? Workflow;
          return (
            <div key={item.title} className="border-t border-border pt-6">
              <Icon className="mb-5 size-7 text-highlight" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
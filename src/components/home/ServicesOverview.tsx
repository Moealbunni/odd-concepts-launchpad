import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageContext";
import type { ServiceLink } from "@/i18n/translations";

function ServiceCard({ name, line, detail, link, expanded, onToggle, expandLabel, collapseLabel, learnMoreLabel }: {
  name: string;
  line: string;
  detail: string;
  link?: ServiceLink;
  expanded: boolean;
  onToggle: () => void;
  expandLabel: string;
  collapseLabel: string;
  learnMoreLabel: string;
}) {
  return (
    <Card className="h-full">
      <div className="flex items-start gap-3">
        <span className="mt-1.5 block size-2 shrink-0 rounded-full gradient-bg" aria-hidden />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{line}</p>
          {link ? (
            <>
              <p className="mt-3 border-t border-border/60 pt-3 text-sm leading-relaxed text-foreground/85">
                {detail}
              </p>
              <Button variant="service" size="sm" asChild className="mt-3 -ms-3">
                <Link to={link}>
                  {learnMoreLabel}
                  <ArrowRight aria-hidden="true" className="rtl:-scale-x-100" />
                </Link>
              </Button>
            </>
          ) : (
            <>
              <div className={expanded ? "grid grid-rows-[1fr] opacity-100 transition-all duration-300 ease-out motion-reduce:transition-none" : "grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out motion-reduce:transition-none"}>
                <p className="overflow-hidden text-sm leading-relaxed text-foreground/85">
                  <span className="block border-t border-border/60 pt-3 mt-3">{detail}</span>
                </p>
              </div>
              <Button
                type="button"
                variant="service"
                size="sm"
                aria-expanded={expanded}
                data-state={expanded ? "open" : "closed"}
                onClick={onToggle}
                className="mt-3 -ms-3"
              >
                {expanded ? collapseLabel : expandLabel}
                {expanded ? <ChevronUp aria-hidden="true" /> : <ChevronDown aria-hidden="true" />}
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}

export function ServicesOverview() {
  const t = useT();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <Section aria-labelledby="services-heading">
      <SectionHeading
        eyebrow={t.services.eyebrow}
        title={<span id="services-heading">{t.services.title}</span>}
        subtitle={t.services.subtitle}
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((service, i) => (
          <Reveal key={service.name} delay={(i % 3) * 80}>
            <ServiceCard
              {...service}
              expanded={expandedIndex === i}
              onToggle={() => setExpandedIndex((current) => current === i ? null : i)}
              expandLabel={t.services.expandMore}
              collapseLabel={t.services.showLess}
              learnMoreLabel={t.services.learnMore}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

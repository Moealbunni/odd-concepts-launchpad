import { Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { useT } from "@/i18n/LanguageContext";

function ServiceCard({ name, line }: { name: string; line: string }) {
  return (
    <Card className="h-full duration-300">
      <div>
        <div className="flex items-start gap-3">
          <span
            className="mt-1.5 block size-2 shrink-0 rounded-full gradient-bg"
            aria-hidden
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {line}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ServicesOverview() {
  const t = useT();
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
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-12 flex justify-center">
        <BrandButton asChild variant="secondary" size="lg">
          <Link to="/services">{t.services.seeAll}</Link>
        </BrandButton>
      </Reveal>
    </Section>
  );
}

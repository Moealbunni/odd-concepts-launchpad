import { Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { useT } from "@/i18n/LanguageContext";

function ServiceCard({ name, line, detail }: { name: string; line: string; detail: string }) {
  return (
    <Card tabIndex={0} className="group h-full duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <div className="flex items-start gap-3">
        <span className="mt-1.5 block size-2 shrink-0 rounded-full gradient-bg" aria-hidden />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{line}</p>
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100 motion-reduce:transition-none">
            <p className="overflow-hidden text-sm leading-relaxed text-foreground/85">
              <span className="block border-t border-border/60 pt-3 mt-3">{detail}</span>
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

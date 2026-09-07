import { Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { siteConfig } from "@/config/site";
import { useT } from "@/i18n/LanguageContext";

export function FinalCta() {
  const t = useT();
  return (
    <Section aria-labelledby="final-cta-heading">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center md:p-16">
          {/* Soft radial brand glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 0%, hsl(var(--brand-primary) / 0.18) 0%, hsl(var(--brand-accent) / 0.10) 45%, transparent 75%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2
              id="final-cta-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              {t.finalCta.heading}
              <span className="gradient-text">{t.finalCta.headingGradient}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.finalCta.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <BrandButton asChild size="lg" className="w-full sm:w-auto">
                <Link to={siteConfig.primaryCta.href}>{t.site.primaryCta}</Link>
              </BrandButton>
              <BrandButton asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.site.whatsappCta}
                </a>
              </BrandButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { TheReality } from "@/components/home/TheReality";
import { GrowthSystem } from "@/components/home/GrowthSystem";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WeUnderstand } from "@/components/home/WeUnderstand";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ConceptWork } from "@/components/home/ConceptWork";
import { WhyOddConcepts } from "@/components/home/WhyOddConcepts";
import { FaqSection, faqs } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { useT } from "@/i18n/LanguageContext";
import skylineAsset from "@/assets/media/dubai-skyline.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.seo.defaultTitle },
      { name: "description", content: siteConfig.seo.defaultDescription },
      { property: "og:title", content: siteConfig.seo.defaultTitle },
      { property: "og:description", content: siteConfig.seo.defaultDescription },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const t = useT();
  return (
    <>
      <section aria-labelledby="hero-heading" className="relative overflow-hidden">
        {/* Soft ambient brand glow — single, static, no loop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 20%, hsl(var(--brand-primary) / 0.14) 0%, hsl(var(--brand-accent) / 0.08) 40%, transparent 70%)",
          }}
        />
        <Container className="flex min-h-[calc(100svh-6rem)] flex-col items-start justify-center py-20 sm:py-28 md:py-36">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span className="size-1.5 rounded-full gradient-bg" aria-hidden />
              {t.hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={120} className="mt-8 max-w-[780px]">
            <h1
              id="hero-heading"
              className="depth-heading text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
            >
              {t.hero.h1}
              <span className="gradient-text">{t.hero.h1Gradient}</span>
            </h1>
          </Reveal>

          <Reveal delay={220} className="mt-8 max-w-[55ch]">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t.hero.subhead}
            </p>
          </Reveal>

          <Reveal delay={320} className="mt-12 w-full">
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <BrandButton asChild size="lg" className="w-full sm:w-auto">
                <Link to={siteConfig.primaryCta.href}>{t.site.primaryCta}</Link>
              </BrandButton>
              <BrandButton asChild size="lg" variant="ghost" className="w-full sm:w-auto">
                <a href="#growth-system">{t.hero.secondaryLink}</a>
              </BrandButton>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span>{t.hero.or}</span>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {t.hero.whatsappInline}
              </a>
            </div>
          </Reveal>

          <Reveal delay={420} className="mt-10">
            <p className="font-mono text-xs tracking-[0.12em] text-muted-foreground/60">
              {t.hero.reassurance}
            </p>
          </Reveal>
        </Container>

        <Container className="pb-20 sm:pb-24">
          <Reveal delay={120}>
            <figure className="m-0">
              <div
                className="overflow-hidden rounded-2xl border border-border/60 bg-background/40 shadow-2xl"
                style={{ aspectRatio: "1920 / 815" }}
              >
                <img
                  src={skylineAsset.url}
                  alt={t.hero.skylineAlt}
                  loading="lazy"
                  decoding="async"
                  width={1920}
                  height={815}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-6 text-center">
                <span className="block text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  {t.hero.captionSmall}
                </span>
                <span className="mt-2 block text-lg font-semibold tracking-[-0.01em] sm:text-2xl">
                  <span className="gradient-text">{t.hero.captionLarge}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>


      <TheReality />
      <GrowthSystem />
      <ServicesOverview />
      <WeUnderstand />
      <HowItWorks />
      <ConceptWork />
      <WhyOddConcepts />
      <FaqSection />
      <FinalCta />
    </>
  );
}

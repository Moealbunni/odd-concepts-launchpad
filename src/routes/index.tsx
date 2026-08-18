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
        <Container className="flex min-h-[calc(100svh-4rem)] flex-col items-start justify-center py-28 md:py-36">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span className="size-1.5 rounded-full gradient-bg" aria-hidden />
              Digital growth studio · Dubai
            </span>
          </Reveal>

          <Reveal delay={120} className="mt-8 max-w-[780px]">
            <h1
              id="hero-heading"
              className="text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
            >
              We don’t just build websites. We build the system that{" "}
              <span className="gradient-text">brings you customers.</span>
            </h1>
          </Reveal>

          <Reveal delay={220} className="mt-8 max-w-[55ch]">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Premium websites, sharper visibility and modern content — designed and run as one system that turns attention into enquiries and customers.
            </p>
          </Reveal>

          <Reveal delay={320} className="mt-12">
            <div className="flex flex-wrap items-center gap-3">
              <BrandButton asChild size="lg">
                <Link to={siteConfig.primaryCta.href}>
                  {siteConfig.primaryCta.label}
                </Link>
              </BrandButton>
              <BrandButton asChild size="lg" variant="ghost">
                <a href="#growth-system">See the Growth System</a>
              </BrandButton>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span>or</span>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                message us on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={420} className="mt-10">
            <p className="font-mono text-xs tracking-[0.12em] text-muted-foreground/60">
              No inflated claims · No borrowed proof · Built with care in Dubai
            </p>
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

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
import { FaqSection } from "@/components/home/FaqSection";
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
          mainEntity: [
            {
              "@type": "Question",
              name: "What kind of businesses do you work with?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ambitious local businesses — restaurants, cafés, salons, barbers, gyms, clinics, real estate, car detailing and hospitality — where reputation and first impressions really matter.",
              },
            },
            {
              "@type": "Question",
              name: "Do you only build websites?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Websites are the foundation, but we also handle visibility, content, paid ads and an AI receptionist — everything that helps turn attention into customers.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on scope. After a short Discovery call we'll give you a clear, realistic timeline — most premium sites come together in a few weeks.",
              },
            },
            {
              "@type": "Question",
              name: "What does it cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on what your business needs. We'll recommend the right approach after understanding your goals — the best place to start is a free Growth Plan.",
              },
            },
            {
              "@type": "Question",
              name: "What is a Growth Plan?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A free, tailored set of recommendations for your business. No pressure and no obligation — just a clear picture of what's possible.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need to be technical?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Not at all. We handle everything and keep it simple, so you can focus on running your business.",
              },
            },
          ],
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
      {/* Restrained radial brand glow behind headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, hsl(var(--brand-primary) / 0.18) 0%, hsl(var(--brand-accent) / 0.10) 40%, transparent 70%)",
        }}
      />
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col items-start justify-center py-24 md:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="size-1.5 rounded-full gradient-bg" aria-hidden />
            {siteConfig.tagline}
          </span>
        </Reveal>

        <Reveal delay={120} className="mt-6 max-w-4xl">
          <h1
            id="hero-heading"
            className="text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-foreground"
          >
            We turn attention into{" "}
            <span className="gradient-text">
              trust, enquiries and customers.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220} className="mt-6 max-w-2xl">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Premium websites, sharper visibility and modern content that help
            ambitious local businesses grow — fast, measurable, and without
            the complexity.
          </p>
        </Reveal>

        <Reveal delay={320} className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <BrandButton asChild size="lg">
              <Link to={siteConfig.primaryCta.href}>
                {siteConfig.primaryCta.label}
              </Link>
            </BrandButton>
            <BrandButton asChild size="lg" variant="secondary">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </BrandButton>
          </div>
        </Reveal>

        <Reveal delay={420} className="mt-6">
          <p className="text-sm text-muted-foreground">
            A long-term growth partner — not another agency.
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

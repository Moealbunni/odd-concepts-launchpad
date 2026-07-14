import { createFileRoute, Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { TheReality } from "@/components/home/TheReality";
import { GrowthSystem } from "@/components/home/GrowthSystem";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WeUnderstand } from "@/components/home/WeUnderstand";

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
    </>
  );
}

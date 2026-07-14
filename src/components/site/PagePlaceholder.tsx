import { Link } from "@tanstack/react-router";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { siteConfig } from "@/config/site";

/**
 * On-brand placeholder for pages that will be built out in later passes.
 * Keeps navigation testable end-to-end without shipping fake content.
 */
export function PagePlaceholder({ name }: { name: string }) {
  return (
    <Container className="flex min-h-[calc(100svh-4rem)] flex-col items-start justify-center py-24 md:py-32">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          {siteConfig.name}
        </span>
      </Reveal>
      <Reveal delay={120} className="mt-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          {name} <span className="gradient-text">— coming together</span>
        </h1>
      </Reveal>
      <Reveal delay={220} className="mt-6 max-w-2xl">
        <p className="text-lg text-muted-foreground">
          This page is being crafted. In the meantime, get a free Growth Plan
          or reach out on WhatsApp — we&rsquo;d love to hear from you.
        </p>
      </Reveal>
      <Reveal delay={320} className="mt-10">
        <div className="flex flex-wrap gap-3">
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
    </Container>
  );
}

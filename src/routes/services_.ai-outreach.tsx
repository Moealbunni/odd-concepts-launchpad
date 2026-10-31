import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig } from "@/config/site";
import { useT } from "@/i18n/LanguageContext";
import { en } from "@/i18n/translations";

const PAGE_URL = "https://oddconceptsdigital.com/services/ai-outreach";

export const Route = createFileRoute("/services_/ai-outreach")({
  head: () => ({
    meta: [
      { title: "AI Outreach Autopilot — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "We find your ideal customers, contact them for you and handle the follow-up — so new enquiries keep arriving without you chasing.",
      },
      {
        property: "og:title",
        content: "AI Outreach Autopilot — Odd Concepts Digital",
      },
      {
        property: "og:description",
        content:
          "We find your ideal customers, contact them for you and handle the follow-up — so new enquiries keep arriving without you chasing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/services/ai-outreach" },
    ],
    links: [{ rel: "canonical", href: "/services/ai-outreach" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: en.aiOutreach.eyebrow,
          description: en.aiOutreach.subtitle,
          serviceType: "AI-powered outbound prospecting and follow-up",
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            email: siteConfig.email,
            url: "https://oddconceptsdigital.com",
          },
          areaServed: "AE",
          url: PAGE_URL,
        }),
      },
    ],
  }),
  component: AiOutreachPage,
});

function AiOutreachPage() {
  const t = useT();
  const d = t.aiOutreach;

  return (
    <>
      <Section className="pt-32 md:pt-40 pb-0">
        <SectionHeading
          as="h1"
          eyebrow={d.eyebrow}
          title={
            <>
              {d.title}
              <span className="gradient-text">{d.titleGradient}</span>
            </>
          }
          subtitle={d.subtitle}
        />

        <Reveal delay={240} className="mt-10">
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <BrandButton asChild size="lg" className="w-full sm:w-auto">
              <Link to={siteConfig.primaryCta.href}>{t.site.primaryCta}</Link>
            </BrandButton>
            <BrandButton
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.site.whatsappCta}
              </a>
            </BrandButton>
          </div>
        </Reveal>

        <Reveal delay={320} className="mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            <ArrowLeft className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            {d.backToServices}
          </Link>
        </Reveal>
      </Section>

      <Section aria-labelledby="ai-outreach-steps-heading">
        <SectionHeading
          eyebrow={d.stepsEyebrow}
          title={
            <span id="ai-outreach-steps-heading">{d.stepsTitle}</span>
          }
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {d.steps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 2) * 80}>
              <Card className="h-full">
                <span className="font-mono text-xs tracking-[0.18em] text-highlight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        aria-labelledby="ai-outreach-included-heading"
        className="bg-[hsl(var(--surface-elevated))]/40"
      >
        <SectionHeading
          eyebrow={d.includedEyebrow}
          title={
            <span id="ai-outreach-included-heading">{d.includedTitle}</span>
          }
        />
        <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {d.included.map((item, i) => (
            <Reveal as="li" key={item} delay={(i % 2) * 60} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-highlight-border bg-highlight-soft/40 text-highlight">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed text-foreground/90">
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="ai-outreach-guard-heading">
        <SectionHeading
          eyebrow={d.guardEyebrow}
          title={<span id="ai-outreach-guard-heading">{d.guardTitle}</span>}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {d.guards.map((item, i) => (
            <Reveal as="li" key={item} delay={(i % 2) * 60}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-border/70 bg-card/60 p-5">
                <ShieldCheck
                  className="mt-0.5 size-5 shrink-0 text-highlight"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}

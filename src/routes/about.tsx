import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig } from "@/config/site";
import { useT } from "@/i18n/LanguageContext";
import palmAsset from "@/assets/media/palm-jumeirah-aerial.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "A Dubai-based digital growth studio helping ambitious local businesses turn attention into customers — honestly, and without borrowed proof.",
      },
      { property: "og:title", content: "About — Odd Concepts Digital" },
      {
        property: "og:description",
        content:
          "A Dubai-based digital growth studio helping ambitious local businesses turn attention into customers.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  return (
    <>
      <Section className="pt-32 md:pt-40">
        <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center md:gap-14">
          <div>
            <SectionHeading
              as="h1"
              eyebrow={t.aboutPage.eyebrow}
              title={
                <>
                  {t.aboutPage.title}
                  <span className="gradient-text">
                    {t.aboutPage.titleGradient}
                  </span>
                  {t.aboutPage.titleAfter}
                </>
              }
              subtitle={t.aboutPage.subtitle}
            />

            <div className="mt-14 space-y-10 text-base leading-relaxed text-muted-foreground md:text-lg">
              <Reveal>
                <p>{t.aboutPage.p1}</p>
              </Reveal>
              <Reveal delay={80}>
                <p>{t.aboutPage.p2}</p>
              </Reveal>
            </div>

            <Reveal delay={160} className="mt-12 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
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
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div
              className="media-frame w-full max-w-sm rounded-xl border border-border/60 md:max-w-none"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src={palmAsset.url}
                alt={t.aboutPage.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}

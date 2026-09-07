import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { siteConfig } from "@/config/site";
import { useT } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "The terms under which the Odd Concepts Digital website is provided.",
      },
      { property: "og:title", content: "Terms — Odd Concepts Digital" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const t = useT();
  return (
    <Section className="pt-32 md:pt-40">
      <div className="max-w-3xl">
        <SectionHeading
          as="h1"
          eyebrow={t.terms.eyebrow}
          title={t.terms.title}
          subtitle={t.terms.subtitle}
        />
        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            <strong className="text-foreground">{t.terms.siteH}</strong>{" "}
            {t.terms.siteB}
          </p>
          <p>
            <strong className="text-foreground">{t.terms.workShownH}</strong>{" "}
            {t.terms.workShownB}
          </p>
          <p>
            <strong className="text-foreground">{t.terms.growthPlanH}</strong>{" "}
            {t.terms.growthPlanB}
          </p>
          <p>
            <strong className="text-foreground">{t.terms.liabilityH}</strong>{" "}
            {t.terms.liabilityB}
          </p>
          <p>
            <strong className="text-foreground">{t.terms.contactH}</strong>{" "}
            {t.terms.contactB}{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground underline underline-offset-4 hover:opacity-80"
              dir="ltr"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}

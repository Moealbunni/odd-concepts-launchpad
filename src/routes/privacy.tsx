import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { siteConfig } from "@/config/site";
import { useT } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "How Odd Concepts Digital handles the information you share through our website and Growth Plan form.",
      },
      { property: "og:title", content: "Privacy — Odd Concepts Digital" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const t = useT();
  return (
    <Section className="pt-32 md:pt-40">
      <div className="max-w-3xl">
        <SectionHeading
          as="h1"
          eyebrow={t.privacy.eyebrow}
          title={t.privacy.title}
          subtitle={t.privacy.subtitle}
        />
        <div className="prose-invert mt-12 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            <strong className="text-foreground">{t.privacy.collectH}</strong>{" "}
            {t.privacy.collectB}
          </p>
          <p>
            <strong className="text-foreground">{t.privacy.whyH}</strong>{" "}
            {t.privacy.whyB}
          </p>
          <p>
            <strong className="text-foreground">{t.privacy.storedH}</strong>{" "}
            {t.privacy.storedB}
          </p>
          <p>
            <strong className="text-foreground">{t.privacy.cookiesH}</strong>{" "}
            {t.privacy.cookiesB}
          </p>
          <p>
            <strong className="text-foreground">{t.privacy.choicesH}</strong>{" "}
            {t.privacy.choicesB}{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground underline underline-offset-4 hover:opacity-80"
              dir="ltr"
            >
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="text-sm text-muted-foreground/80">
            {t.privacy.disclaimer}
          </p>
        </div>
      </div>
    </Section>
  );
}

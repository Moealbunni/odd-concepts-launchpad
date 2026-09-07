import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { ConceptWork } from "@/components/home/ConceptWork";
import { ClientSites } from "@/components/home/ClientSites";
import { MediaShowcase } from "@/components/home/MediaShowcase";
import { FinalCta } from "@/components/home/FinalCta";
import { useT } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "Concept work and creative demonstrations — the standard we build to. Every piece is clearly labelled as concept, not client work.",
      },
      { property: "og:title", content: "Work — Odd Concepts Digital" },
      {
        property: "og:description",
        content:
          "Concept work and creative demonstrations — the standard we build to.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const t = useT();
  return (
    <>
      <Section className="pt-32 md:pt-40 pb-0">
        <SectionHeading
          as="h1"
          eyebrow={t.workPage.eyebrow}
          title={
            <>
              {t.workPage.title}
              <span className="gradient-text">{t.workPage.titleGradient}</span>
              {t.workPage.titleAfter}
            </>
          }
          subtitle={t.workPage.subtitle}
        />
      </Section>
      <ClientSites />
      <MediaShowcase />
      <ConceptWork />
      <FinalCta />
    </>
  );
}

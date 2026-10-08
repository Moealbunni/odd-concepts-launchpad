import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { ClientSites } from "@/components/home/ClientSites";
import { InstagramProfiles } from "@/components/home/InstagramProfiles";
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
          "Real work, shipped and in use — live client websites, Instagram accounts we run, and our own production work.",
      },
      { property: "og:title", content: "Work — Odd Concepts Digital" },
      {
        property: "og:description",
        content:
          "Live client websites, Instagram accounts we run, and real production work.",
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
      <InstagramProfiles />
      <MediaShowcase />
      <FinalCta />
    </>
  );
}

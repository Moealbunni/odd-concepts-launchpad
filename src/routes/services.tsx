import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WeUnderstand } from "@/components/home/WeUnderstand";
import { FinalCta } from "@/components/home/FinalCta";
import { useT } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "One connected system — websites, visibility, content, ads and an AI receptionist — that turns attention into customers.",
      },
      { property: "og:title", content: "Services — Odd Concepts Digital" },
      {
        property: "og:description",
        content:
          "One connected system — websites, visibility, content, ads and an AI receptionist — that turns attention into customers.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  return (
    <>
      <Section className="pt-32 md:pt-40 pb-0">
        <SectionHeading
          as="h1"
          eyebrow={t.servicesPage.eyebrow}
          title={
            <>
              {t.servicesPage.title}
              <span className="gradient-text">{t.servicesPage.titleGradient}</span>
            </>
          }
          subtitle={t.servicesPage.subtitle}
        />
      </Section>
      <ServicesOverview />
      <WeUnderstand />
      <FinalCta />
    </>
  );
}

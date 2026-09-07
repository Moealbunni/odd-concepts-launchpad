import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GrowthPlanForm } from "@/components/forms/GrowthPlanForm";
import { Reveal } from "@/components/primitives/Reveal";
import { useT } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/free-growth-plan")({
  head: () => ({
    meta: [
      { title: "Free Growth Plan — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "Get a free Growth Plan tailored to your business — no pressure, no obligation.",
      },
      {
        property: "og:title",
        content: "Free Growth Plan — Odd Concepts Digital",
      },
      { property: "og:url", content: "/free-growth-plan" },
    ],
    links: [{ rel: "canonical", href: "/free-growth-plan" }],
  }),
  component: FreeGrowthPlanPage,
});

function FreeGrowthPlanPage() {
  const t = useT();
  return (
    <Section className="pt-32 md:pt-40">
      <div className="max-w-3xl">
        <SectionHeading
          as="h1"
          eyebrow={t.growthPlanPage.eyebrow}
          title={
            <>
              {t.growthPlanPage.title}
              <span className="gradient-text">
                {t.growthPlanPage.titleGradient}
              </span>
              {t.growthPlanPage.titleAfter}
            </>
          }
          subtitle={t.growthPlanPage.subtitle}
        />
        <div className="mt-12">
          <Reveal>
            <GrowthPlanForm />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

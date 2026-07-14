import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GrowthPlanForm } from "@/components/forms/GrowthPlanForm";
import { Reveal } from "@/components/primitives/Reveal";

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
  return (
    <Section className="pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="Free Growth Plan"
          title={
            <>
              A clear plan for how to
              <span className="gradient-text"> grow your business</span>.
            </>
          }
          subtitle="Tell us a little about your business. We'll review it carefully and come back with a Growth Plan tailored to you — no cost, no obligation, no pressure."
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

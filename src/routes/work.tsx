import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { ConceptWork } from "@/components/home/ConceptWork";
import { FinalCta } from "@/components/home/FinalCta";

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
  return (
    <>
      <Section className="pt-32 md:pt-40 pb-0">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Work"
            title={
              <>
                The standard we{" "}
                <span className="gradient-text">build to</span>.
              </>
            }
            subtitle="We're a new studio, so we won't dress up someone else's work as ours. What you see here is concept work — clearly labelled — until real client work is ready to sit beside it."
          />
        </div>
      </Section>
      <ConceptWork />
      <FinalCta />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WeUnderstand } from "@/components/home/WeUnderstand";
import { FinalCta } from "@/components/home/FinalCta";

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
  return (
    <>
      <Section className="pt-32 md:pt-40 pb-0">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Services"
            title={
              <>
                Not a menu.{" "}
                <span className="gradient-text">One connected system.</span>
              </>
            }
            subtitle="Every service below plugs into a stage of your growth — visibility, trust, preference, capture, response and growth. You can start with the piece that hurts most; we design the rest so it fits."
          />
        </div>
      </Section>
      <ServicesOverview />
      <WeUnderstand />
      <FinalCta />
    </>
  );
}

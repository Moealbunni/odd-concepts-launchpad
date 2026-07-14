import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

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
  component: () => <PagePlaceholder name="Free Growth Plan" />,
});

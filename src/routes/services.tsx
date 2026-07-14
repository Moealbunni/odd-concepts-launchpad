import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "Websites, visibility and content services built to turn attention into customers.",
      },
      { property: "og:title", content: "Services — Odd Concepts Digital" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => <PagePlaceholder name="Services" />,
});

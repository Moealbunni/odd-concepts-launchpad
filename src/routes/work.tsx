import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "Concept work and creative demonstrations from Odd Concepts Digital.",
      },
      { property: "og:title", content: "Work — Odd Concepts Digital" },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: () => <PagePlaceholder name="Work" />,
});

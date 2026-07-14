import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Odd Concepts Digital" },
      { name: "description", content: "Terms of use for Odd Concepts Digital." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => <PagePlaceholder name="Terms" />,
});

import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "A premium digital growth partner for ambitious local businesses.",
      },
      { property: "og:title", content: "About — Odd Concepts Digital" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => <PagePlaceholder name="About" />,
});

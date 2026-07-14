import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "The terms under which the Odd Concepts Digital website is provided.",
      },
      { property: "og:title", content: "Terms — Odd Concepts Digital" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Terms"
          title="Terms of use."
          subtitle="The short version — no surprises."
        />
        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            <strong className="text-foreground">This site.</strong> The
            Odd Concepts Digital website is provided for information and
            enquiry only. Content, wording, visuals and structure are
            ours — please don&rsquo;t copy or reuse them without asking.
          </p>
          <p>
            <strong className="text-foreground">Work shown.</strong> Any
            portfolio pieces marked &ldquo;Concept&rdquo; are creative
            demonstrations of the standard we build to, not paid client work.
          </p>
          <p>
            <strong className="text-foreground">Growth Plan.</strong> The
            Growth Plan is offered free of charge with no obligation. It
            reflects our honest opinion at the time of writing and is not a
            guarantee of results.
          </p>
          <p>
            <strong className="text-foreground">Liability.</strong> We take
            reasonable care with the information on this site, but we
            can&rsquo;t accept liability for decisions made purely on the
            basis of pages here. Anything binding will always be set out in
            writing when we engage.
          </p>
          <p>
            <strong className="text-foreground">Contact.</strong> Questions?
            Email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground underline underline-offset-4 hover:opacity-80"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}

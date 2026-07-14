import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "How Odd Concepts Digital handles the information you share through our website and Growth Plan form.",
      },
      { property: "og:title", content: "Privacy — Odd Concepts Digital" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section className="pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Privacy"
          title="How we handle your information."
          subtitle="Plain-English summary of what we collect, why, and what we don't do."
        />
        <div className="prose-invert mt-12 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            <strong className="text-foreground">What we collect.</strong> When
            you submit the Growth Plan form, we receive the details you enter
            — your name, business name, email, phone/WhatsApp, business type,
            optional website and what you need help with. That&rsquo;s it.
          </p>
          <p>
            <strong className="text-foreground">Why.</strong> Solely so we can
            read your enquiry and reply to you. We don&rsquo;t sell, rent or
            share your details with third parties.
          </p>
          <p>
            <strong className="text-foreground">How it&rsquo;s stored.</strong>{" "}
            Enquiries are delivered to us by email. We keep them only for as
            long as needed to help you — you can ask us to delete yours at
            any time.
          </p>
          <p>
            <strong className="text-foreground">Cookies.</strong> This site
            doesn&rsquo;t set marketing or tracking cookies. Any cookies used
            are strictly necessary for the site to function.
          </p>
          <p>
            <strong className="text-foreground">Your choices.</strong> To
            request access, correction or deletion of your data, email us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground underline underline-offset-4 hover:opacity-80"
            >
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="text-sm text-muted-foreground/80">
            This is a plain-language summary, not a legal contract. If your
            business has specific compliance requirements, please get in touch
            and we&rsquo;ll be glad to help.
          </p>
        </div>
      </div>
    </Section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Odd Concepts Digital" },
      {
        name: "description",
        content:
          "A Dubai-based digital growth studio helping ambitious local businesses turn attention into customers — honestly, and without borrowed proof.",
      },
      { property: "og:title", content: "About — Odd Concepts Digital" },
      {
        property: "og:description",
        content:
          "A Dubai-based digital growth studio helping ambitious local businesses turn attention into customers.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                A small studio with a{" "}
                <span className="gradient-text">clear point of view</span>.
              </>
            }
            subtitle="Odd Concepts Digital is a Dubai-based growth studio for ambitious local businesses. We design and run one connected system — websites, visibility, content and response — so attention turns into enquiries and enquiries turn into customers."
          />

          <div className="mt-14 space-y-10 text-base leading-relaxed text-muted-foreground md:text-lg">
            <Reveal>
              <p>
                We&rsquo;re new — and we&rsquo;d rather be honest about that
                than borrow someone else&rsquo;s proof. What you see across
                this site is our own concept work, clearly labelled. When we
                have client work we&rsquo;re proud to show, it will live right
                beside it.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                We work best with owners who care about the details, want a
                partner rather than a vendor, and would rather grow steadily
                on a solid foundation than chase a shortcut. If that sounds
                like you, the free Growth Plan is the easiest way to start.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className="mt-12 flex flex-wrap gap-3">
            <BrandButton asChild size="lg">
              <Link to={siteConfig.primaryCta.href}>
                {siteConfig.primaryCta.label}
              </Link>
            </BrandButton>
            <BrandButton asChild size="lg" variant="secondary">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </BrandButton>
          </Reveal>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}

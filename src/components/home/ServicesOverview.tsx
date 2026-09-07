import { Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import speakerAsset from "@/assets/media/smart-speaker-product.jpg.asset.json";

type Service = {
  name: string;
  line: string;
  image?: { src: string; alt: string };
};

const availableNow: Service[] = [
  {
    name: "Premium Websites",
    line: "A fast, modern site that makes the right first impression.",
  },
  {
    name: "Google Business Profile",
    line: "Show up where local customers are already searching.",
  },
  {
    name: "Review Management",
    line: "Build trust before a single conversation happens.",
  },
  {
    name: "UGC Content",
    line: "Real, relatable content that keeps your brand top of mind.",
  },
  {
    name: "Video Advertising",
    line: "Short-form videos that stop the scroll and sell the outcome.",
  },
  {
    name: "AI Avatar Videos",
    line: "Polished brand videos at a pace and cost that scales.",
    image: {
      src: speakerAsset.url,
      alt: "Presenter holding a smart speaker product toward the camera",
    },
  },
  {
    name: "Meta Ads",
    line: "Reach the right people with campaigns built to convert.",
  },
  {
    name: "Instagram & TikTok Ads",
    line: "Show up where attention lives and turn it into enquiries.",
  },
  {
    name: "AI Receptionist",
    line: "Capture and qualify leads around the clock.",
  },
  {
    name: "Apps",
    line: "Custom mobile and web apps that extend your reach.",
  },
  {
    name: "Marketing Automation",
    line: "Turn one-off enquiries into steady, automated follow-up.",
  },
  {
    name: "CRM Automation",
    line: "Keep every lead tracked, nurtured and never forgotten.",
  },
  {
    name: "Business Intelligence",
    line: "Clear dashboards that show what’s actually driving growth.",
  },
];


function ServiceCard({ name, line, image, soon }: Service & { soon?: boolean }) {
  return (
    <Card className="h-full hover:translate-y-0 hover:shadow-none">
      <div className="flex items-start gap-3">
        <span
          className="mt-1.5 block size-2 shrink-0 rounded-full gradient-bg"
          aria-hidden
        />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {line}
          </p>
        </div>
      </div>
      {soon && (
        <span className="mt-4 inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Soon
        </span>
      )}
    </Card>
  );
}

export function ServicesOverview() {
  return (
    <Section aria-labelledby="services-heading">
      <SectionHeading
        eyebrow="What we do"
        title={
          <span id="services-heading">
            Everything that turns attention into customers — connected.
          </span>
        }
        subtitle="Most agencies sell you a single service and leave you to join the dots. We design and run one system — every part below plugs into a stage of your growth."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {availableNow.map((service, i) => (
          <Reveal key={service.name} delay={(i % 3) * 80}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>


      <Reveal delay={120} className="mt-12 flex justify-center">
        <BrandButton asChild variant="secondary" size="lg">
          <Link to="/services">See all services</Link>
        </BrandButton>
      </Reveal>
    </Section>
  );
}

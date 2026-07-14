import {
  Globe,
  MapPin,
  Star,
  Video,
  Megaphone,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";

const services: { icon: LucideIcon; name: string; line: string }[] = [
  {
    icon: Globe,
    name: "Premium Websites",
    line: "Fast, modern, conversion-focused sites that turn visitors into enquiries.",
  },
  {
    icon: MapPin,
    name: "Google Business Profile",
    line: "Show up when local customers are searching — and look credible when they do.",
  },
  {
    icon: Star,
    name: "Review Management",
    line: "Build a reputation that earns trust before the first hello.",
  },
  {
    icon: Video,
    name: "Content & UGC",
    line: "Authentic short-form content that keeps your brand top of mind.",
  },
  {
    icon: Megaphone,
    name: "Video & Paid Ads",
    line: "Meta, Instagram and TikTok campaigns built to bring in qualified leads.",
  },
  {
    icon: Bot,
    name: "AI Receptionist",
    line: "Capture and qualify enquiries 24/7 so no opportunity slips away.",
  },
];

export function ServicesOverview() {
  return (
    <Section aria-labelledby="services-heading">
      <SectionHeading
        eyebrow="What We Do"
        title={
          <span id="services-heading">
            Everything you need to grow — under one roof.
          </span>
        }
        subtitle="Premium execution across the touchpoints that win trust and customers."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, name, line }, i) => (
          <Reveal key={name} delay={(i % 3) * 80}>
            <Card className="h-full">
              <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-[hsl(var(--surface-elevated))] text-muted-foreground transition-colors group-hover:text-foreground">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {line}
              </p>
            </Card>
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

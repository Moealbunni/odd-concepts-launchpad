import {
  UtensilsCrossed,
  Scissors,
  Smile,
  HeartPulse,
  Dumbbell,
  Home,
  Calculator,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";

const industries: { icon: LucideIcon; name: string; line: string }[] = [
  {
    icon: UtensilsCrossed,
    name: "Cafés & Restaurants",
    line: "Fill quiet tables and turn first-time guests into regulars.",
  },
  {
    icon: Scissors,
    name: "Salons & Barbers",
    line: "Keep the chairs full and the calendar booked.",
  },
  {
    icon: Smile,
    name: "Dental Clinics",
    line: "Become the practice patients trust before they call.",
  },
  {
    icon: HeartPulse,
    name: "Medical & Wellness",
    line: "Turn quiet searches into booked appointments.",
  },
  {
    icon: Dumbbell,
    name: "Gyms & Studios",
    line: "Attract members who actually stay.",
  },
  {
    icon: Home,
    name: "Real Estate",
    line: "Get in front of buyers and sellers first.",
  },
  {
    icon: Calculator,
    name: "Accounting & Finance",
    line: "Win clients who value expertise over price.",
  },
  {
    icon: Scale,
    name: "Law Firms",
    line: "Be the firm clients choose with confidence.",
  },
];

export function WeUnderstand() {
  return (
    <Section
      aria-labelledby="industries-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow="Who we build for"
        title={
          <span id="industries-heading">
            We speak your industry — not “business in general”.
          </span>
        }
        subtitle="We work with ambitious local businesses that rely on trust, reputation and a steady flow of new customers."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map(({ icon: Icon, name, line }, i) => (
          <Reveal key={name} delay={(i % 4) * 60}>
            <Card className="h-full hover:translate-y-0 hover:shadow-none">
              <Icon
                className="size-6 text-muted-foreground transition-colors group-hover:text-foreground"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {line}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-12">
        <p className="text-center text-sm text-muted-foreground">
          And any local business that deserves more customers than it’s getting.
        </p>
      </Reveal>
    </Section>
  );
}

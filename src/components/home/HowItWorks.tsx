import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { BrandButton } from "@/components/primitives/BrandButton";
import { Link } from "@tanstack/react-router";

const steps = [
  {
    title: "Get your free Growth Plan",
    line: "We review how easily customers find you, how much you’re trusted at a glance, and where enquiries slip away.",
  },
  {
    title: "We build your system",
    line: "Website, profiles, content and lead capture — designed and connected as one, not bolted together.",
  },
  {
    title: "You grow",
    line: "We run it and keep improving it, so you can focus on your business.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setPlay(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shown = play || reduced;

  return (
    <Section aria-labelledby="how-heading">
      <SectionHeading
        eyebrow="How it works"
        title={
          <span id="how-heading">
            Simple to start. Built to last.
          </span>
        }
        subtitle="A clear, three-step path from where you are now to a system that brings you customers."
      />

      <div ref={ref} className="relative mt-16 md:mt-20">
        {/* Desktop connector line: between the three numbered nodes */}
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden md:block">
          <div className="relative mx-[12%] h-px overflow-hidden">
            <div className="absolute inset-0 bg-border" />
            <div
              className="absolute inset-y-0 left-0 origin-left"
              style={{
                width: "100%",
                background: "linear-gradient(90deg, #3B82F6 0%, #A855F7 100%)",
                transform: `scaleX(${shown ? 1 : 0})`,
                transition: reduced ? "none" : "transform 1000ms ease-out 300ms",
              }}
            />
          </div>
        </div>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120}>
              <div className="relative flex flex-row items-start gap-5 md:flex-col md:items-start md:gap-6">
                <div
                  className={`relative flex size-12 shrink-0 items-center justify-center rounded-full bg-background text-sm font-semibold ${
                    i === 0 ? "gradient-text" : "text-muted-foreground"
                  }`}
                  style={{
                    backgroundImage:
                      i === 0
                        ? "linear-gradient(hsl(var(--background)), hsl(var(--background))), linear-gradient(135deg, #3B82F6, #A855F7)"
                        : "linear-gradient(hsl(var(--background)), hsl(var(--background))), linear-gradient(135deg, hsl(var(--border)), hsl(var(--border)))",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    border: "1px solid transparent",
                  }}
                  aria-hidden
                >
                  <span className={i === 0 ? "gradient-text" : ""}>0{i + 1}</span>
                </div>
                <div className="pt-0.5 md:pt-0">
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {step.line}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={360} className="mt-14 flex justify-center md:mt-16">
          <BrandButton asChild size="lg">
            <Link to="/free-growth-plan">Get Your Free Growth Plan</Link>
          </BrandButton>
        </Reveal>
      </div>
    </Section>
  );
}

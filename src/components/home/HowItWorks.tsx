import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";

const steps = [
  {
    title: "Discovery",
    line: "We learn your business, your goals and the customers you want more of.",
  },
  {
    title: "Strategy & Design",
    line: "We map the plan and design a premium, conversion-focused experience.",
  },
  {
    title: "Build & Launch",
    line: "We build fast, test everything, and launch with care.",
  },
  {
    title: "Grow & Improve",
    line: "We review, refine and keep improving based on what actually works.",
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
        eyebrow="How It Works"
        title={
          <span id="how-heading">
            A calm, proven process — from first call to real growth.
          </span>
        }
        subtitle="No chaos, no guesswork. Just a clear path from where you are to where you want to be."
      />

      <div ref={ref} className="relative mt-16">
        {/* Desktop connector line */}
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden md:block">
          <div className="relative mx-[8%] h-px overflow-hidden">
            <div className="absolute inset-0 bg-border" />
            <div
              className="absolute inset-y-0 left-0 origin-left"
              style={{
                width: "100%",
                background: "linear-gradient(90deg, #3B82F6 0%, #A855F7 100%)",
                transform: `scaleX(${shown ? 1 : 0})`,
                transition: reduced
                  ? "none"
                  : "transform 900ms ease-out 200ms",
              }}
            />
          </div>
        </div>

        {/* Mobile vertical connector */}
        <div className="pointer-events-none absolute left-6 top-6 bottom-6 w-px overflow-hidden md:hidden">
          <div className="absolute inset-0 bg-border" />
          <div
            className="absolute inset-x-0 top-0 origin-top"
            style={{
              height: "100%",
              background: "linear-gradient(180deg, #3B82F6 0%, #A855F7 100%)",
              transform: `scaleY(${shown ? 1 : 0})`,
              transition: reduced ? "none" : "transform 900ms ease-out 200ms",
            }}
          />
        </div>

        <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120}>
              <div className="relative flex flex-row items-start gap-4 md:flex-col md:items-start md:gap-5">
                <div
                  className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-background text-sm font-semibold text-foreground"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--background)), hsl(var(--background))), linear-gradient(135deg, #3B82F6, #A855F7)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    border: "1px solid transparent",
                  }}
                  aria-hidden
                >
                  <span className="gradient-text">0{i + 1}</span>
                </div>
                <div className="pt-1 md:pt-0">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.line}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

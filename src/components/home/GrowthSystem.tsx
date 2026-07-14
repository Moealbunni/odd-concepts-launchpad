import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { BrandButton } from "@/components/primitives/BrandButton";
import { siteConfig } from "@/config/site";

/**
 * The six-stage growth system — one connected system that ascends from
 * "invisible" to "growing". The centrepiece diagram of the site.
 *
 * Desktop: horizontal ascending curve through six nodes rising left→right.
 * Mobile: dedicated vertical variant — nodes stacked top→bottom with a
 * vertical curve on the left rail. Both share the same six stages.
 *
 * Animation: on scroll into view, the gradient curve strokes in (via
 * stroke-dashoffset with pathLength=1) and nodes fade/scale in sequence
 * (~1.5s total, ease-out). `prefers-reduced-motion` shows the final state
 * instantly, no draw.
 */

type Stage = { n: string; name: string; verb: string; line: string };

const stages: Stage[] = [
  {
    n: "01",
    name: "Visibility",
    verb: "Get found",
    line: "When people search, you’re the one they find.",
  },
  {
    n: "02",
    name: "Trust",
    verb: "Look premium",
    line: "A first impression that makes you the obvious choice.",
  },
  {
    n: "03",
    name: "Preference",
    verb: "Get chosen",
    line: "Reputation and content that tip the decision your way.",
  },
  {
    n: "04",
    name: "Capture",
    verb: "Get the enquiry",
    line: "Make it effortless to take the next step.",
  },
  {
    n: "05",
    name: "Response",
    verb: "Never miss a lead",
    line: "Every enquiry answered, day or night.",
  },
  {
    n: "06",
    name: "Growth",
    verb: "Grow on autopilot",
    line: "One visit becomes repeat, compounding revenue.",
  },
];

const ariaSummary =
  "Growth system diagram: six connected stages that turn attention into growth — Visibility, Trust, Preference, Capture, Response, Growth.";

/** Hook: fires `true` once when the element scrolls into view. */
function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/** Hook: reads prefers-reduced-motion once on mount. */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

export function GrowthSystem() {
  const [ref, inView] = useInView<HTMLDivElement>(0.2);
  const reduced = useReducedMotion();
  const play = inView || reduced;

  return (
    <Section
      id="growth-system"
      aria-labelledby="growth-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow="The Growth System"
        title={
          <span id="growth-heading">
            One connected system — from invisible to{" "}
            <span className="gradient-text">growing</span>.
          </span>
        }
        subtitle="Six stages, one engine. Each stage builds on the last — turning quiet visibility into a business that grows on its own."
      />

      <div ref={ref} className="mt-16">
        <DesktopDiagram play={play} reduced={reduced} />
        <MobileDiagram play={play} reduced={reduced} />
      </div>

      <div className="mt-14 flex flex-col items-center gap-3">
        <BrandButton asChild variant="secondary" size="lg">
          <Link to={siteConfig.primaryCta.href}>
            Map this system to your business
          </Link>
        </BrandButton>
        <p className="text-xs text-muted-foreground">
          Free Growth Plan — no pressure, no obligation.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop: horizontal ascending curve                                */
/* ------------------------------------------------------------------ */

function DesktopDiagram({ play, reduced }: { play: boolean; reduced: boolean }) {
  // Six evenly-spaced columns so the copy grid below aligns exactly.
  const W = 1200;
  const H = 440;
  const xs = stages.map((_, i) => ((i + 0.5) / stages.length) * W); // 100..1100
  // Ascending: y decreases as i increases.
  const yTop = 100;
  const yBottom = 360;
  const ys = stages.map(
    (_, i) => yBottom - (i / (stages.length - 1)) * (yBottom - yTop),
  );

  // Smooth cubic through the six points using horizontal-tangent control pts.
  const dx = xs[1] - xs[0];
  const cx = dx / 2;
  let d = `M ${xs[0]} ${ys[0]}`;
  for (let i = 1; i < stages.length; i++) {
    d += ` C ${xs[i - 1] + cx} ${ys[i - 1]}, ${xs[i] - cx} ${ys[i]}, ${xs[i]} ${ys[i]}`;
  }

  const strokeTransition = reduced
    ? "none"
    : "stroke-dashoffset 1800ms cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div className="hidden md:block">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label={ariaSummary}
      >
        <defs>
          <linearGradient id="gs-grad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <radialGradient id="gs-final" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#3B82F6" />
          </radialGradient>
        </defs>

        {/* Faint baseline for context */}
        <line
          x1={0}
          y1={yBottom + 40}
          x2={W}
          y2={yBottom + 40}
          stroke="hsl(var(--border))"
          strokeOpacity="0.5"
          strokeDasharray="2 6"
          aria-hidden
        />

        {/* Ascending gradient curve — draws in via stroke-dashoffset */}
        <path
          d={d}
          fill="none"
          stroke="url(#gs-grad)"
          strokeWidth={2.5}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={play ? 0 : 1}
          style={{ transition: strokeTransition }}
          aria-hidden
        />

        {/* Nodes */}
        {stages.map((s, i) => {
          const isFinal = i === stages.length - 1;
          const delay = 300 + i * 140;
          const nodeTransition = reduced
            ? "none"
            : `opacity 520ms ease-out ${delay}ms, transform 520ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`;
          return (
            <g
              key={s.name}
              style={{
                opacity: play ? 1 : 0,
                transform: play ? "scale(1)" : "scale(0.6)",
                transformOrigin: `${xs[i]}px ${ys[i]}px`,
                transformBox: "fill-box",
                transition: nodeTransition,
              }}
            >
              {/* Number (mono) above node */}
              <text
                x={xs[i]}
                y={ys[i] - 26}
                textAnchor="middle"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                fontSize="12"
                fill="hsl(var(--muted-foreground))"
                style={{ letterSpacing: "0.18em" }}
              >
                {s.n}
              </text>

              {/* Node dot — final one is emphasised */}
              {isFinal ? (
                <>
                  <circle
                    cx={xs[i]}
                    cy={ys[i]}
                    r={22}
                    fill="none"
                    stroke="#A855F7"
                    strokeOpacity="0.35"
                  />
                  <circle
                    cx={xs[i]}
                    cy={ys[i]}
                    r={13}
                    fill="url(#gs-final)"
                  />
                </>
              ) : (
                <>
                  <circle
                    cx={xs[i]}
                    cy={ys[i]}
                    r={9}
                    fill="hsl(var(--card))"
                    stroke="url(#gs-grad)"
                    strokeWidth={2}
                  />
                  <circle cx={xs[i]} cy={ys[i]} r={3} fill="url(#gs-grad)" />
                </>
              )}

              {/* One-word stage label */}
              <text
                x={xs[i]}
                y={ys[i] + 40}
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontSize="16"
                fontWeight={600}
                fill="hsl(var(--foreground))"
                style={{ letterSpacing: "-0.01em" }}
              >
                {s.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Aligned copy grid — six columns match node x centres exactly */}
      <ul
        className="mt-4 grid grid-cols-6 gap-x-4"
        aria-label="Growth system stages"
      >
        {stages.map((s, i) => {
          const delay = 700 + i * 100;
          return (
            <li
              key={s.name}
              className="text-center"
              style={{
                opacity: play ? 1 : 0,
                transform: play ? "translateY(0)" : "translateY(8px)",
                transition: reduced
                  ? "none"
                  : `opacity 500ms ease-out ${delay}ms, transform 500ms ease-out ${delay}ms`,
              }}
            >
              <p className="text-sm font-medium text-foreground">{s.verb}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {s.line}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile: dedicated vertical variant                                 */
/* ------------------------------------------------------------------ */

function MobileDiagram({ play, reduced }: { play: boolean; reduced: boolean }) {
  // Fixed row height so the SVG curve maps precisely to node centres.
  const rowH = 128;
  const nodeCount = stages.length;
  const totalH = rowH * nodeCount;
  const xCenter = 24;

  // Vertical curve — a gentle S so it feels drawn, not mechanical.
  const ys = stages.map((_, i) => rowH * i + rowH / 2);
  let d = `M ${xCenter} ${ys[0]}`;
  for (let i = 1; i < nodeCount; i++) {
    const midY = (ys[i - 1] + ys[i]) / 2;
    const bend = i % 2 === 0 ? 6 : -6;
    d += ` C ${xCenter + bend} ${midY}, ${xCenter - bend} ${midY}, ${xCenter} ${ys[i]}`;
  }

  const strokeTransition = reduced
    ? "none"
    : "stroke-dashoffset 1800ms cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div className="md:hidden">
      <div className="relative pl-14">
        <svg
          viewBox={`0 0 48 ${totalH}`}
          width="48"
          height={totalH}
          className="absolute left-0 top-0"
          role="img"
          aria-label={ariaSummary}
        >
          <defs>
            <linearGradient id="gs-grad-m" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <radialGradient id="gs-final-m" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#3B82F6" />
            </radialGradient>
          </defs>

          <path
            d={d}
            fill="none"
            stroke="url(#gs-grad-m)"
            strokeWidth={2.5}
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={play ? 0 : 1}
            style={{ transition: strokeTransition }}
            aria-hidden
          />

          {stages.map((s, i) => {
            const isFinal = i === stages.length - 1;
            const delay = 250 + i * 130;
            return (
              <g
                key={s.name}
                style={{
                  opacity: play ? 1 : 0,
                  transform: play ? "scale(1)" : "scale(0.6)",
                  transformOrigin: `${xCenter}px ${ys[i]}px`,
                  transformBox: "fill-box",
                  transition: reduced
                    ? "none"
                    : `opacity 500ms ease-out ${delay}ms, transform 500ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
                }}
              >
                {isFinal ? (
                  <>
                    <circle
                      cx={xCenter}
                      cy={ys[i]}
                      r={20}
                      fill="none"
                      stroke="#A855F7"
                      strokeOpacity="0.35"
                    />
                    <circle
                      cx={xCenter}
                      cy={ys[i]}
                      r={12}
                      fill="url(#gs-final-m)"
                    />
                  </>
                ) : (
                  <>
                    <circle
                      cx={xCenter}
                      cy={ys[i]}
                      r={9}
                      fill="hsl(var(--card))"
                      stroke="url(#gs-grad-m)"
                      strokeWidth={2}
                    />
                    <circle
                      cx={xCenter}
                      cy={ys[i]}
                      r={3}
                      fill="url(#gs-grad-m)"
                    />
                  </>
                )}
              </g>
            );
          })}
        </svg>

        <ol className="grid" style={{ gridTemplateRows: `repeat(${nodeCount}, ${rowH}px)` }}>
          {stages.map((s, i) => {
            const delay = 300 + i * 130;
            return (
              <li
                key={s.name}
                className="flex flex-col justify-center"
                style={{
                  opacity: play ? 1 : 0,
                  transform: play ? "translateX(0)" : "translateX(8px)",
                  transition: reduced
                    ? "none"
                    : `opacity 520ms ease-out ${delay}ms, transform 520ms ease-out ${delay}ms`,
                }}
              >
                <span
                  className="text-[11px] tracking-[0.2em] text-muted-foreground"
                  style={{
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, monospace",
                  }}
                >
                  {s.n}
                </span>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                  {s.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-foreground/90">
                  {s.verb}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.line}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

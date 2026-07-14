import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";

const pipeline = ["Attention", "Trust", "Enquiries", "Customers", "Revenue"];
const inputs = ["Premium Website", "Visibility", "Content", "Automation"];

/**
 * Signature growth-system diagram.
 * Inline SVG, viewBox-based, responsive. Stacks vertically on small screens.
 * Connectors draw in on scroll; nodes fade+rise. Reduced motion => final state.
 */
export function GrowthSystem() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const el = wrapRef.current;
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
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shown = play || reduced;

  // Geometry
  const W = 1200;
  const H = 520;
  const pipeY = 360;
  const nodeW = 180;
  const nodeH = 56;
  const gap = (W - nodeW * pipeline.length) / (pipeline.length + 1);
  const nodeX = (i: number) => gap + i * (nodeW + gap);
  const nodeCx = (i: number) => nodeX(i) + nodeW / 2;

  const inputY = 120;
  const inputW = 200;
  const inputH = 44;
  const iGap = (W - inputW * inputs.length) / (inputs.length + 1);
  const inputX = (i: number) => iGap + i * (inputW + iGap);
  const inputCx = (i: number) => inputX(i) + inputW / 2;

  return (
    <Section
      aria-labelledby="growth-heading"
      className="bg-[hsl(var(--surface-elevated))]/40"
    >
      <SectionHeading
        eyebrow="The Growth System"
        title={
          <span id="growth-heading">
            A simple system that turns attention into revenue.
          </span>
        }
        subtitle="Everything we build feeds one connected system — designed to attract the right people, earn their trust, and turn them into loyal customers."
      />

      <div
        ref={wrapRef}
        className="mt-14 rounded-2xl border border-border bg-card p-6 md:p-10"
      >
        {/* Desktop / tablet SVG diagram */}
        <div className="hidden md:block">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            role="img"
            aria-label="Growth system pipeline: Attention to Trust to Enquiries to Customers to Revenue, fed by Premium Website, Visibility, Content, and Automation."
          >
            <defs>
              <linearGradient id="brand-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill="url(#brand-grad)" />
              </marker>
            </defs>

            {/* Input pillars (top row) */}
            {inputs.map((label, i) => (
              <g
                key={label}
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateY(0)" : "translateY(-8px)",
                  transition: reduced
                    ? "none"
                    : `opacity 600ms ease-out ${i * 90}ms, transform 600ms ease-out ${i * 90}ms`,
                }}
              >
                <rect
                  x={inputX(i)}
                  y={inputY}
                  width={inputW}
                  height={inputH}
                  rx={22}
                  fill="hsl(var(--surface-elevated))"
                  stroke="hsl(var(--border))"
                />
                <text
                  x={inputCx(i)}
                  y={inputY + inputH / 2 + 5}
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="15"
                  fontWeight={500}
                  fill="hsl(var(--foreground))"
                >
                  {label}
                </text>
              </g>
            ))}

            {/* Feeder lines from inputs down to nearest pipeline node */}
            {inputs.map((label, i) => {
              const targetIdx = Math.min(i + 1, pipeline.length - 1);
              const x1 = inputCx(i);
              const y1 = inputY + inputH;
              const x2 = nodeCx(targetIdx);
              const y2 = pipeY;
              const len = Math.hypot(x2 - x1, y2 - y1);
              return (
                <line
                  key={`feed-${label}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="hsl(var(--border))"
                  strokeWidth={1}
                  strokeDasharray={len}
                  strokeDashoffset={shown ? 0 : len}
                  style={{
                    transition: reduced
                      ? "none"
                      : `stroke-dashoffset 700ms ease-out ${200 + i * 90}ms`,
                  }}
                />
              );
            })}

            {/* Pipeline connectors */}
            {pipeline.slice(0, -1).map((_, i) => {
              const x1 = nodeX(i) + nodeW;
              const x2 = nodeX(i + 1);
              const len = x2 - x1;
              return (
                <line
                  key={`conn-${i}`}
                  x1={x1}
                  y1={pipeY + nodeH / 2}
                  x2={x2 - 8}
                  y2={pipeY + nodeH / 2}
                  stroke="url(#brand-grad)"
                  strokeWidth={1.5}
                  markerEnd="url(#arrow)"
                  strokeDasharray={len}
                  strokeDashoffset={shown ? 0 : len}
                  style={{
                    transition: reduced
                      ? "none"
                      : `stroke-dashoffset 600ms ease-out ${400 + i * 120}ms`,
                  }}
                />
              );
            })}

            {/* Pipeline nodes */}
            {pipeline.map((label, i) => (
              <g
                key={label}
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateY(0)" : "translateY(10px)",
                  transition: reduced
                    ? "none"
                    : `opacity 600ms ease-out ${350 + i * 120}ms, transform 600ms ease-out ${350 + i * 120}ms`,
                }}
              >
                <rect
                  x={nodeX(i)}
                  y={pipeY}
                  width={nodeW}
                  height={nodeH}
                  rx={28}
                  fill="hsl(var(--surface-elevated))"
                  stroke="hsl(var(--border))"
                />
                <text
                  x={nodeCx(i)}
                  y={pipeY + nodeH / 2 + 6}
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="16"
                  fontWeight={600}
                  fill="hsl(var(--foreground))"
                  style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}
                >
                  {label}
                </text>
              </g>
            ))}

            {/* Loop-back from Revenue to Attention */}
            {(() => {
              const startX = nodeCx(pipeline.length - 1);
              const startY = pipeY + nodeH;
              const endX = nodeCx(0);
              const endY = pipeY + nodeH;
              const d = `M ${startX} ${startY} C ${startX} ${startY + 120}, ${endX} ${startY + 120}, ${endX} ${endY}`;
              return (
                <g
                  style={{
                    opacity: shown ? 1 : 0,
                    transition: reduced
                      ? "none"
                      : "opacity 700ms ease-out 1100ms",
                  }}
                >
                  <path
                    d={d}
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeOpacity="0.5"
                    strokeWidth={1}
                    strokeDasharray="4 6"
                  />
                  <text
                    x={(startX + endX) / 2}
                    y={startY + 138}
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="12"
                    fill="hsl(var(--muted-foreground))"
                    style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}
                  >
                    compounds over time
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Mobile stacked view */}
        <div className="md:hidden">
          <ul className="space-y-3">
            {inputs.map((label, i) => (
              <li
                key={label}
                className="rounded-xl border border-border bg-[hsl(var(--surface-elevated))] px-4 py-3 text-sm text-foreground"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateY(0)" : "translateY(8px)",
                  transition: reduced
                    ? "none"
                    : `all 500ms ease-out ${i * 60}ms`,
                }}
              >
                {label}
              </li>
            ))}
          </ul>
          <div
            className="mx-auto my-6 h-8 w-px"
            style={{ background: "linear-gradient(to bottom, #3B82F6, #A855F7)" }}
            aria-hidden
          />
          <ol className="space-y-3">
            {pipeline.map((label, i) => (
              <li
                key={label}
                className="rounded-full border border-border bg-[hsl(var(--surface-elevated))] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
                style={{
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateY(0)" : "translateY(8px)",
                  transition: reduced
                    ? "none"
                    : `all 500ms ease-out ${300 + i * 90}ms`,
                }}
              >
                {label}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            compounds over time
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Strategy, design, AI and automation — combined into one growth engine.
      </p>
    </Section>
  );
}

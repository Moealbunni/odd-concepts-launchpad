import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type HTMLAttributes } from "react";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  delay?: number;
  as?: "div" | "span" | "li";
}

/**
 * Fades + rises children into view on scroll (~600ms ease-out).
 * Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);

    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shown = visible || reduced;

  const Component = Tag as unknown as React.ElementType;
  return (
    <Component
      ref={ref as never}
      className={cn(
        "will-change-transform motion-safe:transition-all motion-safe:duration-[600ms] motion-safe:ease-out",
        !shown && "motion-safe:opacity-0 motion-safe:translate-y-4",
        shown && "opacity-100 translate-y-0",
        className,
      )}
      style={{ transitionDelay: shown && !reduced ? `${delay}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}

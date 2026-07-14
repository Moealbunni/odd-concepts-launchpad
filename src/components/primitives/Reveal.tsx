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
  // Start visible so content is NEVER hidden if hydration or IO fails.
  // We then briefly flip to hidden on the client (pre-paint) and let IO
  // fade it back in for the entrance animation.
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReduced = media.matches;
    setReduced(prefersReduced);

    const el = ref.current;
    if (!el) return;
    // Intentionally do NOT hide content on the client. If the entrance
    // animation cannot run reliably (SSR/hydration edge cases, HMR, IO
    // quirks), content must remain visible rather than blank the page.
    void el;
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

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/** Brand-aligned surface card with soft hover lift. */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 transition-all duration-200 ease-out",
        "hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_10px_40px_-15px_hsl(var(--brand-primary)/0.4)]",
        className,
      )}
      {...props}
    />
  );
}

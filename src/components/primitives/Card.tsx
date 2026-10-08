import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/** Brand-aligned surface card with soft hover lift. */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "studio-card group rounded-2xl border border-border bg-card p-6 transition-all duration-200 ease-out",
        "hover:-translate-y-1 hover:border-highlight-border",
        className,
      )}
      {...props}
    />
  );
}

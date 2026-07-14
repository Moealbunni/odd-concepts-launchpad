import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-baseline gap-1 font-bold tracking-tight text-foreground",
        className,
      )}
      aria-label="Odd Concepts Digital — Home"
    >
      <span>Odd Concepts</span>
      <span className="gradient-text">Digital</span>
    </Link>
  );
}

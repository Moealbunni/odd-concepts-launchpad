import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";

export function Wordmark({
  className,
  markClassName,
  showMark = true,
}: {
  className?: string;
  markClassName?: string;
  showMark?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-2.5 tracking-tight text-foreground transition-opacity hover:opacity-90",
        className,
      )}
      aria-label="Odd Concepts Digital — Home"
    >
      {showMark && <BrandMark className={markClassName} />}
      <span className="lowercase leading-none">
        <span className="font-bold">odd concepts</span>{" "}
        <span className="font-normal text-foreground/80">digital</span>
      </span>
    </Link>
  );
}

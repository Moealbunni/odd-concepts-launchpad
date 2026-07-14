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
        "inline-flex items-center rounded-md text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label="Odd Concepts Digital — Home"
    >
      {showMark && <BrandMark className={markClassName} />}
    </Link>
  );
}

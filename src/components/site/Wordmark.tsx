import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";

/**
 * The horizontal logo lockup image already contains the wordmark, so this
 * component renders only the BrandMark inside the home link. `className`
 * still accepts sizing for consumers, forwarded to the mark.
 */
export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
  /** @deprecated Kept for API stability; the mark is always shown. */
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
      <BrandMark className={markClassName} />
    </Link>
  );
}

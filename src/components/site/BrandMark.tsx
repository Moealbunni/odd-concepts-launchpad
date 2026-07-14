import { cn } from "@/lib/utils";

/**
 * Odd Concepts Digital official horizontal lockup. Height is controlled
 * via className; width auto with object-contain so the aspect ratio is
 * preserved and the mark never stretches.
 */
export function BrandMark({
  className,
  title = "Odd Concepts Digital",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <img
      src="/brand/logo-horizontal.png"
      alt={title}
      width={448}
      height={140}
      className={cn("block h-10 w-auto shrink-0 object-contain", className)}
    />
  );
}
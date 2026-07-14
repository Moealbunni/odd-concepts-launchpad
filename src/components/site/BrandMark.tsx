import { cn } from "@/lib/utils";

/**
 * Odd Concepts Digital official horizontal lockup — real logo asset
 * (gauge mark + wordmark baked into the image). Height controlled by
 * className; width auto to preserve the 448×140 aspect ratio.
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
      draggable={false}
      decoding="async"
      className={cn(
        "block h-[30px] w-auto shrink-0 object-contain select-none",
        className,
      )}
    />
  );
}
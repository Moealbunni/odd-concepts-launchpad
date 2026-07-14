import { cn } from "@/lib/utils";

/**
 * Odd Concepts Digital brand mark — gauge arc + set-square.
 * Inline SVG so it inherits currentColor / scales cleanly.
 * Renders as a block so height controls size; width auto (aspect 1:1).
 */
export function BrandMark({
  className,
  title = "Odd Concepts Digital",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("block h-[30px] w-auto shrink-0", className)}
      style={{ objectFit: "contain" }}
    >
      <defs>
        <linearGradient
          id="ocdMark"
          x1="4"
          y1="28"
          x2="28"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path
        d="M10 25 A11 11 0 1 1 24 25"
        stroke="url(#ocdMark)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M7 24 L7 13 L18 24 Z" fill="#FAFAFA" />
    </svg>
  );
}
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const brandButtonVariants = cva(
  "inline-flex min-w-0 max-w-full items-center justify-center gap-2 rounded-xl font-medium whitespace-normal text-center leading-snug transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "brand-button-primary text-primary-foreground hover:-translate-y-0.5 gradient-bg",
        secondary:
          "border border-highlight-border bg-highlight-soft/30 text-highlight hover:border-highlight hover:bg-highlight-soft",
        ghost: "text-foreground/80 hover:text-highlight hover:bg-highlight-soft/50",
      },
      size: {
        sm: "min-h-9 px-4 py-2 text-sm",
        md: "min-h-11 px-6 py-2.5 text-sm",
        lg: "min-h-12 px-7 py-3 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface BrandButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brandButtonVariants> {
  asChild?: boolean;
}

export const BrandButton = forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref as never}
        className={cn(brandButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
BrandButton.displayName = "BrandButton";

export { brandButtonVariants };

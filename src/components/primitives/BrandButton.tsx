import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const brandButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "text-white shadow-[0_10px_30px_-10px_hsl(var(--brand-primary)/0.6)] hover:shadow-[0_16px_40px_-10px_hsl(var(--brand-accent)/0.55)] hover:-translate-y-0.5 gradient-bg",
        secondary:
          "border border-border bg-transparent text-foreground hover:border-foreground/40 hover:bg-white/5",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
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

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  bare?: boolean;
}

export function Section({
  id,
  className,
  containerClassName,
  children,
  bare,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32", className)}
      {...props}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}

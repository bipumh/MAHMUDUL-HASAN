import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

export function Section({
  id,
  className,
  children,
  containerClassName,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28 lg:py-32",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

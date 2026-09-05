import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/reveal";
import { Eyebrow } from "@/components/shared/section-heading";

export function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pb-12 pt-32 sm:pb-16 sm:pt-40",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(169,112,59,0.10),transparent_70%)]"
      />
      <div
        className={cn(
          "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12",
          align === "center" && "text-center",
        )}
      >
        {eyebrow ? (
          <Reveal direction="up">
            <Eyebrow className={cn(align === "center" && "justify-center")}>
              {eyebrow}
            </Eyebrow>
          </Reveal>
        ) : null}
        <Reveal delay={0.06} direction="up">
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-espresso sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.12} direction="up">
            <p
              className={cn(
                "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}

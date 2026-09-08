import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/reveal";

export function Eyebrow({
  children,
  index,
  className,
  tone = "default",
}: {
  children: ReactNode;
  index?: string;
  className?: string;
  tone?: "default" | "cyan";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.26em]",
        tone === "cyan" ? "text-cyan" : "text-muted",
        className,
      )}
    >
      {index ? (
        <span className="font-semibold text-primary-bright">{index}</span>
      ) : null}
      <span
        aria-hidden
        className={cn("h-px w-7", tone === "cyan" ? "bg-cyan/50" : "bg-line-strong")}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  align = "left",
  tone = "default",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: string;
  index?: string;
  align?: "left" | "center";
  tone?: "default" | "cyan";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal direction="up">
          <Eyebrow
            tone={tone}
            index={index}
            className={cn(align === "center" && "justify-center")}
          >
            {eyebrow}
          </Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={0.06} direction="up">
        <h2 className="mt-7 font-display text-[clamp(1.8rem,4.2vw,3.2rem)] font-semibold leading-[1.04] tracking-[-0.015em] text-foreground">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12} direction="up">
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-[17px]">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

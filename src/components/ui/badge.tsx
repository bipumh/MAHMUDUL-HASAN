import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "primary" | "cyan" | "neutral" | "line" | "outline";

const toneStyles: Record<BadgeTone, string> = {
  primary: "bg-primary-soft text-primary-bright border-primary/20",
  cyan: "bg-cyan-soft text-cyan border-cyan/20",
  neutral: "bg-surface-3 text-muted border-line-strong",
  line: "bg-transparent text-dim border-line-strong",
  outline: "bg-transparent text-muted border-line-strong",
};

export function Badge({
  tone = "primary",
  className,
  children,
}: {
  tone?: BadgeTone | string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        toneStyles[tone as BadgeTone],
        className,
      )}
    >
      {children}
    </span>
  );
}

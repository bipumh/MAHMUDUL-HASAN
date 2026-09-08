import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "primary" | "cyan" | "neutral" | "muted";
  className?: string;
}) {
  const dot =
    tone === "primary"
      ? "bg-primary"
      : tone === "cyan"
        ? "bg-cyan"
        : tone === "muted"
          ? "bg-dim"
          : "bg-slate-500";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line-strong/60 bg-surface-2/60 px-3.5 py-1.5 text-[13px] text-muted",
        className,
      )}
    >
      <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {children}
    </span>
  );
}

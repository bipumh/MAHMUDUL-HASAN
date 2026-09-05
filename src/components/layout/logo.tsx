import Link from "next/link";
import { Coffee } from "lucide-react";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label="Brew & Crumb — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso text-cream-light transition-colors group-hover:bg-caramel">
        <Coffee aria-hidden className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-espresso">
          Brew &amp; Crumb
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
          Café · Bakery
        </span>
      </span>
    </Link>
  );
}

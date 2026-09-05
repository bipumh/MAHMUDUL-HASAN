"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useState } from "react";

export function AnnouncementBar({ hidden }: { hidden: boolean }) {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        hidden || dismissed ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
      )}
      aria-hidden={hidden || dismissed}
    >
      <div className="bg-espresso text-cream-light">
        <div className="relative mx-auto flex h-11 max-w-7xl items-center justify-center gap-3 px-5 text-xs sm:px-8 lg:px-12">
          <Sparkles aria-hidden className="h-3.5 w-3.5 text-caramel" />
          <p className="truncate">
            <span className="font-medium">Mango season is here</span>
            <span className="hidden sm:inline">
              {" "}
              — try our new Alphonso Mango Mousse Cake
            </span>
          </p>
          <Link
            href="/cakes"
            className="group inline-flex shrink-0 items-center gap-1 whitespace-nowrap font-medium text-caramel transition-colors hover:text-cream-light"
          >
            Order now
            <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement"
            className="absolute right-4 rounded-full p-1 text-cream/60 transition-colors hover:text-cream-light sm:right-6"
          >
            <X aria-hidden className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

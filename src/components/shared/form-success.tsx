"use client";

import { Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function FormSuccess({
  title,
  message,
  onReset,
  detail,
}: {
  title: string;
  message: string;
  onReset?: () => void;
  detail?: string;
}) {
  return (
    <Reveal direction="up">
      <div className="flex flex-col items-center rounded-2xl border border-line bg-cream-light px-6 py-14 text-center shadow-soft">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-moss/12 text-moss">
          <Check aria-hidden className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-espresso">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
          {message}
        </p>
        {detail ? (
          <p className="mt-4 rounded-full bg-parchment px-4 py-2 text-sm font-medium text-espresso">
            {detail}
          </p>
        ) : null}
        {onReset ? (
          <Button variant="outline" onClick={onReset} className="mt-8">
            <RotateCcw aria-hidden className="h-4 w-4" />
            Make another
          </Button>
        ) : null}
      </div>
    </Reveal>
  );
}

"use client";

import { useEffect } from "react";
import { RotateCcw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-32 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary-soft text-primary-bright">
        <AlertTriangle aria-hidden className="h-8 w-8" />
      </span>
      <h1 className="mt-6 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Something went wrong.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        A runtime error interrupted this page. Let&apos;s give it another attempt.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-bright"
      >
        <RotateCcw aria-hidden className="h-4 w-4" />
        Try again
      </button>
    </div>
  );
}

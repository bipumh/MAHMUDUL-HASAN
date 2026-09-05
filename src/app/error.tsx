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
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-caramel/12 text-caramel">
        <AlertTriangle aria-hidden className="h-8 w-8" />
      </span>
      <h1 className="mt-6 font-display text-3xl font-semibold text-espresso sm:text-4xl">
        Something went slightly off.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        We hit an unexpected problem while loading this page. Let&apos;s give it
        another try.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-9 inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3 text-sm font-medium text-cream-light transition-colors hover:bg-caramel"
      >
        <RotateCcw aria-hidden className="h-4 w-4" />
        Try again
      </button>
    </div>
  );
}

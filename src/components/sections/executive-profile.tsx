"use client";

import { Monogram } from "@/components/shared/monogram";
import { Reveal } from "@/components/shared/reveal";
import { useContent } from "@/lib/content/ContentProvider";

export function ExecutiveProfile() {
  const { profile } = useContent();
  return (
    <Reveal direction="up" className="h-full">
      <div className="relative flex h-full flex-col border-t border-line pt-6">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-dim">
            Executive Profile
          </span>
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary/70" />
        </div>

        <Monogram className="mb-8 max-w-[16rem]" />

        <dl className="flex-1 divide-y divide-line/70">
          {profile.executiveProfile.map((field) => (
            <div key={field.label} className="flex items-baseline justify-between gap-6 py-3.5 first:pt-0 last:pb-0">
              <dt className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                {field.label}
              </dt>
              <dd className="text-right text-[15px] font-medium leading-snug text-foreground">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}

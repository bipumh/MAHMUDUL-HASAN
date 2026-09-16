"use client";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";
import { useContent } from "@/lib/content/ContentProvider";
import type { Metric } from "@/data/achievements";

// Strategic lead outcomes get a slightly stronger numeral + copper label.
const LEAD_INDEXES = new Set([0, 2, 6]);

function Numeral({ m, lead }: { m: Metric; lead?: boolean }) {
  return (
    <div
      className={cn(
        "font-serif font-normal leading-none tracking-[-0.01em] text-gradient-steel",
        lead ? "text-[clamp(2.75rem,5vw,4.25rem)]" : "text-[clamp(2.25rem,4vw,3.4rem)]",
      )}
    >
      {m.text ? (
        <span>
          {m.text}
          {m.suffix ? <span className="text-[0.45em] align-baseline">{m.suffix}</span> : null}
        </span>
      ) : (
        <Counter value={m.value ?? 0} suffix={m.suffix ?? ""} />
      )}
    </div>
  );
}

export function Impact() {
  const { impactMetrics } = useContent();

  return (
    <Section id="impact">
      <SectionHeading
        index="03"
        eyebrow="Impact"
        title="MEASURABLE IMPACT"
        description="The outcomes that matter — reliability, responsiveness and measurable security improvement delivered across the enterprise."
      />

      <div className="mt-16 border-t border-line">
        {impactMetrics.map((m, i) => {
          const lead = LEAD_INDEXES.has(i);
          return (
            <Reveal key={m.label} delay={Math.min(i * 0.03, 0.3)} direction="up">
              <div
                className={cn(
                  "grid gap-3 border-b border-line/70 sm:grid-cols-12 sm:items-baseline sm:gap-10",
                  lead ? "py-10" : "py-7",
                )}
              >
                <div className="sm:col-span-5">
                  <Numeral m={m} lead={lead} />
                  <div
                    className={cn(
                      "mt-3 font-mono text-[11px] uppercase tracking-[0.18em]",
                      lead ? "text-primary-bright" : "text-dim",
                    )}
                  >
                    {m.label}
                  </div>
                </div>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted sm:col-span-7">
                  {m.detail}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal direction="up" className="mt-12">
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-px flex-1 bg-line" />
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            Figures as reported · not projected
          </p>
          <span aria-hidden className="h-px flex-1 bg-line" />
        </div>
      </Reveal>
    </Section>
  );
}

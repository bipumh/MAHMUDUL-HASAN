"use client";

import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { useContent } from "@/lib/content/ContentProvider";

export function LeadershipPrinciples() {
  const { principles } = useContent();
  return (
    <Section id="principles" className="bg-surface/20">
      <div className="mx-auto max-w-4xl">
        <Reveal direction="up">
          <p className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            Leadership principles
            <span aria-hidden className="h-px w-8 bg-line-strong" />
          </p>
        </Reveal>

        <Reveal delay={0.06} direction="up">
          <h2 className="mt-8 text-center font-serif text-[clamp(2rem,5.4vw,3.8rem)] font-normal leading-[1.08] tracking-[-0.01em] text-foreground">
            Building technology
            <br />
            <span className="italic text-gradient-blue">the business can trust</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12} direction="up">
          <p className="mt-6 text-center text-[15px] leading-relaxed text-muted">
            Themes that guide every platform, policy and team — presented as operating principles,
            not personal quotations.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-px border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, i) => (
          <Reveal key={principle.label} delay={(i % 3) * 0.06} direction="up">
            <div className="border-b border-line/60 py-6 pr-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-semibold text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {principle.label}
                </h3>
              </div>
              <p className="mt-1.5 pl-8 text-sm leading-relaxed text-muted">{principle.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

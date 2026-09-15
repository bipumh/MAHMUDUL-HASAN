"use client";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { useContent } from "@/lib/content/ContentProvider";

export function CapabilityJourney() {
  const { capabilityJourney } = useContent();
  return (
    <Section id="journey" className="bg-surface/20">
      <SectionHeading
        eyebrow="Capability journey"
        title="ENTERPRISE TECHNOLOGY CAPABILITY JOURNEY"
        description="The evolving breadth of the profile — from hands-on networking through enterprise IT, cybersecurity, governance and AI-assisted operations to strategic leadership."
      />

      <div className="mt-16 border-t border-line">
        {capabilityJourney.map((step, i) => (
          <Reveal key={step.label} delay={Math.min(i * 0.03, 0.3)} direction="up">
            <div className="flex items-baseline gap-6 border-b border-line/70 py-5">
              <span className="w-8 shrink-0 font-mono text-sm font-semibold text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {step.label}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                  {step.detail}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-xs text-faint">
        Conceptual visualization of capability breadth — not a strict chronological progression.
      </p>
    </Section>
  );
}

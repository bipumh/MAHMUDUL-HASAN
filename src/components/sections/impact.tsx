"use client";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";
import { useContent } from "@/lib/content/ContentProvider";
import type { Metric } from "@/data/achievements";

function Numeral({ m }: { m: Metric }) {
  return (
    <div className="font-serif text-[clamp(2.5rem,4.6vw,4rem)] font-normal leading-[0.95] tracking-[-0.01em] text-gradient-steel">
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

function Cell({
  m,
  span = "lg:col-span-3",
  detail = true,
}: {
  m: Metric;
  span?: string;
  detail?: boolean;
}) {
  return (
    <Reveal direction="up" className={cn("col-span-2 sm:col-span-1", span)}>
      <div className="border-t border-line pt-5">
        <Numeral m={m} />
        <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
          {m.label}
        </div>
        {detail && m.detail ? (
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{m.detail}</p>
        ) : null}
      </div>
    </Reveal>
  );
}

export function Impact() {
  const { impactMetrics, executiveMetrics } = useContent();
  const years = executiveMetrics[0];
  const uptime = impactMetrics[0];
  const users = impactMetrics[6];
  const branches = impactMetrics[5];
  const incidentReduction = impactMetrics[2]; // 40–60%
  const incidentResponse = impactMetrics[3]; // 2h → 20min
  const resolution = impactMetrics[1];
  const vuln = impactMetrics[4];
  const awareness = impactMetrics[7];

  return (
    <Section id="impact">
      <SectionHeading
        index="03"
        eyebrow="Impact"
        title="MEASURABLE IMPACT"
        description="The outcomes that matter — reliability, responsiveness and measurable security improvement delivered across the enterprise."
      />

      <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-12">
        {/* primary large moments */}
        <Cell m={years} span="sm:col-span-2 lg:col-span-4" detail={false} />
        <Cell m={uptime} span="lg:col-span-3" />
        <Cell m={users} span="lg:col-span-3" />
        <Cell m={branches} span="lg:col-span-2" />

        {/* featured wide metrics */}
        <Cell m={incidentReduction} span="sm:col-span-2 lg:col-span-6" detail={false} />
        <Cell m={incidentResponse} span="lg:col-span-6" detail={false} />

        {/* secondary metrics */}
        <Cell m={resolution} span="lg:col-span-4" detail={false} />
        <Cell m={vuln} span="lg:col-span-4" detail={false} />
        <Cell m={awareness} span="lg:col-span-4" detail={false} />
      </div>

      <Reveal direction="up" className="mt-16">
        <div className="flex items-center gap-4 border-t border-line pt-6">
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

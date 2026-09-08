import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { education, recognition } from "@/data/education";

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeading
        index="06"
        eyebrow="Education"
        title="ACADEMIC FOUNDATION"
        description="Engineering and management foundations — from telecommunications engineering to computer science and an MBA."
      />

      <div className="mt-16 border-t border-line">
        {education.map((record, i) => (
          <Reveal key={record.id} direction="up" delay={i * 0.05}>
            <div className="grid gap-6 border-b border-line/70 py-8 first:border-t-0 sm:grid-cols-12 sm:gap-10">
              <div className="sm:col-span-3">
                <span className="font-display text-sm font-medium uppercase tracking-[0.12em] text-muted">
                  {record.institutionType}
                </span>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
                  {record.year}
                </div>
              </div>

              <div className="sm:col-span-5">
                <h3 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-normal leading-none tracking-tight text-foreground">
                  {record.degree}
                </h3>
                <p className="mt-2 text-[15px] font-medium text-primary-bright">{record.program}</p>
              </div>

              <div className="sm:col-span-4 sm:text-right">
                <p className="text-[15px] text-muted">{record.institution}</p>
                <p className="mt-2 font-mono text-[13px] tracking-[0.06em] text-dim">{record.result}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* recognition */}
      <Reveal direction="up" className="mt-12">
        <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
              {recognition.title}
            </h3>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted">{recognition.detail}</p>
        </div>
      </Reveal>
    </Section>
  );
}

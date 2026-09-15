"use client";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { useContent } from "@/lib/content/ContentProvider";

export function TrainingSection() {
  const { trainingCourses } = useContent();
  return (
    <Section id="training" className="bg-surface/20">
      <SectionHeading
        eyebrow="Courses & training"
        title="CONTINUOUS LEARNING"
        description="A body of professional development across security, networking, cloud and service management — courses, not certifications."
      />

      <div className="mt-16 grid gap-x-10 gap-y-px border-t border-line sm:grid-cols-2">
        {trainingCourses.map((course, i) => (
          <Reveal key={course.id} delay={(i % 2) * 0.05} direction="up">
            <div className="flex items-baseline justify-between gap-6 border-b border-line/70 py-4">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[15px] font-medium leading-snug text-foreground">
                    {course.title}
                  </p>
                  <p className="mt-1 text-[13px] text-dim">{course.provider}</p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-[12px] tracking-[0.14em] text-dim">
                {course.year}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

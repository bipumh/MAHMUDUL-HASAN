import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { CareerMilestones } from "@/components/sections/career-milestones";
import { CareerTimeline } from "@/components/sections/career-timeline";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title="PROFESSIONAL EXPERIENCE"
        description="A progressive career across enterprise IT — from IT operations to group-level leadership of infrastructure and cybersecurity."
      />

      <div className="mt-14">
        <CareerMilestones />
      </div>

      <div className="mt-16">
        <CareerTimeline />
      </div>
    </Section>
  );
}

import { Hero } from "@/components/sections/hero";
import { ExecutiveMetrics } from "@/components/sections/executive-metrics";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { AiIntelligence } from "@/components/sections/ai-intelligence";
import { SecurityOperations } from "@/components/sections/security-operations";
import { Impact } from "@/components/sections/impact";
import { AchievementStories } from "@/components/sections/achievement-stories";
import { Experience } from "@/components/sections/experience";
import { GovernmentProjects } from "@/components/sections/government-projects";
import { CapabilityJourney } from "@/components/sections/capability-journey";
import { CertificationWall } from "@/components/sections/certification-wall";
import { TrainingSection } from "@/components/sections/training-section";
import { EducationSection } from "@/components/sections/education-section";
import { LeadershipPrinciples } from "@/components/sections/leadership-principles";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="content" className="relative">
        <ExecutiveMetrics />
        <About />
        <Expertise />
        <AiIntelligence />
        <SecurityOperations />
        <Impact />
        <AchievementStories />
        <Experience />
        <GovernmentProjects />
        <CapabilityJourney />
        <CertificationWall />
        <TrainingSection />
        <EducationSection />
        <LeadershipPrinciples />
        <Contact />
      </div>
    </>
  );
}

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { governmentProjects, governmentEquipment } from "@/data/government";

export function GovernmentProjects() {
  return (
    <Section id="government" className="bg-surface/20">
      <SectionHeading
        eyebrow="National programs"
        title="NATIONWIDE ICT DEPLOYMENTS"
        description="Nation-scale ICT delivery across public-sector programs — equipment, network and surveillance infrastructure deployed at countrywide reach."
      />

      {/* project nodes — each in its own circle */}
      <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {governmentProjects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 5) * 0.06} direction="up">
            <div className="flex h-full flex-col items-center gap-4 text-center">
              <div className="flex aspect-square w-full items-center justify-center rounded-full border border-line-strong bg-surface-2/50 px-6 transition-colors duration-300 hover:border-primary/50 hover:bg-surface-2/80">
                <span className="flex flex-col items-center">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 font-display text-[13px] font-bold uppercase leading-tight tracking-[0.02em] text-foreground sm:text-[15px]">
                    {project.name}
                  </span>
                </span>
              </div>
              <p className="max-w-[15rem] text-[12px] leading-relaxed text-muted">
                {project.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* equipment */}
      <Reveal direction="up" className="mt-14">
        <div className="border-t border-line pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
            Equipment deployed
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {governmentEquipment.map((eq) => (
              <span
                key={eq}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-2/50 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.08em] text-muted"
              >
                <span aria-hidden className="h-1 w-1 rounded-full bg-primary/50" />
                {eq}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <p className="mt-6 text-xs text-faint">
        Scope and delivery reflected at a high level; specific dates, budgets and outcomes are not
        detailed here.
      </p>
    </Section>
  );
}

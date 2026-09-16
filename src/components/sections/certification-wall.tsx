"use client";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { useContent } from "@/lib/content/ContentProvider";

export function CertificationWall() {
  const { certifications } = useContent();
  const featured = certifications.filter((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <Section id="certifications">
      <SectionHeading
        index="05"
        eyebrow="Certifications"
        title="PROFESSIONAL CERTIFICATIONS"
        description="Industry-recognized credentials spanning ethical hacking, network security and networking engineering."
      />

      {/* featured credentials */}
      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {featured.map((cert, i) => (
          <Reveal key={cert.id} direction="up" delay={i * 0.06}>
            <div className="border-t border-line pt-7">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] font-normal leading-none text-foreground">
                  {cert.code}
                </span>
                <span className="font-mono text-[12px] tracking-[0.16em] text-dim">{cert.year}</span>
              </div>
              <p className="mt-3 text-[15px] font-medium text-primary-bright">{cert.fullName}</p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{cert.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* other credentials — ledger */}
      <div className="mt-16 border-t border-line">
        {others.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.05} direction="up">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line/70 py-5">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {cert.code}
                </span>
                <span className="text-sm text-muted">{cert.fullName}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden max-w-xs text-sm leading-relaxed text-muted md:block">
                  {cert.description}
                </span>
                <span className="font-mono text-[12px] tracking-[0.16em] text-dim">{cert.year}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

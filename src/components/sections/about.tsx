import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ExecutiveProfile } from "@/components/sections/executive-profile";
import { profile } from "@/data/profile";
import { Section } from "@/components/shared/section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title={
          <>
            <span className="text-foreground">{profile.aboutHeading.top}</span>
            <br />
            <span className="text-gradient-blue">{profile.aboutHeading.bottom}</span>
          </>
        }
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal direction="up">
            <p className="max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-[1.75rem]">
              {profile.aboutLead}
            </p>
          </Reveal>

          <div className="mt-9 space-y-6">
            {profile.aboutParagraphs.map((para, i) => (
              <Reveal key={i} delay={0.04 * i} direction="up">
                <p className="max-w-2xl text-[16px] leading-[1.7] text-muted">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} direction="up">
            <div className="mt-12 border-t border-line pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
                Core Focus
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {profile.focusAreas.map((a) => (
                  <div
                    key={a}
                    className="flex items-center gap-2.5 rounded-lg border border-line-strong bg-surface-2/50 px-4 py-3"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 shrink-0 rounded-full bg-primary/70"
                    />
                    <span className="font-display text-[13px] font-bold uppercase tracking-[0.04em] text-foreground">
                      {a}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <ExecutiveProfile />
        </div>
      </div>
    </Section>
  );
}

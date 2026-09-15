"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";
import { useContent } from "@/lib/content/ContentProvider";
import { COMPETENCY_ICONS } from "@/lib/content/icons";

export function Expertise() {
  const { competencyGroups } = useContent();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Section id="expertise">
      <SectionHeading
        index="02"
        eyebrow="Expertise"
        title="ENTERPRISE CAPABILITIES"
        description="A full-stack technical and leadership capability set — from strategy and governance down through security, network and infrastructure to the daily discipline of IT operations."
      />

      <div className="mt-16 border-t border-line">
        {competencyGroups.map((group, i) => {
          const Index = COMPETENCY_ICONS[group.icon] ?? COMPETENCY_ICONS.governance;
          const isHovered = hovered === i;
          const isDimmed = hovered !== null && !isHovered;

          return (
            <Reveal key={group.id} delay={Math.min(i * 0.04, 0.3)} direction="up">
              <motion.div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                animate={{ opacity: isDimmed ? 0.42 : 1 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="group relative border-b border-line py-8 transition-colors duration-300 sm:py-10"
              >
                {/* hover accent bar */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-0 h-full w-px bg-primary/60 transition-opacity duration-300",
                    isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                  )}
                />

                <div className="grid items-start gap-5 lg:grid-cols-12 lg:gap-8">
                  {/* index + icon */}
                  <div className="flex items-center gap-4 lg:col-span-2 lg:flex-col lg:items-start lg:gap-5">
                    <span
                      className={cn(
                        "font-mono text-sm font-semibold transition-colors duration-300",
                        isHovered ? "text-primary-bright" : "text-faint",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300",
                        isHovered
                          ? "border-primary/60 text-primary-bright"
                          : "border-line-strong text-muted",
                      )}
                    >
                      <Index aria-hidden className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                  </div>

                  {/* title + description */}
                  <div className="lg:col-span-5 lg:pr-6">
                    <h3
                      className={cn(
                        "font-display text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-[1.7rem]",
                        isHovered ? "text-foreground" : "text-foreground/90",
                      )}
                    >
                      {group.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-dim">
                      {group.description}
                    </p>
                  </div>

                  {/* skills */}
                  <div className="lg:col-span-5">
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={cn(
                            "font-mono text-[12px] uppercase tracking-[0.08em] transition-colors duration-300",
                            isHovered ? "text-muted" : "text-dim",
                          )}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

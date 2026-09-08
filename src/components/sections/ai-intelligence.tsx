"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { aiFeatures, aiPipeline } from "@/data/ai";

export function AiIntelligence() {
  return (
    <Section id="ai" className="bg-surface/20">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="AI-assisted operations"
            tone="cyan"
            title="AI-ASSISTED IT & SECURITY OPERATIONS"
            description="A differentiating layer of the practice — applying AI assistance across security monitoring, automation and centralized service management."
          />

          <div className="mt-12 border-t border-line">
            {aiFeatures.map((feature, i) => (
              <Reveal key={feature.id} delay={i * 0.05} direction="up">
                <article className="border-b border-line/70 py-7">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm font-semibold text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                    {feature.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 pl-9">
                    {feature.points.map((p) => (
                      <span key={p} className="font-mono text-[11px] uppercase tracking-[0.1em] text-dim">
                        {p}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* pipeline flow */}
        <div className="flex items-center">
          <div className="w-full">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-dim">
              Intelligent Operations Pipeline
            </p>
            <ol className="relative mt-8 border-t border-line">
              {aiPipeline.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="relative flex items-center justify-between gap-4 border-b border-line/70 py-3.5"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-[11px] font-semibold text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-foreground">
                      {step}
                    </span>
                  </span>
                  {i < aiPipeline.length - 1 && (
                    <ChevronDown aria-hidden className="h-3.5 w-3.5 text-faint" />
                  )}
                </motion.li>
              ))}
            </ol>
            <p className="mt-5 text-xs leading-relaxed text-faint">
              Conceptual flow illustrating how monitoring, AI assistance and ITSM connect into a
              single response path. Not live telemetry.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

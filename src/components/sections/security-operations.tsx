"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { useContent } from "@/lib/content/ContentProvider";

export function SecurityOperations() {
  const { securityChains } = useContent();
  return (
    <Section id="security" className="bg-surface/20">
      <SectionHeading
        eyebrow="Security operations"
        tone="cyan"
        title="SECURITY OPERATIONS"
        description="A conceptual view of enterprise security architecture — the detection-and-response plane and the identity-and-access plane working together."
      />

      <div className="mt-16 space-y-12">
        {securityChains.map((chain, chainIdx) => (
          <div key={chain.id} className="border-t border-line pt-6">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
                {chain.title}
              </p>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-4">
              {chain.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 + chainIdx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex items-center gap-3 border border-line-strong py-2 pl-3 pr-4">
                    <span className="font-mono text-[10px] font-semibold text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[12px] uppercase tracking-[0.11em] text-foreground">
                      {item}
                    </span>
                  </span>
                  {i < chain.items.length - 1 && (
                    <ArrowRight aria-hidden className="h-3.5 w-3.5 text-faint" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-faint">
        Conceptual architecture — illustrates understanding of enterprise security layers, not live
        monitoring data.
      </p>
    </Section>
  );
}

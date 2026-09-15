"use client";

import { motion } from "framer-motion";
import { useContent } from "@/lib/content/ContentProvider";

export function CareerMilestones() {
  const { careerMilestones } = useContent();
  return (
    <div className="relative">
      {/* connector */}
      <div aria-hidden className="absolute top-[0.55rem] hidden h-px w-full bg-line sm:block" />

      <ol className="relative flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        {careerMilestones.map((m, i) => (
          <motion.li
            key={m.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            className="relative flex items-start gap-4 sm:flex-col sm:gap-4 sm:text-left"
          >
            <span className="relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border border-primary/50 bg-background sm:mt-0">
              <span aria-hidden className="absolute inset-1 rounded-full bg-primary/70" />
            </span>
            <div>
              <div className="font-serif text-4xl font-normal leading-none tracking-tight text-foreground">
                <span className="text-gradient-steel">{m.year}</span>
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                {m.company}
              </div>
              <div className="mt-1 text-sm text-muted">{m.role}</div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

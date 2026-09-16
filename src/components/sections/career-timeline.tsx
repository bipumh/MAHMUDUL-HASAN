"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useContent } from "@/lib/content/ContentProvider";

type RoleView = {
  id: string;
  period: string;
  roleTitle: string;
  company: string;
  location: string;
  tenure?: string;
  status: string;
  summary?: string;
  responsibilityGroups: { title: string; items: string[] }[];
};

const statusLabel: Record<string, string> = {
  current: "Current",
  previous: "Previous",
  earlier: "Earlier",
};

function ResponsibilityGroup({
  title,
  items,
  index,
}: {
  title: string;
  items: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      className="border-t border-line/70 py-4"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">{title}</h4>
        <span aria-hidden className="h-1 w-1 rounded-full bg-primary/50" />
      </div>
      <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="font-mono text-[12px] uppercase tracking-[0.07em] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function RoleBlock({ role }: { role: RoleView }) {
  const isCurrent = role.status === "current";
  return (
    <div className="relative lg:grid lg:grid-cols-12 lg:gap-10">
      {/* metadata */}
      <div className="lg:col-span-3">
        <div className={cn("flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]", isCurrent ? "text-primary-bright" : "text-dim")}>
          <span
            aria-hidden
            className={cn("h-1.5 w-1.5 rounded-full", isCurrent ? "bg-primary" : "bg-line-strong")}
          />
          {statusLabel[role.status]}
        </div>
        <p className="mt-4 font-mono text-[13px] tracking-[0.04em] text-muted">{role.period}</p>
        <p className="mt-1 text-sm text-dim">{role.location}</p>
        {role.tenure ? (
          <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-faint">{role.tenure}</p>
        ) : null}

        <div className="mt-6 hidden h-px w-12 bg-line-strong lg:block" />
      </div>

      {/* main */}
      <div className="mt-6 lg:col-span-9 lg:mt-0">
        {/* company — prominent */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "font-display text-[clamp(1.5rem,2.9vw,2.2rem)] font-bold leading-[1.06] tracking-tight",
            isCurrent ? "text-foreground" : "text-foreground/90",
          )}
        >
          {role.company}
        </motion.h3>

        {/* role — subordinate */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2.5 text-lg font-medium leading-snug text-foreground"
        >
          {role.roleTitle}
        </motion.p>

        {role.summary ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted"
          >
            {role.summary}
          </motion.p>
        ) : null}

        <div className="mt-7 grid gap-x-10 lg:grid-cols-2">
          {role.responsibilityGroups.map((group, i) => (
            <ResponsibilityGroup key={group.title} title={group.title} items={group.items} index={i} />
          ))}
        </div>
      </div>

      <span
        aria-hidden
        className={cn(
          "absolute -left-[0.60rem] top-1.5 hidden h-3 w-3 -translate-x-1/2 rounded-full lg:block",
          isCurrent ? "bg-primary ring-4 ring-primary/15" : "bg-background ring-4 ring-line-strong/60",
        )}
      />
    </div>
  );
}

export function CareerTimeline() {
  const { experience } = useContent();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.3"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const roles = [experience.current, ...experience.timeline];

  return (
    <div ref={ref} className="relative">
      {/* scroll-drawn rail */}
      <div aria-hidden className="absolute bottom-0 left-[0.60rem] top-1 hidden w-px bg-line-strong lg:block">
        {!reduced && (
          <motion.div
            style={{ scaleY }}
            className="h-full w-full origin-top bg-primary/60"
          />
        )}
      </div>

      <div className="space-y-20 lg:space-y-28 lg:pl-12">
        {roles.map((role) => (
          <RoleBlock key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/shared/brand-icons";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CommandCenter } from "@/components/shared/command-center";
import { useContent } from "@/lib/content/ContentProvider";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const metadata = [
  "13+ Years Experience",
  "IT Infrastructure",
  "Cybersecurity",
  "Networking",
  "IT Governance",
  "ITSM",
];

export function Hero() {
  const { profile, site } = useContent();
  const reduced = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden pt-24 pb-12">
      {/* atmospheric moving light — cinematically drifts beneath the typography */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.15 }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-[6%] top-[14%] h-[72%] w-[66%] rounded-full bg-[radial-gradient(58%_52%_at_50%_40%,rgba(162,156,148,0.07),rgba(162,156,148,0.015)_46%,transparent_72%)] blur-[120px] animate-hero-light" />
        <div className="absolute left-[2%] top-[56%] h-[18rem] w-[42rem] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(221,217,211,0.055),transparent_68%)] blur-[90px] animate-float-slow" />
      </motion.div>

      <Container className="relative">
        {/* top metadata row */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between border-b border-line pb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-dim"
        >
          <span>Index · 001 / 01 — Introduction</span>
          <span className="hidden sm:inline">{profile.location}</span>
          <span className="hidden md:inline">Enterprise IT & Security</span>
        </motion.div>

        <div className="mt-10 grid flex-1 content-center gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6"
          >
            <motion.p variants={item} className="flex items-center gap-4 font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-primary-bright">
              <span aria-hidden className="h-px w-10 bg-primary/60" />
              <span>{profile.title}</span>
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-8 font-serif font-normal uppercase leading-[1.04] tracking-[0.005em] text-[clamp(1.9rem,4.4vw,3.4rem)]"
            >
              <span className="block text-gradient-steel">MD. Mahmudul</span>
              <span className="block text-gradient-steel">Hasan</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.heroTagline}
            </motion.p>

            {/* technical metadata — hairline separated */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-line pt-5"
            >
              {metadata.map((label, i) => (
                <span key={label} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {i === 0 ? null : <span aria-hidden className="text-faint">/</span>}
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-11 flex flex-wrap items-center gap-3.5">
              <Button href="#experience" size="lg">
                Explore Experience
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href={site.emailHref} size="lg" variant="outline">
                <Mail aria-hidden className="h-4 w-4" />
                Email
              </Button>
              <a
                href={site.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center gap-2.5 px-1 text-sm font-medium text-muted transition-colors hover:text-primary-bright"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
                <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Architectural network figure — integrated, not a dashboard card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="relative flex items-center justify-center lg:col-span-5 lg:-mt-6"
          >

            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div aria-hidden className="absolute inset-y-0 right-full w-px bg-line/70" />
            </div>
            <motion.div
              animate={reduced ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[440px]"
            >
              <CommandCenter />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

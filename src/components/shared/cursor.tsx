"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";

/**
 * Decorative desktop-only cursor accent.
 *
 * The native cursor is intentionally left visible (usability-first). This adds
 * a subtle ring that expands over interactive elements and shrinks to a small
 * dot elsewhere. Both track the pointer directly (no spring/trailing) so the
 * accent feels instant rather than laggy. Disabled on touch devices and for
 * reduced-motion users.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const noTouch = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || !noTouch || reduced) return;

    let prevActive = false;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      const next = !!t?.closest?.("a, button, [data-cursor], input, textarea, select, [role='button']");
      if (next !== prevActive) {
        prevActive = next;
        setActive(next);
      }
    };
    document.addEventListener("mousemove", move, { passive: true });
    const raf = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", move);
    };
  }, [x, y, reduced]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[80]"
      >
        <motion.div
          animate={{ scale: active ? 2.2 : 1, opacity: active ? 0.55 : 0.35 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="-ml-4 -mt-4 h-8 w-8 rounded-full border border-primary/60"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[80]"
      >
        <motion.span
          animate={{ scale: active ? 0.7 : 1 }}
          className="-ml-1 -mt-1 block h-2 w-2 rounded-full bg-primary-bright"
        />
      </motion.div>
    </>
  );
}

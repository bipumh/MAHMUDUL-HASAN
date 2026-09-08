"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Decorative desktop-only cursor accent.
 *
 * The native cursor is intentionally left visible (usability-first). This adds
 * a subtle trailing ring that expands over interactive elements and shrinks to
 * a small dot elsewhere. Disabled on touch devices and for reduced-motion users.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 900, damping: 55, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 900, damping: 55, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const noTouch = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || !noTouch || reduced) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      setActive(!!t?.closest?.("a, button, [data-cursor], input, textarea, select, [role='button']"));
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
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[80]"
      >
        <motion.div
          animate={{ scale: active ? 2.2 : 1, opacity: active ? 0.55 : 0.35 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="-ml-4 -mt-4 h-8 w-8 rounded-full border border-primary/60"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY }}
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

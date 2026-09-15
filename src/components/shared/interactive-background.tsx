"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient interactive field — a quiet, architectural particle network.
 *
 * Faint champagne dust drifts slowly across the viewport, bound by soft
 * connecting lines and punctuated by a sparse set of burnished-copper anchor
 * nodes. The whole field responds to the pointer with gentle depth parallax, a
 * subtle displacement of nearby particles, and a warm cursor-following glow.
 * Nothing here is a dashboard or a game — it reads as premium architectural
 * visualization: slow, deliberate, and low-contrast behind the content.
 */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number;
  radius: number;
  anchor: boolean;
};

const CHAMPAGNE = [226, 214, 196] as const;
const COPPER = [196, 122, 68] as const;
const COPPER_BRIGHT = [224, 165, 111] as const;

function rgba(c: readonly number[], a: number) {
  return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const glow = glowRef.current;
    if (!canvas || !glow) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Stable, non-null references so hoisted closures keep their types.
    const cv = canvas;
    const gw = glow;
    const gc = ctx;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let mobile = true;
    let linkDist = 120;
    let repelRadius = 0;

    const pointer = { x: -9999, y: -9999, active: false };

    function computeMode() {
      mobile =
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(max-width: 767px)").matches;
      linkDist = mobile ? 128 : 172;
      repelRadius = mobile ? 0 : 150;
    }

    function buildParticles() {
      const area = width * height;
      const density = mobile ? 22000 : 12500;
      const cap = mobile ? 52 : 150;
      const floor = mobile ? 28 : 90;
      const count = Math.min(cap, Math.max(floor, Math.floor(area / density)));

      particles = Array.from({ length: count }, () => {
        const anchor = Math.random() < 0.22;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          depth: 0.3 + Math.random() * 0.7,
          radius: anchor ? 1.5 + Math.random() * 1.5 : 0.6 + Math.random() * 1.0,
          anchor,
        };
      });
    }

    function resize() {
      computeMode();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      cv.width = Math.max(1, Math.floor(width * dpr));
      cv.height = Math.max(1, Math.floor(height * dpr));
      cv.style.width = `${width}px`;
      cv.style.height = `${height}px`;
      gc.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (pointer.x === -9999) {
        pointer.x = width / 2;
        pointer.y = height / 2;
      }
      buildParticles();
      if (reduced) draw();
    }

    function update() {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        const pad = 24;
        if (p.x < -pad) p.x = width + pad;
        else if (p.x > width + pad) p.x = -pad;
        if (p.y < -pad) p.y = height + pad;
        else if (p.y > height + pad) p.y = -pad;
      }
    }

    function draw() {
      gc.clearRect(0, 0, width, height);

      const active = pointer.active;
      const curX = active ? pointer.x : width / 2;
      const curY = active ? pointer.y : height / 2;

      const px = active ? ((curX - width / 2) / (width / 2)) * 18 : 0;
      const py = active ? ((curY - height / 2) / (height / 2)) * 14 : 0;

      const cursorRadius = repelRadius;
      const cursorStrength = 52;

      const positions = particles.map((p) => {
        let x = p.x;
        let y = p.y;
        if (active && cursorRadius > 0) {
          const dx = x - curX;
          const dy = y - curY;
          const d = Math.hypot(dx, dy);
          if (d < cursorRadius && d > 0.001) {
            const f = (1 - d / cursorRadius) * cursorStrength;
            x += (dx / d) * f;
            y += (dy / d) * f;
          }
        }
        return {
          x: x + px * p.depth,
          y: y + py * p.depth,
          depth: p.depth,
          anchor: p.anchor,
        };
      });

      for (let i = 0; i < particles.length; i++) {
        const a = positions[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = positions[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = linkDist * (a.depth + b.depth) * 0.5 + linkDist * 0.35;
          if (d2 > max * max) continue;
          const dist = Math.sqrt(d2);
          const t = 1 - dist / max;
          const depthFactor = 0.6 + (a.depth + b.depth) * 0.25;
          const alpha = t * 0.24 * depthFactor;

          const lmx = (a.x + b.x) / 2 - curX;
          const lmy = (a.y + b.y) / 2 - curY;
          const near = active && Math.hypot(lmx, lmy) < 240;

          let style = rgba(CHAMPAGNE, alpha);
          let lw = 1;
          if (near) {
            style = rgba(COPPER, alpha * 1.6 + 0.09);
          } else if (a.anchor || b.anchor) {
            style = rgba(COPPER_BRIGHT, alpha * 1.2 + 0.04);
            lw = 1.2;
          }
          gc.strokeStyle = style;
          gc.lineWidth = lw;
          gc.beginPath();
          gc.moveTo(a.x, a.y);
          gc.lineTo(b.x, b.y);
          gc.stroke();
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const pos = positions[i];

        const drawR = p.radius * (0.62 + p.depth * 0.62);

        if (p.anchor) {
          const glowR = drawR * 5.2;
          const grad = gc.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, glowR);
          grad.addColorStop(0, rgba(COPPER, 0.55 * p.depth));
          grad.addColorStop(1, rgba(COPPER, 0));
          gc.fillStyle = grad;
          gc.beginPath();
          gc.arc(pos.x, pos.y, glowR, 0, Math.PI * 2);
          gc.fill();
        }

        gc.fillStyle = p.anchor
          ? rgba(COPPER_BRIGHT, 0.92 * p.depth + 0.3)
          : rgba(CHAMPAGNE, 0.62 * p.depth + 0.22);
        gc.beginPath();
        gc.arc(pos.x, pos.y, drawR, 0, Math.PI * 2);
        gc.fill();
      }
    }

    let raf = 0;
    let last = performance.now();

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(2, (now - last) / 16.67);
      last = now;
      if (dt > 0) update();
      draw();
    }

    function onMove(e: MouseEvent) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      gw.style.opacity = "1";
      gw.style.transform = `translate3d(${e.clientX - 340}px, ${e.clientY - 340}px, 0)`;
    }

    function onLeave() {
      pointer.active = false;
      gw.style.opacity = "0";
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });

    if (!reduced) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      raf = requestAnimationFrame(frame);
    }

    const fade = requestAnimationFrame(() => {
      cv.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(fade);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full transition-opacity duration-[1500ms] ease-out"
        style={{ opacity: 0 }}
      />
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[680px] w-[680px] rounded-full transition-opacity duration-200 ease-out"
        style={{
          opacity: 0,
          background:
            "radial-gradient(circle, rgba(196,122,68,0.24) 0%, rgba(196,122,68,0.10) 36%, transparent 70%)",
        }}
      />
    </div>
  );
}

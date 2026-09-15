"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
};

const R = 118;
const D = R * 0.707;
const NODES: Node[] = [
  { id: "soc", label: "SOC", x: 0, y: -R },
  { id: "siem", label: "SIEM", x: R, y: 0 },
  { id: "iam", label: "IAM", x: 0, y: R },
  { id: "grc", label: "GRC", x: -R, y: 0 },
  { id: "network", label: "NETWORK", x: D, y: D },
  { id: "infra", label: "INFRA", x: -D, y: D },
  { id: "itsm", label: "ITSM", x: -D, y: -D },
  { id: "noc", label: "NOC", x: D, y: -D },
];

const LABEL_FONT = "var(--font-mono)";

export function CommandCenter() {
  const [hovered, setHovered] = useState<Node | null>(null);
  const reduced = useReducedMotion();

  const neighbors = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const n of NODES) {
      const next = NODES[(NODES.indexOf(n) + 1) % NODES.length];
      map.set(n.id, new Set([next.id]));
    }
    return map;
  }, []);

  const isDimmed = (n: Node) =>
    hovered !== null && hovered.id !== n.id && !neighbors.get(hovered.id)?.has(n.id);

  const isActive = (n: Node) => hovered !== null && (hovered.id === n.id || neighbors.get(hovered.id)?.has(n.id));

  const strokeFor = (n: Node) => {
    if (reduced && !hovered) return "rgba(236,226,210,0.16)";
    if (hovered) {
      if (isActive(n)) return "rgba(224,165,111,0.95)";
      if (isDimmed(n)) return "rgba(236,226,210,0.08)";
    }
    return "rgba(236,226,210,0.22)";
  };

  return (
    <div className="relative">
      {/* restrained halo behind the figure */}
      <div aria-hidden className="absolute inset-0 bg-glow" />
      <div aria-hidden className="absolute inset-0 bg-scanlines" />

      <svg
        viewBox="-190 -190 380 380"
        className="relative block h-auto w-full"
        role="img"
        aria-label="Conceptual topology of enterprise domains: SOC, SIEM, IAM, GRC, network, infrastructure, ITSM and NOC centred on a secure core"
      >
        {/* architectural rings */}
        <motion.circle
          cx={0}
          cy={0}
          r={178}
          fill="none"
          stroke="rgba(236,226,210,0.14)"
          strokeWidth={1}
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
        <motion.circle
          cx={0}
          cy={0}
          r={158}
          fill="none"
          stroke="rgba(196,122,68,0.4)"
          strokeWidth={1}
          strokeDasharray="1 8"
          animate={reduced ? {} : { rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
        <motion.circle
          cx={0}
          cy={0}
          r={140}
          fill="none"
          stroke="rgba(236,226,210,0.08)"
          strokeWidth={1}
          strokeDasharray="2 10"
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {/* perimeter chords */}
        {NODES.map((n, i) => {
          const next = NODES[(i + 1) % NODES.length];
          return (
            <line
              key={`p-${n.id}`}
              x1={n.x}
              y1={n.y}
              y2={next.y}
              stroke={strokeFor(n)}
              strokeWidth={1}
              strokeDasharray="3 8"
            />
          );
        })}

        {/* core → node radii */}
        {NODES.map((n) => (
          <line
            key={`c-${n.id}`}
            x1={0}
            y1={0}
            x2={n.x * 0.82}
            y2={n.y * 0.82}
            stroke={strokeFor(n)}
            strokeWidth={1}
            strokeDasharray="3 6"
          />
        ))}

        {/* muted flow particles */}
        {!reduced &&
          NODES.map((n, i) => (
            <circle
              key={`f-${n.id}`}
              r={2}
              fill={hovered && isActive(n) ? "rgba(224,165,111,1)" : "rgba(212,182,148,0.85)"}
            >
              <animateMotion dur={`${6 + i * 0.8}s`} repeatCount="indefinite" path={`M0,0 L${n.x * 0.82},${n.y * 0.82}`} />
            </circle>
          ))}

        {/* core */}
        <g>
          <circle cx={0} cy={0} r={13} fill="rgba(196,122,68,0.16)" />
          <circle cx={0} cy={0} r={8} fill="rgba(245,240,230,1)" />
          {!reduced && (
            <circle cx={0} cy={0} r={8} fill="none" stroke="rgba(196,122,68,1)" className="animate-pulse-ring" />
          )}
        </g>

        {/* nodes */}
        {NODES.map((n) => {
          const active = hovered?.id === n.id;
          return (
            <g
              key={n.id}
              onMouseEnter={() => setHovered(n)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={active ? 6 : 4.25}
                fill="rgba(23,21,18,0.95)"
                stroke={active ? "rgba(224,165,111,1)" : "rgba(232,222,204,1)"}
                strokeWidth={1.25}
                animate={active ? { scale: 1.15 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
              />
              <text
                x={n.x}
                y={n.y - 14}
                textAnchor="middle"
                fontSize="7"
                fontFamily={LABEL_FONT}
                letterSpacing="0.1em"
                fill={active ? "#f6f1e8" : isDimmed(n) ? "rgba(236,230,219,0.35)" : "#c9c0b0"}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* quiet caption */}
      <p className="relative mt-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
        Conceptual topology of domains
      </p>
    </div>
  );
}

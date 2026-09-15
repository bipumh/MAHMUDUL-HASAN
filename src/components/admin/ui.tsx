"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-line pt-6">
      <header className="mb-5">
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-dim">{subtitle}</p> : null}
      </header>
      {children}
    </section>
  );
}

export function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  rows,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  rows?: number;
  hint?: string;
}) {
  const inputClass =
    "w-full rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-primary/60";

  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
        {label}
      </span>
      {rows ? (
        <textarea
          value={value}
          rows={rows}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={cn(inputClass, "resize-y leading-relaxed")}
        />
      ) : (
        <input
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      )}
      {hint ? <span className="mt-1 block text-[11px] text-faint">{hint}</span> : null}
    </label>
  );
}

export function ButtonRow({ children }: { children: ReactNode }) {
  return <div className="mt-4 flex flex-wrap items-center gap-2.5">{children}</div>;
}

export function GhostButton({
  onClick,
  children,
  title,
}: {
  onClick: () => void;
  children: ReactNode;
  title?: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line-strong text-muted transition-colors hover:border-primary/60 hover:text-primary-bright"
    >
      {children}
    </button>
  );
}

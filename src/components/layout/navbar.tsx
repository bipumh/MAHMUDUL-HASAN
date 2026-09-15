"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { navLinks } from "@/data/site";
import { useContent } from "@/lib/content/ContentProvider";

export function Navbar() {
  const { site, cvUrl } = useContent();
  const externalCv = /^https?:\/\//i.test(cvUrl ?? "");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for the single-page anchor navigation.
  useEffect(() => {
    if (open) return;
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!targets.length) return;

    const callback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    };
    observer.current = new IntersectionObserver(callback, {
      rootMargin: "-45% 0px -50% 0px",
      threshold: 0,
    });
    targets.forEach((t) => observer.current?.observe(t));
    return () => observer.current?.disconnect();
  }, [open]);

  // Lock body scroll when mobile menu open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/70 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 sm:px-8 lg:px-12",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <a href="#home" className="flex items-center gap-3" aria-label="MD. Mahmudul Hasan — Home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/40 bg-primary-soft font-display text-base font-bold text-primary-bright">
            {site.shortName}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
              MD. Mahmudul Hasan
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-dim">
              IT & Cybersecurity Leader
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
                {isActive ? (
                  <span aria-hidden className="absolute inset-x-3.5 -bottom-0.5 h-px bg-primary/70" />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button href={cvUrl ?? "#"} size="sm" download={!externalCv} external={externalCv} className="hidden sm:inline-flex">
            <Download aria-hidden className="h-4 w-4" />
            Download CV
          </Button>
          <Button href="/admin" size="sm" variant="outline" className="hidden sm:inline-flex">
            <Lock aria-hidden className="h-4 w-4" />
            Admin Login
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface-2/70 text-foreground transition-colors hover:border-primary lg:hidden"
          >
            <Menu aria-hidden className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { site, cvUrl } = useContent();
  const externalCv = /^https?:\/\//i.test(cvUrl ?? "");
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-[visibility] lg:hidden",
        open ? "visible" : "invisible",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={cn(
          "absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        className={cn(
          "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col border-l border-line-strong/70 bg-surface shadow-lift transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-20 items-center justify-between border-b border-line/60 px-6">
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/40 bg-primary-soft font-display text-base font-bold text-primary-bright">
              {site.shortName}
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
              MD. Mahmudul Hasan
            </span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-foreground transition-colors hover:border-primary"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-xl px-3 py-3 font-display text-xl font-medium tracking-tight text-foreground transition-colors hover:bg-surface-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-line/60 px-5 py-6">
          <Button href={cvUrl ?? "#"} onClick={onClose} download={!externalCv} external={externalCv} className="w-full" size="lg">
            <Download aria-hidden className="h-4 w-4" />
            Download CV
          </Button>
          <Button href="/admin" onClick={onClose} variant="outline" className="mt-2.5 w-full" size="lg">
            <Lock aria-hidden className="h-4 w-4" />
            Admin Login
          </Button>
          <p className="mt-4 text-center text-xs text-dim">{site.location}</p>
        </div>
      </div>
    </div>
  );
}

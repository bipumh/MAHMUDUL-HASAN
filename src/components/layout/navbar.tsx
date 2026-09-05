"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, CalendarHeart } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { navLinks, navPrimaryCta, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu when the Escape key is pressed.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-line/70 bg-cream/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <AnnouncementBar hidden={scrolled} />
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-espresso"
                      : "text-muted hover:text-espresso",
                  )}
                >
                  {link.label}
                  {active ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-caramel"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button href={navPrimaryCta.href} size="sm" className="hidden sm:inline-flex">
              <CalendarHeart aria-hidden className="h-4 w-4" />
              Reserve a Table
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream-light/70 text-espresso transition-colors hover:border-espresso lg:hidden"
            >
              <Menu aria-hidden className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-[visibility] lg:hidden",
        open ? "visible" : "invisible",
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={cn(
          "absolute inset-0 bg-charcoal/30 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Panel */}
      <div
        className={cn(
          "absolute inset-y-0 left-0 flex w-[85%] max-w-sm flex-col bg-cream shadow-lift transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-20 items-center justify-between border-b border-line/70 px-5 sm:px-7">
          <Logo onNavigate={onClose} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-espresso transition-colors hover:border-espresso"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-6 sm:px-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-2xl px-3 py-3 font-display text-2xl font-medium text-espresso transition-colors hover:bg-parchment"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-4 border-t border-line/70 px-5 py-6 sm:px-7">
          <Button href={navPrimaryCta.href} onClick={onClose} className="w-full" size="lg">
            <CalendarHeart aria-hidden className="h-4 w-4" />
            Reserve a Table
          </Button>
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Mon–Sun · From 7:30 AM</span>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-espresso"
            >
              <Phone aria-hidden className="h-4 w-4 text-caramel" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

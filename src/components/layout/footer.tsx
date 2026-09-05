import Link from "next/link";
import { Coffee, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/shared/social-icons";
import { site, navLinks } from "@/data/site";

const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-espresso text-cream/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Brew & Crumb — home"
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-caramel text-cream-light">
                <Coffee aria-hidden className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight text-cream-light">
                Brew &amp; Crumb
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              A premium café and bakery in Gulshan, Dhaka — roasting, baking
              and celebrating good coffee and good company since{" "}
              {site.foundedYear}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                if (!Icon) return null;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-caramel hover:bg-caramel hover:text-cream-light"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservations"
                  className="text-sm text-cream/70 transition-colors hover:text-cream-light"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-cream-light"
                >
                  <Phone aria-hidden className="h-4 w-4 text-caramel" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-cream-light"
                >
                  <Mail aria-hidden className="h-4 w-4 text-caramel" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                <address className="not-italic">
                  {site.address}
                  <a
                    href={site.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-caramel hover:underline"
                  >
                    Directions <ArrowUpRight aria-hidden className="h-3 w-3" />
                  </a>
                </address>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
              Opening Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              {site.hoursSummary.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span>{row.days}</span>
                  <span className="text-cream-light">{row.hours}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/reservations"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-caramel/40 px-5 py-2.5 text-sm font-medium text-cream-light transition-colors hover:bg-caramel"
            >
              Reserve a table <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-cream-light">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-cream-light">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

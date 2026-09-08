import { Container } from "@/components/ui/container";
import { LinkedInIcon, YouTubeIcon } from "@/components/shared/brand-icons";
import { footerLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-surface/40">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary-soft font-display text-lg font-bold text-primary-bright">
                {site.shortName}
              </span>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {site.name}
                </p>
                <p className="text-sm text-dim">{site.title}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Enterprise IT and cybersecurity leadership across infrastructure, network, security,
              governance, and IT service management.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">Connect</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={site.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary-bright"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={site.youtubeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary-bright"
              >
                <YouTubeIcon className="h-4 w-4" />
                YouTube
              </a>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary-bright"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line/60 pt-7 sm:flex-row">
          <p className="text-xs text-dim">
            © 2026 MD. Mahmudul Hasan. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            IT · Cybersecurity · Governance · Leadership
          </p>
        </div>
      </Container>
    </footer>
  );
}

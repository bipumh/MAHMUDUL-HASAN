import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, YouTubeIcon } from "@/components/shared/brand-icons";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line/70 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal direction="up">
            <p className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              <span aria-hidden className="h-px w-8 bg-line-strong" />
              07 / Contact
              <span aria-hidden className="h-px w-8 bg-line-strong" />
            </p>
          </Reveal>

          <Reveal delay={0.06} direction="up">
            <h2 className="mt-8 font-serif text-[clamp(2.2rem,6.6vw,4.8rem)] font-normal leading-[1.04] tracking-[-0.01em] text-foreground">
              Build secure.
              <br />
              <span className="italic text-gradient-blue">Scale reliably.</span>
              <br />
              Lead digitally.
            </h2>
          </Reveal>

          <Reveal delay={0.12} direction="up">
            <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-relaxed text-muted">
              Let&apos;s connect around enterprise IT infrastructure, cybersecurity, governance, IT
              service management and technology leadership.
            </p>
          </Reveal>

          <Reveal delay={0.18} direction="up">
            <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
              <Button href={site.emailHref} size="lg">
                <Mail aria-hidden className="h-4 w-4" />
                Email Me
              </Button>
              <Button href={site.linkedinHref} external size="lg" variant="outline">
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </Reveal>

          {/* contact ledger */}
          <Reveal delay={0.22} direction="up">
            <dl className="mx-auto mt-16 grid max-w-4xl gap-px border-t border-line pt-6 text-left sm:grid-cols-2">
              <div className="flex items-center gap-4 border-b border-line/60 py-5 sm:border-r sm:border-line/60 sm:pr-8">
                <Mail aria-hidden className="h-4 w-4 shrink-0 text-primary-bright" />
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Email</dt>
                  <a href={site.emailHref} className="mt-0.5 block break-all text-sm font-medium text-foreground">
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-line/60 py-5">
                <Phone aria-hidden className="h-4 w-4 shrink-0 text-primary-bright" />
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Phone</dt>
                  <a href={site.phoneHref} className="mt-0.5 block text-sm font-medium text-foreground">
                    {site.phone}
                  </a>
                </div>
              </div>

              <a
                href={site.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-b border-line/60 py-5 sm:border-r sm:border-line/60 sm:pr-8"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0 text-primary-bright" />
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-dim">LinkedIn</span>
                  <span className="mt-0.5 block text-sm font-medium text-foreground group-hover:text-primary-bright">
                    {site.linkedinLabel}
                  </span>
                </span>
              </a>

              <a
                href={site.youtubeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-b border-line/60 py-5"
              >
                <YouTubeIcon className="h-4 w-4 shrink-0 text-primary-bright" />
                <span className="flex-1">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-dim">YouTube</span>
                  <span className="mt-0.5 block text-sm font-medium text-foreground">{site.youtubeLabel}</span>
                </span>
                <ArrowUpRight aria-hidden className="h-4 w-4 text-faint transition-colors group-hover:text-primary-bright" />
              </a>
            </dl>
          </Reveal>

          <Reveal delay={0.26} direction="up">
            <p className="mt-8 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
              <MapPin aria-hidden className="h-3.5 w-3.5" />
              {site.location}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

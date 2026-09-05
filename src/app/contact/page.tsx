import type { Metadata } from "next";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { OpeningHours } from "@/components/shared/opening-hours";
import { ContactForm } from "@/components/forms/contact-form";
import { WhatsAppIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/shared/social-icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Brew & Crumb café and bakery in Gulshan, Dhaka — address, phone, email, opening hours, WhatsApp and a message form. Pop in or reach out any time.",
};

const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello — we'd love to hear from you."
        description="Questions about the menu, a big order, a venue for your event, or just a craving? Reach out and our team will get back to you within one working day."
      />

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
            {/* Info side */}
            <div className="space-y-6">
              <Reveal direction="up">
                <div className="rounded-3xl border border-line/70 bg-cream-light p-7 shadow-soft">
                  <div className="flex items-center gap-2">
                    <MapPin aria-hidden className="h-5 w-5 text-caramel" />
                    <h3 className="font-display text-lg font-semibold text-espresso">
                      Address
                    </h3>
                  </div>
                  <address className="mt-3 text-sm not-italic leading-relaxed text-espresso">
                    {site.address}
                  </address>
                  <a
                    href={site.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-caramel underline-offset-4 hover:underline"
                  >
                    Get directions <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.06}>
                <div className="rounded-3xl border border-line/70 bg-cream-light p-7 shadow-soft">
                  <div className="flex items-center gap-2">
                    <Phone aria-hidden className="h-5 w-5 text-caramel" />
                    <h3 className="font-display text-lg font-semibold text-espresso">
                      Phone & Email
                    </h3>
                  </div>
                  <div className="mt-3 space-y-3 text-sm">
                    <a href={site.phoneHref} className="flex items-center gap-2 text-espresso transition-colors hover:text-caramel">
                      <WhatsAppIcon className="h-4 w-4 text-moss" />
                      {site.phone}
                    </a>
                    <a href={site.emailHref} className="flex items-center gap-2 text-espresso transition-colors hover:text-caramel">
                      <Mail aria-hidden className="h-4 w-4 text-caramel" />
                      {site.email}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.12}>
                <div className="rounded-3xl border border-line/70 bg-cream-light p-7 shadow-soft">
                  <OpeningHours />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.18}>
                <div className="rounded-3xl border border-line/70 bg-cream-light p-7 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-espresso">
                    Follow along
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    New bakes, limited specials and behind-the-counter moments.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
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
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-cream-light"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form side */}
            <Reveal direction="left">
              <div className="rounded-3xl border border-line/70 bg-cream-light p-6 shadow-soft sm:p-9">
                <SectionHeading
                  eyebrow="Message us"
                  title="Send a message"
                  description="We reply to every message, usually within one working day."
                />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Full-width map */}
          <Reveal direction="up" className="mt-8">
            <div className="relative h-[22rem] overflow-hidden rounded-3xl border border-line/70 shadow-soft sm:h-[26rem]">
              <iframe
                title={`Map showing Brew & Crumb location in ${site.neighborhood}, Dhaka`}
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cream/60 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

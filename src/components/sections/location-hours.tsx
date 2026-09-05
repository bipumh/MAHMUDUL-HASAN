import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { OpeningHours } from "@/components/shared/opening-hours";
import { LocationCard } from "@/components/shared/location-card";
import { site } from "@/data/site";

export function LocationHours() {
  return (
    <section id="location" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Visit us"
          title="Find us in Gulshan 1."
          description="Easy to reach, hard to leave. Come by for a morning coffee, an afternoon work session, or an evening sweet-tooth fix."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal direction="up">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-line/70 bg-cream-light p-7 shadow-soft sm:p-9">
              <div className="grid gap-8 sm:grid-cols-2">
                <LocationCard />
                <OpeningHours compact />
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-line/60 pt-6 sm:flex-row sm:items-center">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-light px-5 py-2.5 text-sm font-medium text-espresso transition-colors hover:border-espresso"
                >
                  <Phone aria-hidden className="h-4 w-4 text-caramel" />
                  {site.phone}
                </a>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-light px-5 py-2.5 text-sm font-medium text-espresso transition-colors hover:border-espresso"
                >
                  <Mail aria-hidden className="h-4 w-4 text-caramel" />
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl border border-line/70 shadow-soft">
              <iframe
                title={`Map showing Brew & Crumb location in ${site.neighborhood}, Dhaka`}
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
              <Link
                href={site.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-medium text-cream-light shadow-lift transition-colors hover:bg-caramel"
              >
                Open in Maps
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

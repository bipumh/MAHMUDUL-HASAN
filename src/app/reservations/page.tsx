import type { Metadata } from "next";
import { CalendarHeart, Clock, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ReservationForm } from "@/components/forms/reservation-form";
import { OpeningHours } from "@/components/shared/opening-hours";
import { LocationCard } from "@/components/shared/location-card";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Reserve a Table",
  description:
    "Reserve a table at Brew & Crumb in Gulshan, Dhaka. Book for coffee, breakfast, lunch or a celebration — we'll confirm within the hour during opening times.",
};

const bookingNotes = [
  "We confirm every reservation within the hour during opening times.",
  "Groups of 10+ — please call us so we can arrange the space and menu.",
  "Cakes and special occasions can be added with your reservation.",
  "No card required; we simply hold your table.",
];

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Reserve your table at Brew & Crumb."
        description="Choose a time, tell us how many, and we'll have your spot ready. It's the easiest way to skip the queue and settle straight into the good part."
      />

      <section className="pb-24 pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            {/* Form */}
            <Reveal direction="up">
              <div className="rounded-3xl border border-line/70 bg-cream-light p-6 shadow-soft sm:p-10">
                <ReservationForm />
              </div>
            </Reveal>

            {/* Info side */}
            <div className="space-y-6">
              <Reveal direction="up" delay={0.05}>
                <div className="rounded-3xl border border-line/70 bg-cream-light p-7 shadow-soft">
                  <OpeningHours />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.12}>
                <div className="rounded-3xl border border-line/70 bg-cream-light p-7 shadow-soft">
                  <LocationCard />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.18}>
                <div className="rounded-3xl border border-line/70 bg-cream-light p-7 shadow-soft">
                  <div className="flex items-center gap-2">
                    <CalendarHeart aria-hidden className="h-5 w-5 text-caramel" />
                    <h3 className="font-display text-lg font-semibold text-espresso">
                      Good to know
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {bookingNotes.map((note) => (
                      <li key={note} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-caramel" />
                        {note}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.phoneHref}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-medium text-cream-light transition-colors hover:bg-caramel"
                  >
                    <Phone aria-hidden className="h-4 w-4" />
                    {site.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Trust strip */}
          <Reveal direction="up" className="mt-10">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-line/70 bg-parchment/60 px-6 py-8 text-center">
              <Clock aria-hidden className="h-6 w-6 text-caramel" />
              <p className="font-display text-lg font-semibold text-espresso">
                Open all day, seven days a week
              </p>
              <p className="text-sm text-muted">
                Drop-ins always welcome — reservations just make it smoother.
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
                {site.hoursSummary.map((row) => (
                  <span key={row.days}>
                    <span className="font-medium text-espresso">{row.days}:</span>{" "}
                    {row.hours}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

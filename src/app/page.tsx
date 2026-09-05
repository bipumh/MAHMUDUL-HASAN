import { Hero } from "@/components/sections/hero";
import { TickerStrip } from "@/components/shared/ticker-strip";
import { Intro } from "@/components/sections/intro";
import { FeaturedMenu } from "@/components/sections/featured-menu";
import { SeasonalSpecials } from "@/components/sections/seasonal-specials";
import { BakeryHighlight } from "@/components/sections/bakery-highlight";
import { Atmosphere } from "@/components/sections/atmosphere";
import { Testimonials } from "@/components/sections/testimonials";
import { LocationHours } from "@/components/sections/location-hours";
import { CTASection } from "@/components/shared/cta-section";
import { img } from "@/lib/images";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TickerStrip />
      <Intro />
      <FeaturedMenu />
      <SeasonalSpecials />
      <BakeryHighlight />
      <Atmosphere />
      <Testimonials />
      <LocationHours />

      <CTASection
        className="mt-0"
        variant="dark"
        eyebrow="Reservations"
        title="Your table is waiting — reserve a seat by the window."
        description="Whether it's a quiet coffee for one or a celebration for ten, we'll have everything ready when you arrive."
        primary={{ label: "Reserve a Table", href: "/reservations" }}
        secondary={{ label: "Call us", href: site.phoneHref }}
        image={img("1521017432531-fbd92d768814", { w: 1400 })}
      />

      <CTASection
        className="mt-12 mb-24 sm:mb-28"
        variant="light"
        eyebrow="Celebration Cakes"
        title="Order a custom cake for your next celebration."
        description="Birthdays, weddings, baby showers — tell us the occasion and we'll design a cake around it. 48 hours' notice for standard cakes."
        primary={{ label: "Order a Cake", href: "/cakes" }}
        secondary={{ label: "Explore the menu", href: "/menu" }}
        image={img("1464349095431-e9a21285b5f3", { w: 1400 })}
      />
    </>
  );
}

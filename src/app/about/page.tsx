import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, HandHeart } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CTASection } from "@/components/shared/cta-section";
import { img } from "@/lib/images";
import { brandStory, philosophy, values, qualityIngredients, team } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Brew & Crumb — an independent specialty coffee roastery and artisan bakery in Gulshan, Dhaka. Our philosophy, quality ingredients and the people who make it happen.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

const interiorPhotos = [
  { src: img("1554118811-1e0d58224f24", { w: 900 }), alt: "Plant-filled Brew & Crumb café interior with warm pendant lighting" },
  { src: img("1543007630-9710e4a00a20", { w: 900 }), alt: "Softly lit corner of the café with exposed bulbs and timber" },
  { src: img("1481833761820-0509d3217039", { w: 900 }), alt: "Café window at dusk with the interior glowing warmly" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Brew & Crumb is a love letter to good coffee and good company."
        description="What began as a twelve-seat corner café in Gulshan has become a neighbourhood ritual — a place to pause, to gather, and to be treated like family."
      />

      {/* Brand story */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Since 2016"
                title="Independent, and proudly so."
              />
              <div className="mt-6 space-y-5">
                {brandStory.map((para, i) => (
                  <Reveal key={i} delay={i * 0.08} direction="up">
                    <p className="text-base leading-relaxed text-muted sm:text-lg">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal direction="left" className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-soft">
                    <Image
                      src={img("1447933601403-0c6688de566e", { w: 700 })}
                      alt="Roasted coffee beans in close-up"
                      width={700}
                      height={900}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-soft">
                    <Image
                      src={img("1541167760496-1628856ab772", { w: 700 })}
                      alt="A barista hand-pouring latte art"
                      width={700}
                      height={800}
                      className="aspect-[4/4.5] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            eyebrow="The philosophy"
            title={philosophy.title}
            description={philosophy.paragraphs[1]}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.08} direction="up" className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line/70 bg-cream-light p-6 shadow-soft">
                  <HandHeart aria-hidden className="h-6 w-6 text-caramel" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-espresso">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality ingredients */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Quality ingredients"
                title="We start with the best, then add care."
                description="Every cup and every bake begins with ingredients we'd happily hand you. Sourced responsibly, prepared honestly."
              />
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-line/70 bg-parchment px-5 py-4">
                <Leaf aria-hidden className="h-5 w-5 shrink-0 text-moss" />
                <p className="text-sm leading-relaxed text-espresso">
                  No shortcuts, no premixes, no additives — just good food made
                  the slow way.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {qualityIngredients.map((ing, i) => (
                <Reveal key={ing} delay={(i % 2) * 0.05} direction="up">
                  <div className="flex items-center gap-3 rounded-2xl border border-line/70 bg-cream-light px-5 py-4 shadow-soft">
                    <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-caramel text-cream-light text-sm font-semibold">
                      {i + 1}
                    </span>
                    <p className="text-sm font-medium text-espresso">{ing}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            eyebrow="The team"
            title="The people behind the pour."
            description="A small crew obsessed with the details — from the roast curve to the last rose petal on your cake."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 0.08} direction="up" className="h-full">
                <div className="flex h-full flex-col items-center rounded-2xl border border-line/70 bg-cream-light p-7 text-center shadow-soft">
                  <span
                    aria-hidden
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-espresso font-display text-2xl font-semibold text-cream-light"
                  >
                    {initials(member.name)}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-espresso">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-caramel">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior photography */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            align="center"
            eyebrow="The space"
            title="Made to slow you down."
            description="Our café is designed with soft light, honest materials and room to breathe."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {interiorPhotos.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 0.08} direction="up">
                <div className="overflow-hidden rounded-2xl shadow-soft">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={900}
                    height={700}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/gallery"
              className="rounded-full border border-espresso/20 bg-cream-light px-6 py-3 text-sm font-medium text-espresso transition-colors hover:border-espresso"
            >
              See more in the gallery
            </a>
          </div>
        </div>
      </section>

      <CTASection
        className="pb-24"
        variant="dark"
        eyebrow="Visit Brew & Crumb"
        title="Come taste what we're all about."
        description={`Find us in ${site.neighborhood}, ${site.city} — or reserve a table and we'll greet you warmly.`}
        primary={{ label: "Reserve a Table", href: "/reservations" }}
        secondary={{ label: "Contact us", href: "/contact" }}
        image={img("1521017432531-fbd92d768814", { w: 1400 })}
      />
    </>
  );
}

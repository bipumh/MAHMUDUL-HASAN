import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const shown = testimonials.slice(0, 3);
  return (
    <section className="bg-background-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          align="center"
          eyebrow="Kind words"
          title="Loved by our corner of Dhaka."
          description="Students, families, founders and wanderers — here's what they say after spending time with us."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {shown.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} direction="up" className="h-full">
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

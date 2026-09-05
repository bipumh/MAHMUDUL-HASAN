import { Quote } from "lucide-react";
import { StarRating } from "@/components/shared/star-rating";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-line/70 bg-cream-light p-6 shadow-soft sm:p-7">
      <div>
        <Quote aria-hidden className="h-8 w-8 text-caramel/40" />
        <blockquote className="mt-4 text-base leading-relaxed text-espresso/90">
          “{t.quote}”
        </blockquote>
      </div>

      <figcaption className="mt-6 flex items-center gap-4 border-t border-line/60 pt-5">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-espresso font-display text-lg font-semibold text-cream-light"
        >
          {t.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="font-medium text-espresso">{t.name}</p>
          <p className="text-sm text-muted">{t.role}</p>
        </div>
        <div className="ml-auto">
          <StarRating rating={t.rating} />
        </div>
      </figcaption>
    </figure>
  );
}

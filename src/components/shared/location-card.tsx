import { MapPin } from "lucide-react";
import { site } from "@/data/site";

export function LocationCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <MapPin aria-hidden className="h-5 w-5 text-caramel" />
        <h3 className="font-display text-lg font-semibold text-espresso">
          Find Us
        </h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {site.neighborhood}, {site.city}
      </p>
      <address className="mt-1 not-italic text-sm leading-relaxed text-espresso">
        {site.address}
      </address>
      <a
        href={site.mapDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-caramel underline-offset-4 transition-colors hover:text-caramel-dark hover:underline"
      >
        Get directions
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

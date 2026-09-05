import { Clock } from "lucide-react";
import { site } from "@/data/site";

export function OpeningHours({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const show = compact ? site.hoursSummary : site.hours;
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <Clock aria-hidden className="h-5 w-5 text-caramel" />
        <h3 className="font-display text-lg font-semibold text-espresso">
          Opening Hours
        </h3>
      </div>
      <dl className="mt-4 space-y-2.5">
        {show.map((row) => {
          const label = "days" in row ? row.days : row.day;
          return (
            <div
              key={label}
              className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-2.5 last:border-0"
            >
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="text-sm font-medium text-espresso">{row.hours}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

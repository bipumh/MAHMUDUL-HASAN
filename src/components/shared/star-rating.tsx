import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-1 text-caramel", className)}
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-caramel text-caramel" : "fill-transparent text-line",
          )}
        />
      ))}
    </span>
  );
}

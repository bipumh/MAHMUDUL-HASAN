import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Executive monogram / avatar treatment.
 *
 * Renders a refined "MH" mark by default. To use a professional photo, pass a
 * `src` (ideally `/public/portrait/md-mahmudul-hasan.png`) and the photo will
 * render inside the same quiet frame.
 */
export function Monogram({
  src,
  alt = "MD. Mahmudul Hasan",
  className,
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-[1.75rem] border border-line-strong bg-surface-2",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dense opacity-30" />

      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover"
        />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center">
          <span aria-hidden className="absolute h-4/5 w-4/5 rounded-full border border-line" />
          <span aria-hidden className="absolute h-3/5 w-3/5 rounded-full border border-line-strong/60" />
          <span className="relative font-serif text-[clamp(3.6rem,8vw,5.5rem)] font-normal tracking-tight text-gradient-steel">
            MH
          </span>
        </div>
      )}
    </div>
  );
}

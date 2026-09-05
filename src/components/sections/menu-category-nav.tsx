import { cn } from "@/lib/cn";
import { menuCategories } from "@/data/menu";

export function MenuCategoryNav({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Menu categories"
      className={cn(
        "sticky top-20 z-30 border-y border-line/70 bg-cream/92 backdrop-blur-md",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-10">
        <ul className="flex gap-1 overflow-x-auto py-3">
          {menuCategories.map((cat) => (
            <li key={cat.id} className="shrink-0">
              <a
                href={`#${cat.id}`}
                className="inline-flex whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-parchment hover:text-espresso"
              >
                {cat.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

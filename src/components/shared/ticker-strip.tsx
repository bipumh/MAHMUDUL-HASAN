import { Coffee, Croissant, CakeSlice, Leaf, Star, Flower2, UtensilsCrossed } from "lucide-react";

const items = [
  { icon: Coffee, label: "Home-roasted coffee" },
  { icon: Croissant, label: "Fresh croissants" },
  { icon: CakeSlice, label: "Custom celebration cakes" },
  { icon: Leaf, label: "Slow-fermented sourdough" },
  { icon: Flower2, label: "Seasonal specials" },
  { icon: Star, label: "4.9/5 from 2,300 reviews" },
  { icon: UtensilsCrossed, label: "Open all day" },
];

export function TickerStrip() {
  const track = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-espresso/15 bg-espresso py-4 text-cream-light">
      <div className="marquee-track gap-10 pr-10" aria-hidden="true">
        {track.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-3 text-sm font-medium tracking-wide"
          >
            <item.icon className="h-4 w-4 text-caramel" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

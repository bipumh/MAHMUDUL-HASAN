import { img } from "@/lib/images";

export type GalleryPhoto = {
  src: string;
  alt: string;
  category: string;
  /** Tailwind-driven aspect ratio to create a mixed masonry feel. */
  ratio: "portrait" | "square" | "landscape" | "tall";
  featured?: boolean;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: img("1521017432531-fbd92d768814", { w: 1200 }),
    alt: "Rustic industrial café interior with long wooden tables and warm pendant lighting",
    category: "Interior",
    ratio: "landscape",
    featured: true,
  },
  {
    src: img("1509042239860-f550ce710b93", { w: 900 }),
    alt: "Heart-shaped latte art in a white coffee cup beside trailing plants",
    category: "Coffee",
    ratio: "portrait",
  },
  {
    src: img("1578985545062-69928b1d9587", { w: 900 }),
    alt: "Salted caramel drip cake with chocolate curls and buttercream rosettes",
    category: "Cakes",
    ratio: "square",
  },
  {
    src: img("1555507036-ab1f4038808a", { w: 1000 }),
    alt: "Golden butter croissants dusted with flour on a slate board",
    category: "Pastries",
    ratio: "landscape",
  },
  {
    src: img("1493857671505-72967e2e2760", { w: 900 }),
    alt: "Minimal café corner with hanging pendant lights and a menu board",
    category: "Interior",
    ratio: "tall",
  },
  {
    src: img("1525610553991-2bede1a236e2", { w: 1200 }),
    alt: "Guests chatting over coffee at the counter of a busy specialty coffee house",
    category: "Atmosphere",
    ratio: "landscape",
  },
  {
    src: img("1541167760496-1628856ab772", { w: 900 }),
    alt: "A barista hand-pouring steamed milk into a flat white",
    category: "Coffee",
    ratio: "landscape",
  },
  {
    src: img("1464349095431-e9a21285b5f3", { w: 900 }),
    alt: "A colourful rainbow layer celebration cake on a glass stand",
    category: "Cakes",
    ratio: "portrait",
  },
  {
    src: img("1509440159596-0249088772ff", { w: 1000 }),
    alt: "Freshly baked artisan bread loaves with wheat stalks in the bakery",
    category: "Bakery",
    ratio: "landscape",
  },
  {
    src: img("1543007630-9710e4a00a20", { w: 1000 }),
    alt: "Warm, softly lit restaurant corner with exposed bulbs and timber",
    category: "Interior",
    ratio: "portrait",
  },
  {
    src: img("1497534446932-c925b458314e", { w: 900 }),
    alt: "Iced strawberry and lime cooler with mint and fresh fruit",
    category: "Seasonal",
    ratio: "portrait",
  },
  {
    src: img("1533134242443-d4fd215305ad", { w: 900 }),
    alt: "A slice of blueberry cheesecake with ruby berry compote",
    category: "Desserts",
    ratio: "square",
  },
  {
    src: img("1481833761820-0509d3217039", { w: 1000 }),
    alt: "Cozy café window at dusk with an illuminated interior and signage",
    category: "Atmosphere",
    ratio: "landscape",
  },
  {
    src: img("1447933601403-0c6688de566e", { w: 900 }),
    alt: "Roasted coffee beans in close-up, showcasing the roast profile",
    category: "Coffee",
    ratio: "landscape",
  },
  {
    src: img("1554118811-1e0d58224f24", { w: 1000 }),
    alt: "Plant-filled café interior with pendant lights and a long counter",
    category: "Interior",
    ratio: "landscape",
  },
  {
    src: img("1517433670267-08bbd4be890f", { w: 900 }),
    alt: "Bakery display counter filled with baguettes, loaves and pastries",
    category: "Bakery",
    ratio: "landscape",
  },
  {
    src: img("1559925393-8be0ec4767c8", { w: 1000 }),
    alt: "Café terrace seating with a blackboard greeting sign outdoors",
    category: "Atmosphere",
    ratio: "portrait",
  },
  {
    src: img("1517701550927-30cf4ba1dba5", { w: 900 }),
    alt: "Layered iced cold brew with milk swirling through ice",
    category: "Coffee",
    ratio: "portrait",
  },
  {
    src: img("1551024601-bec78aea704b", { w: 900 }),
    alt: "A stack of chocolate-dipped doughnuts with rainbow sprinkles",
    category: "Desserts",
    ratio: "square",
  },
  {
    src: img("1495474472287-4d71bcdd2085", { w: 900 }),
    alt: "Friends raising coffee cups together, topped with latte art",
    category: "Atmosphere",
    ratio: "landscape",
  },
];

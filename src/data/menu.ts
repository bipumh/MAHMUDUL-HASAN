import { img } from "@/lib/images";

export type DietTag = "vegan" | "vegetarian" | "gluten-free" | "iced" | "hot" | "signature" | "new" | "spicy";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: MenuCategoryId;
  image?: string;
  tags?: DietTag[];
  featured?: boolean;
};

export type MenuCategoryId =
  | "coffee"
  | "tea"
  | "breakfast"
  | "pastries"
  | "cakes"
  | "desserts"
  | "seasonal";

export const menuCategories: {
  id: MenuCategoryId;
  label: string;
  blurb: string;
}[] = [
  { id: "coffee", label: "Coffee", blurb: "Slow-brewed, expertly pulled. Our beans are roasted in small batches for a distinctly smooth Dhaka cup." },
  { id: "tea", label: "Tea", blurb: "From hand-rolled green leaves to spiced masala chai, brewed with patience and served with care." },
  { id: "breakfast", label: "Breakfast", blurb: "Baked fresh every morning, served all day — the way breakfast should feel." },
  { id: "pastries", label: "Pastries", blurb: "Flaky, buttery and golden. Everything is laminated and proofed in-house each dawn." },
  { id: "cakes", label: "Cakes", blurb: "Layer cakes, whole celebration cakes and slices — baked to order for every occasion." },
  { id: "desserts", label: "Desserts", blurb: "Small indulgences to end a meal — or to make an ordinary afternoon feel special." },
  { id: "seasonal", label: "Seasonal Specials", blurb: "Limited-run recipes shaped by the month and the Dhaka weather. Here for a short time." },
];

export const menuItems: MenuItem[] = [
  // ------------------------- COFFEE -------------------------
  {
    name: "House Espresso",
    description: "A double shot of our signature blend — notes of dark chocolate, toasted hazelnut and a gentle honeyed finish.",
    price: "৳ 320",
    category: "coffee",
    image: img("1447933601403-0c6688de566e", { w: 800 }),
    tags: ["hot", "signature"],
  },
  {
    name: "Flat White",
    description: "Velvety micro-foam poured over a rich double ristretto. Smooth, silky and quietly intense.",
    price: "৳ 380",
    category: "coffee",
    image: img("1541167760496-1628856ab772", { w: 800 }),
    tags: ["hot", "signature"],
  },
  {
    name: "Caffè Latte",
    description: "Our house espresso with generously steamed milk and a hand-poured heart, finished with a dusting of cocoa.",
    price: "৳ 400",
    category: "coffee",
    image: img("1509042239860-f550ce710b93", { w: 800 }),
    tags: ["hot"],
  },
  {
    name: "Cold Brew Tonic",
    description: "18-hour cold brew over ice, topped with a measure of artisanal tonic and a twist of orange peel.",
    price: "৳ 420",
    category: "coffee",
    image: img("1517701550927-30cf4ba1dba5", { w: 800 }),
    tags: ["iced", "new"],
  },
  {
    name: "Cortado",
    description: "Equal parts espresso and warm milk in a small glass — the perfect mid-morning reset.",
    price: "৳ 350",
    category: "coffee",
    tags: ["hot"],
  },
  {
    name: "Pour Over — Single Origin",
    description: "A rotating single-origin bean brewed by hand. Ask your barista what's on the stand this week.",
    price: "৳ 450",
    category: "coffee",
    image: img("1498804103079-a6351b050096", { w: 800 }),
    tags: ["hot", "signature"],
  },
  {
    name: "Iced Caramel Latte",
    description: "Espresso, cold milk and house-made salted caramel, poured over ice and finished with cream.",
    price: "৳ 460",
    category: "coffee",
    image: img("1461023058943-07fcbe16d735", { w: 800 }),
    tags: ["iced"],
  },
  // ------------------------- TEA -------------------------
  {
    name: "Masala Chai",
    description: "Black tea simmered with cardamom, cinnamon, ginger and our house chai spice blend. Sweet and warming.",
    price: "৳ 280",
    category: "tea",
    tags: ["hot", "signature"],
  },
  {
    name: "Jasmine Green",
    description: "Delicate hand-rolled green tea scented with jasmine flowers. Bright, floral and gently sweet.",
    price: "৳ 300",
    category: "tea",
    image: img("1497534446932-c925b458314e", { w: 800 }),
    tags: ["hot"],
  },
  {
    name: "Earl Grey Crème",
    description: "A fragrant bergamot black tea rounded with a hint of vanilla cream and a whisper of orange.",
    price: "৳ 300",
    category: "tea",
    tags: ["hot"],
  },
  {
    name: "Iced Lemongrass Mint",
    description: "Fresh lemongrass and mint macerated and poured over ice — crisp, cooling and totally refreshing.",
    price: "৳ 320",
    category: "tea",
    tags: ["iced", "vegetarian"],
  },
  {
    name: "Matcha Latte",
    description: "Ceremonial-grade matcha whisked with steamed milk. Earthy, smooth and gently sweet.",
    price: "৳ 420",
    category: "tea",
    image: img("1551024601-bec78aea704b", { w: 800 }),
    tags: ["hot", "vegetarian"],
  },
  {
    name: "Hibiscus Iced Tea",
    description: "Ruby-red hibiscus steeped chilled with a touch of raw sugar and a lime leaf. Bold and buoyant.",
    price: "৳ 340",
    category: "tea",
    tags: ["iced"],
  },
  // ------------------------- BREAKFAST -------------------------
  {
    name: "The Gulshan Breakfast",
    description: "Two farm eggs any style, sourdough toast, roasted tomato, avocado and a small side of breakfast greens.",
    price: "৳ 640",
    category: "breakfast",
    image: img("1504674900247-0877df9cc836", { w: 800 }),
    tags: ["vegetarian", "signature"],
  },
  {
    name: "Halloumi & Avocado Toast",
    description: "Grilled halloumi, smashed avocado, chilli flakes and pickled red onion on thick-cut toasted sourdough.",
    price: "৳ 620",
    category: "breakfast",
    image: img("1509440159596-0249088772ff", { w: 800 }),
    tags: ["vegetarian", "signature"],
  },
  {
    name: "Butter Croissant & Jam",
    description: "A warm flaky butter croissant with our house strawberry-and-ginger jam. Simple, done properly.",
    price: "৳ 260",
    category: "breakfast",
    image: img("1555507036-ab1f4038808a", { w: 800 }),
    tags: ["vegetarian"],
  },
  {
    name: "Roasted Tomato Shakshuka",
    description: "Eggs baked in a smoky tomato and pepper sauce with feta, served with grilled flatbread.",
    price: "৳ 580",
    category: "breakfast",
    tags: ["vegetarian", "spicy"],
  },
  {
    name: "Overnight Oats & Berries",
    description: "Creamy rolled oats soaked overnight, layered with coconut yoghurt, seasonal fruit and toasted seeds.",
    price: "৳ 460",
    category: "breakfast",
    tags: ["vegetarian"],
    image: img("1470337458703-46ad1756a187", { w: 800 }),
  },
  {
    name: "Breakfast Burrito",
    description: "Scrambled eggs, roasted peppers, black beans, cheese and chipotle crema wrapped in a warm tortilla.",
    price: "৳ 540",
    category: "breakfast",
    tags: ["spicy"],
  },
  // ------------------------- PASTRIES -------------------------
  {
    name: "Classic Butter Croissant",
    description: "Twenty-seven layers of laminated butter dough. Shatteringly crisp outside, tender and airy within.",
    price: "৳ 240",
    category: "pastries",
    image: img("1555507036-ab1f4038808a", { w: 800 }),
    tags: ["vegetarian", "signature"],
  },
  {
    name: "Almond Croissant",
    description: "Twice-baked and filled with frangipane, finished with flaked almonds and a snowfall of icing sugar.",
    price: "৳ 280",
    category: "pastries",
  },
  {
    name: "Pain au Chocolat",
    description: "Buttery laminated pastry wrapped around two batons of rich dark Belgian chocolate.",
    price: "৳ 280",
    category: "pastries",
    tags: ["vegetarian"],
  },
  {
    name: "Cinnamon Cardamom Bun",
    description: "A soft, swirled bun fragrant with cinnamon and green cardamom, glazed with warm vanilla icing.",
    price: "৳ 260",
    category: "pastries",
    image: img("1517433670267-08bbd4be890f", { w: 800 }),
    tags: ["vegetarian", "signature"],
  },
  {
    name: "Sourdough Country Loaf",
    description: "A crusty, open-crumbed 36-hour sourdough with a deeply caramelised crust. Baked twice daily.",
    price: "৳ 380",
    category: "pastries",
    tags: ["vegan"],
  },
  {
    name: "Seeded Multigrain Loaf",
    description: "A wholesome loaf studded with sunflower, pumpkin and flax seeds, toasted for a nutty depth.",
    price: "৳ 420",
    category: "pastries",
    image: img("1509440159596-0249088772ff", { w: 800 }),
    tags: ["vegan"],
  },
  // ------------------------- CAKES -------------------------
  {
    name: "Double Chocolate Fudge Slice",
    description: "Our signature moist chocolate sponge layered with dark chocolate ganache. Rich, dense, unapologetic.",
    price: "৳ 440",
    category: "cakes",
    image: img("1578985545062-69928b1d9587", { w: 800 }),
    tags: ["vegetarian", "signature"],
  },
  {
    name: "Roasted Vanilla Bean Slice",
    description: "Light vanilla sponge, silky mascarpone cream and a fresh macerated berry compote.",
    price: "৳ 420",
    category: "cakes",
    image: img("1533134242443-d4fd215305ad", { w: 800 }),
    tags: ["vegetarian"],
  },
  {
    name: "Celebration Drip Cake",
    description: "Layer cake with a glossy drip and buttercream rosettes — the centrepiece for birthdays and milestone moments.",
    price: "from ৳ 1,900",
    category: "cakes",
    image: img("1464349095431-e9a21285b5f3", { w: 800 }),
    tags: ["vegetarian", "signature"],
  },
  {
    name: "Basque Burnt Cheesecake",
    description: "A caramelised, custardy cheesecake with a deeply baked top. Irresistibly creamy in the middle.",
    price: "৳ 480",
    category: "cakes",
    image: img("1533134242443-d4fd215305ad", { w: 800 }),
    tags: ["vegetarian"],
  },
  {
    name: "Strawberry Mango Layer Cake",
    description: "Fresh strawberry and Alphonso mango folded into a light whipped cream frosting between soft sponge.",
    price: "from ৳ 2,200",
    category: "cakes",
    image: img("1542826438-bd32f43d626f", { w: 800 }),
    tags: ["vegetarian", "new"],
  },
  // ------------------------- DESSERTS -------------------------
  {
    name: "Basque Cheesecake Slice",
    description: "The monday-after slice of our burnt cheesecake, served plain with a little crème fraîche.",
    price: "৳ 420",
    category: "desserts",
    tags: ["vegetarian"],
  },
  {
    name: "Salted Caramel Brownie",
    description: "Fudgy dark chocolate brownie with a molten salted caramel centre, dusted with cocoa.",
    price: "৳ 320",
    category: "desserts",
    tags: ["vegetarian"],
  },
  {
    name: "Lemon & Yoghurt Tart",
    description: "A crisp buttery shell, tangy lemon curd and a spoon of whipped yoghurt and candied zest.",
    price: "৳ 360",
    category: "desserts",
    tags: ["vegetarian"],
  },
  {
    name: "Chocolate Doughnut Stack",
    description: "Three pillowy brioche doughnuts glazed in dark chocolate and finished with rainbow sprinkles.",
    price: "৳ 300",
    category: "desserts",
    image: img("1551024601-bec78aea704b", { w: 800 }),
    tags: ["vegetarian"],
  },
  {
    name: "Affogato",
    description: "A scoop of vanilla bean gelato drowned in a double shot of fresh espresso. Classic, quick, perfect.",
    price: "৳ 340",
    category: "desserts",
    tags: ["vegetarian"],
  },
  {
    name: "Baked Apple Crumble",
    description: "Warm spiced apples under a buttery oat crumble, served with a scoop of salted caramel ice cream.",
    price: "৳ 380",
    category: "desserts",
    tags: ["vegetarian"],
  },
  // ------------------------- SEASONAL -------------------------
  {
    name: "Mango & Passionfruit Parfait",
    description: "Tangy passionfruit curd layered with mango mousse, crushed biscuit and fresh mint — a taste of Dhaka summer.",
    price: "৳ 480",
    category: "seasonal",
    image: img("1497534446932-c925b458314e", { w: 800 }),
    tags: ["vegetarian", "new", "signature"],
  },
  {
    name: "Iced Strawberry-Lime Cooler",
    description: "Fresh strawberry, lime and mint muddled with sparkling water over crushed ice. Bright and vibrant.",
    price: "৳ 360",
    category: "seasonal",
    image: img("1497534446932-c925b458314e", { w: 800 }),
    tags: ["vegan", "iced", "new"],
  },
  {
    name: "Winter Spice Hot Chocolate",
    description: "Dark hot chocolate spiked with cinnamon, star anise and a touch of orange zest, topped with toasted marshmallow.",
    price: "৳ 400",
    category: "seasonal",
    tags: ["vegetarian", "hot"],
  },
  {
    name: "Eid Spice Date Cake",
    description: "A moist date and walnut cake scented with cardamom and rosewater — a celebration of the season.",
    price: "৳ 520",
    category: "seasonal",
    tags: ["vegetarian", "new"],
  },
  {
    name: "Golden Garam Masala Latte",
    description: "A turmeric and garam masala latte with honey and steamed oat milk. Cosy, warming, gently spiced.",
    price: "৳ 420",
    category: "seasonal",
    tags: ["vegan", "hot", "spicy"],
  },
];

export function getMenuByCategory(category: MenuCategoryId): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

export function getFeaturedMenuItems(limit = 6): MenuItem[] {
  const featured = menuItems.filter((item) => item.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return [...featured, ...menuItems.filter((i) => i.image)].slice(0, limit);
}

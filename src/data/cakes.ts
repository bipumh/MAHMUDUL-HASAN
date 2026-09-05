import { img } from "@/lib/images";

export type CakeGalleryItem = {
  name: string;
  category: string;
  description: string;
  image: string;
  priceFrom?: string;
};

export const cakeCategories: { label: string; description: string }[] = [
  { label: "Chocolate", description: "Fudge, dark, mousse and ganache — for the true chocoholic." },
  { label: "Classic", description: "Vanilla, red velvet, carrot and pound cakes, done with care." },
  { label: "Fresh Fruit", description: "Mango, strawberry, berries and citrus — bright and light." },
  { label: "Celebration", description: "Drip cakes, tiered cakes and showstoppers for birthdays and milestones." },
  { label: "Custom & Designer", description: "Fully bespoke cakes built around your theme, favourite flavour and budget." },
];

export const cakeGallery: CakeGalleryItem[] = [
  {
    name: "Salted Caramel Drip Cake",
    category: "Custom & Designer",
    description: "Layers of brown butter sponge with a glossy caramel drip and chocolate curls.",
    image: img("1578985545062-69928b1d9587", { w: 900 }),
    priceFrom: "৳ 2,400",
  },
  {
    name: "Rainbow Confetti Cake",
    category: "Celebration",
    description: "A pastel layer cake with a hidden rainbow, hand-rolled sprinkle rim and star toppers.",
    image: img("1464349095431-e9a21285b5f3", { w: 900 }),
    priceFrom: "৳ 2,800",
  },
  {
    name: "Strawberry Rosewater Cake",
    category: "Fresh Fruit",
    description: "Vanilla sponge, whipped cream and fresh strawberries with a delicate rosewater finish.",
    image: img("1542826438-bd32f43d626f", { w: 900 }),
    priceFrom: "৳ 2,500",
  },
  {
    name: "Signature Fudge Chocolate",
    category: "Chocolate",
    description: "Our most-ordered cake — moist chocolate sponge with a silky dark ganache.",
    image: img("1578985545062-69928b1d9587", { w: 900 }),
    priceFrom: "৳ 2,300",
  },
  {
    name: "Basque Burnt Cheesecake",
    category: "Classic",
    description: "Intensely caramelised top with a molten, custardy centre. Best enjoyed the same day.",
    image: img("1533134242443-d4fd215305ad", { w: 900 }),
    priceFrom: "৳ 1,900",
  },
  {
    name: "Alphonso Mango Mousse",
    category: "Fresh Fruit",
    description: "A cloud of mango mousse over sponge with a mirror glaze and fresh mango.",
    image: img("1551024601-bec78aea704b", { w: 900 }),
    priceFrom: "৳ 2,600",
  },
];

export const cakeFlavors: { name: string; hint: string }[] = [
  { name: "Chocolate Fudge", hint: "Rich and dark" },
  { name: "Red Velvet", hint: "Classic with cream cheese" },
  { name: "Vanilla Bean", hint: "Simple and elegant" },
  { name: "Fresh Mango", hint: "Alphonso, seasonal" },
  { name: "Strawberry", hint: "Fresh and summery" },
  { name: "Coffee Walnut", hint: "Espresso + walnut" },
  { name: "Lemon & Yoghurt", hint: "Zesty and light" },
  { name: "Carrot & Spice", hint: "Warm and moist" },
  { name: "Pistachio Rose", hint: "Fragrant and nutty" },
];

export const cakeSizes: { label: string; serves: string; priceFrom: string }[] = [
  { label: '6" Single Tier', serves: "6–8 people", priceFrom: "৳ 1,900" },
  { label: '8" Single Tier', serves: "10–14 people", priceFrom: "৳ 2,600" },
  { label: '10" Single Tier', serves: "16–22 people", priceFrom: "৳ 3,500" },
  { label: "Two-Tier (6+8)", serves: "28–35 people", priceFrom: "৳ 5,200" },
  { label: "Two-Tier (8+10)", serves: "40–50 people", priceFrom: "৳ 6,900" },
];

export const cakeLeadTime =
  "Standard cakes require 48 hours' notice. For custom designer cakes and celebration showstoppers, we recommend 5–7 days. To check immediate availability for this week, message us on WhatsApp.";

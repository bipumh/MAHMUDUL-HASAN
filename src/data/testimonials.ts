export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The best flat white in Gulshan, hands down. I've lived in Dhaka for years and Brew & Crumb is the café I recommend to everyone — the space itself is worth a visit.",
    name: "Nafisa Rahman",
    role: "Marketing Lead",
    rating: 5,
  },
  {
    quote:
      "We ordered the two-tier drip cake for our daughter's birthday and it was every bit the showstopper we hoped for. Guests are still talking about it weeks later.",
    name: "Amin & Sara Chowdhury",
    role: "Celebration Cake Customers",
    rating: 5,
  },
  {
    quote:
      "I work remotely from the corner table most mornings. Fast Wi-Fi, genuinely good espresso, and the cinnamon cardamom buns are dangerously addictive.",
    name: "Danish Islam",
    role: "Design Director",
    rating: 5,
  },
  {
    quote:
      "It feels like stepping out of Dhaka for an hour. Warm light, beautiful pastries, and the staff remember your order. This is hospitality done right.",
    name: "Priyanka Saha",
    role: "Writer",
    rating: 5,
  },
  {
    quote:
      "Their sourdough is the closest to the loaves I grew up with in Melbourne. I now get a fresh country loaf on my way home every week.",
    name: "James Carter",
    role: "Expat Resident",
    rating: 4,
  },
  {
    quote:
      "Booked a table for a quiet anniversary dinner and the team arranged a beautiful cake and a corner seat without us even asking. Truly premium service.",
    name: "Rashid & Nusrat Hossain",
    role: "Regulars",
    rating: 5,
  },
];

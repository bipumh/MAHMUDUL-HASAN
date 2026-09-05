export type DayHours = {
  day: string;
  hours: string;
  closed?: boolean;
};

export type HoursSummary = {
  days: string;
  hours: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

/**
 * Site-wide configuration.
 *
 * NOTE: All contact details below are fictional/demo values for this showcase.
 * Replace them with the real Brew & Crumb details before going to production.
 */
export const site = {
  name: "Brew & Crumb",
  legalName: "Brew & Crumb Café & Bakery",
  tagline: "Coffee, freshly baked, beautifully made.",
  description:
    "Brew & Crumb is a premium café and bakery in Gulshan, Dhaka — serving slow-brewed coffee, freshly baked bread and pastries, and custom celebration cakes in a warm, welcoming space.",
  foundedYear: 2016,
  url: "https://brewandcrumb.com",
  neighborhood: "Gulshan 1",
  city: "Dhaka",
  country: "Bangladesh",
  address: "House 24, Road 11, Gulshan 1, Dhaka 1212, Bangladesh",
  phone: "+880 1712-345-678",
  phoneHref: "tel:+8801712345678",
  whatsapp: "+880 1712-345-678",
  whatsappHref: "https://wa.me/8801712345678",
  email: "hello@brewandcrumb.com",
  emailHref: "mailto:hello@brewandcrumb.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/brewandcrumb" },
    { label: "Facebook", href: "https://facebook.com/brewandcrumb" },
    { label: "TikTok", href: "https://tiktok.com/@brewandcrumb" },
  ] as SocialLink[],
  hours: [
    { day: "Monday", hours: "7:30 AM – 10:00 PM" },
    { day: "Tuesday", hours: "7:30 AM – 10:00 PM" },
    { day: "Wednesday", hours: "7:30 AM – 10:00 PM" },
    { day: "Thursday", hours: "7:30 AM – 10:00 PM" },
    { day: "Friday", hours: "8:00 AM – 11:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 11:00 PM" },
    { day: "Sunday", hours: "8:00 AM – 11:00 PM" },
  ] as DayHours[],
  hoursSummary: [
    { days: "Monday – Thursday", hours: "7:30 AM – 10:00 PM" },
    { days: "Friday – Sunday", hours: "8:00 AM – 11:00 PM" },
  ] as HoursSummary[],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Gulshan+1,+Dhaka,+Bangladesh&output=embed",
  mapDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Brew+%26+Crumb+Gulshan+1+Dhaka",
} as const;

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Cakes", href: "/cakes" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navPrimaryCta = {
  label: "Reserve a Table",
  href: "/reservations",
};

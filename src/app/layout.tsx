import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/shared/json-ld";
import { site } from "@/data/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Brew & Crumb — Premium Café & Bakery in Gulshan, Dhaka",
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "café Dhaka",
    "bakery Dhaka",
    "best coffee Dhaka",
    "Gulshan café",
    "birthday cake Dhaka",
    "coffee shop Gulshan",
    "custom cakes Dhaka",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Brew & Crumb — Premium Café & Bakery in Gulshan, Dhaka",
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80&auto=format&fit=crop",
        width: 1200,
        height: 800,
        alt: "Latte art coffee cups at Brew & Crumb café",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brew & Crumb — Premium Café & Bakery in Gulshan, Dhaka",
    description: site.description,
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <JsonLd
            data={{
              "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            "@id": site.url,
            name: site.name,
            alternateName: site.legalName,
            description: site.description,
            url: site.url,
            image:
              "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80&auto=format&fit=crop",
            telephone: "+8801712345678",
            email: site.email,
            priceRange: "৳ ৳৳",
            servesCuisine: ["Coffee", "Bakery", "Desserts", "Café"],
            foundingDate: String(site.foundedYear),
            address: {
              "@type": "PostalAddress",
              streetAddress: "House 24, Road 11",
              addressLocality: "Gulshan 1, Dhaka",
              postalCode: "1212",
              addressCountry: "BD",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 23.7925,
              longitude: 90.4165,
            },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:30", closes: "22:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday", "Sunday"], opens: "08:00", closes: "23:00" },
            ],
            sameAs: site.socials.map((s) => s.href),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "2300",
            },
          }}
        />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}

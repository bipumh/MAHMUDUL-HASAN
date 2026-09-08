import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono, Fraunces } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AppBackground } from "@/components/shared/app-background";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { Cursor } from "@/components/shared/cursor";
import { JsonLd } from "@/components/shared/json-ld";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MD. Mahmudul Hasan — IT & Cybersecurity Leader",
    template: "%s · MD. Mahmudul Hasan",
  },
  description: site.description,
  keywords: [
    "IT Leadership",
    "Cybersecurity",
    "Enterprise Infrastructure",
    "Network Engineering",
    "ISO 27001",
    "ITIL 4",
    "SOC",
    "NOC",
    "IT Governance",
    "ITSM",
    "Group Head IT",
    "CISO",
    "Bangladesh",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "MD. Mahmudul Hasan — IT & Cybersecurity Leader",
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. Mahmudul Hasan — IT & Cybersecurity Leader",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${mono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <Cursor />
          <AppBackground />

          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              alternateName: site.legalName,
              description: site.description,
              url: site.url,
              jobTitle: site.title,
              email: `mailto:${site.email}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "BD",
              },
              sameAs: [site.linkedinHref],
              knowsAbout: [
                "IT Leadership",
                "Cybersecurity",
                "Enterprise Infrastructure",
                "Network Engineering",
                "ISO/IEC 27001",
                "ITIL 4",
                "SOC",
                "NOC",
                "IT Governance",
                "ITSM",
              ],
            }}
          />

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}

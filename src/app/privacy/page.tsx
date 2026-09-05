import { LegalPage, legalMetadata, type LegalPageData } from "@/components/shared/legal-page";

const data: LegalPageData = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  description:
    "How Brew & Crumb collects, uses and protects your information.",
  intro:
    "This policy explains how Brew & Crumb handles your personal information when you visit our site, reserve a table or place an order.",
  sections: [
    {
      heading: "Information we collect",
      body: "When you fill in a reservation, cake order or contact form, we collect the details you provide — such as your name, phone number, email address, event details and any message you send. We do not collect more than we need to respond to your request.",
    },
    {
      heading: "How we use your information",
      body: "We use your details only to confirm bookings, respond to enquiries, prepare orders and improve our service. We never sell or rent your information to anyone.",
    },
    {
      heading: "Cookies & analytics",
      body: "Our website may use essential cookies to make the site work, and anonymous analytics to understand how visitors use it. You can disable cookies in your browser at any time without losing access to the site.",
    },
    {
      heading: "Data security",
      body: "We take reasonable steps to keep your information safe and only retain it for as long as needed to fulfil your request. Sensitive details are never stored longer than necessary.",
    },
    {
      heading: "Your rights",
      body: "You may request a copy of the information we hold about you, ask us to correct it, or ask us to delete it, by emailing hello@brewandcrumb.com.",
    },
  ],
};

export const metadata = legalMetadata({ title: "Privacy Policy", description: data.description });

export default function PrivacyPage() {
  return <LegalPage {...data} />;
}

import { LegalPage, legalMetadata, type LegalPageData } from "@/components/shared/legal-page";

const data: LegalPageData = {
  eyebrow: "Legal",
  title: "Terms & Conditions",
  description:
    "The terms that govern reservations and cake orders at Brew & Crumb.",
  intro:
    "By reserving a table or placing an order with Brew & Crumb, you agree to the terms below.",
  sections: [
    {
      heading: "Reservations",
      body: "Reservations are held for up to 15 minutes past the booked time. For groups of ten or more, we may ask for a small deposit or contact details to secure a larger booking.",
    },
    {
      heading: "Cake orders",
      body: "Standard cakes require 48 hours' notice and custom designer cakes require 5–7 days. Final prices depend on design and are confirmed before payment. Cakes are perishable and should be collected on the day agreed.",
    },
    {
      heading: "Payment & cancellations",
      body: "For custom cakes we may ask for a deposit. Cancellations made more than 48 hours before collection are fully refundable; later cancellations may forfeit the deposit due to ingredients already prepared.",
    },
    {
      heading: "Allergens & dietary needs",
      body: "Our kitchen handles nuts, dairy, eggs and gluten. While we offer vegetarian, vegan and gluten-friendly options, we cannot guarantee complete absence of allergens. Please let us know about any allergy before ordering.",
    },
    {
      heading: "Our responsibility",
      body: "We aim to deliver confirmed orders on time. If an unavoidable issue affects your order, we'll always be in touch to make it right.",
    },
  ],
};

export const metadata = legalMetadata({ title: "Terms & Conditions", description: data.description });

export default function TermsPage() {
  return <LegalPage {...data} />;
}

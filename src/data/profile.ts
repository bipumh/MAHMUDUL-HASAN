export type ExecutiveProfileField = {
  label: string;
  value: string;
};

export const profile = {
  name: "MD. MAHMUDUL HASAN",
  firstName: "Mahmudul",
  brandName: "MD. MAHMUDUL HASAN",
  monogram: "MH",
  title: "IT & CYBERSECURITY LEADER",
  titleReadable: "IT & Cybersecurity Leader",
  eyebrow: "ENTERPRISE IT • CYBERSECURITY • GOVERNANCE",
  heroTagline:
    "Results-driven IT & Cybersecurity Leader with 13+ years of experience directing enterprise IT infrastructure, network engineering, information security, IT service management, and multi-site technology operations.",
  experienceYears: 13,
  experienceLabel: "13+ Years",
  location: "Dhaka, Bangladesh",
  overviewLead:
    "Engineering reliable enterprises. Securing digital operations.",
  aboutHeading: {
    top: "ENGINEERING RELIABLE ENTERPRISES.",
    bottom: "SECURING DIGITAL OPERATIONS.",
  },
  aboutLead:
    "An enterprise technology leader who understands the full stack — from physical infrastructure and networking upward through security, governance, service management, and strategic technology leadership.",
  aboutParagraphs: [
    "For more than a decade, MD. Mahmudul Hasan has led enterprise IT and cybersecurity across some of Bangladesh's largest technology-driven organizations. He brings together IT infrastructure, network engineering, information security, IT service management, and multi-site operations under one accountable leadership model.",
    "His work is grounded in recognized frameworks — ISO/IEC 27001 for information security management and ITIL 4 for IT service management — and delivered through the operational discipline of SOC/NOC environments: continuous monitoring, structured incident response, and measurable service reliability.",
    "Increasingly, his leadership is AI-assisted. He integrates AI-driven security monitoring and AI-enabled ITSM automation into everyday operations, building centralized platforms that unify monitoring, security, and service management across business sites.",
    "Across every engagement, the objective is consistent: build technology the business can rely on, keep it secure, keep it governed, and keep it moving.",
  ],
  focusAreas: [
    "Enterprise IT",
    "Infrastructure",
    "Network Engineering",
    "Information Security",
    "Cybersecurity",
    "ITSM",
    "ISO/IEC 27001",
    "ITIL 4",
    "SOC / NOC",
    "AI-assisted operations",
  ] as string[],
  executiveProfile: [
    { label: "CURRENT ROLE", value: "Group Head – IT Infrastructure & Cybersecurity" },
    { label: "ORGANIZATION", value: "Akij Resource Group" },
    { label: "EXPERIENCE", value: "13+ Years" },
    { label: "CORE DOMAIN", value: "Enterprise IT & Cybersecurity" },
    { label: "FRAMEWORKS", value: "ISO/IEC 27001 • ITIL 4" },
    { label: "OPERATIONS", value: "SOC • NOC • Infrastructure • ITSM" },
    { label: "LOCATION", value: "Dhaka, Bangladesh" },
  ] as ExecutiveProfileField[],
} as const;

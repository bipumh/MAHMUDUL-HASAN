export type Certification = {
  id: string;
  code: string;
  fullName: string;
  year: string;
  featured?: boolean;
  description: string;
};

export const certifications: Certification[] = [
  {
    id: "ceh",
    code: "CEH v13",
    fullName: "Certified Ethical Hacker v13",
    year: "2026",
    featured: true,
    description: "Advanced offensive security, hands-on exploitation, and ethical hacking methodology.",
  },
  {
    id: "nse4",
    code: "NSE 4",
    fullName: "Fortinet Network Security Expert",
    year: "2026",
    featured: true,
    description: "Certified Fortinet network security engineering, firewall, and security fabric expertise.",
  },
  {
    id: "mtcna",
    code: "MTCNA",
    fullName: "MikroTik Certified Network Associate",
    year: "2025",
    featured: false,
    description: "MikroTik networking fundamentals, routing, and device administration.",
  },
  {
    id: "mtcre",
    code: "MTCRE",
    fullName: "MikroTik Certified Routing Engineer",
    year: "2025",
    featured: false,
    description: "Advanced MikroTik routing, OSPF, and dynamic routing design.",
  },
  {
    id: "mtcse",
    code: "MTCSE",
    fullName: "MikroTik Certified Security Engineer",
    year: "2025",
    featured: false,
    description: "MikroTik security, firewalling, and secure network configuration.",
  },
];

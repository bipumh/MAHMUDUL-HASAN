import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  ShieldCheck,
  Network,
  Server,
  Headset,
  Fingerprint,
  Handshake,
  Users,
} from "lucide-react";

export type CompetencyGroup = {
  id: string;
  icon: LucideIcon;
  title: string;
  items: string[];
  description: string;
};

export const competencyGroups: CompetencyGroup[] = [
  {
    id: "governance",
    icon: Landmark,
    title: "IT Governance, Risk & Compliance",
    description: "Frameworks, policy, and control discipline.",
    items: ["ISO/IEC 27001", "ITIL 4", "IT Policy", "Audit", "Risk & Compliance"],
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity Operations",
    description: "Defence, detection, and response.",
    items: ["SOC", "SIEM", "EDR", "Vulnerability Management", "Incident Response", "Access Control"],
  },
  {
    id: "networking",
    icon: Network,
    title: "Enterprise Networking",
    description: "Secure, resilient enterprise fabric.",
    items: ["FortiGate", "Cisco", "MikroTik", "VLAN", "VPN", "Routing", "Switching", "ISP Management"],
  },
  {
    id: "infrastructure",
    icon: Server,
    title: "IT Infrastructure & Operations",
    description: "Core platforms and continuity.",
    items: ["Servers", "Virtualization", "Storage", "Backup", "Business Continuity", "Disaster Recovery"],
  },
  {
    id: "itsm",
    icon: Headset,
    title: "IT Service Management",
    description: "Structured, measurable services.",
    items: ["Incident Management", "Change Management", "Problem Management", "Service Request", "Escalation Management"],
  },
  {
    id: "iam",
    icon: Fingerprint,
    title: "Identity & Access Management",
    description: "Least privilege across the lifecycle.",
    items: ["Provisioning", "Access Reviews", "Privileged Access", "Onboarding", "Offboarding"],
  },
  {
    id: "vendor",
    icon: Handshake,
    title: "Vendor & Project Management",
    description: "Procurement through delivery.",
    items: ["Procurement", "Technical Evaluation", "BOQ Preparation", "Multi-site Deployment"],
  },
  {
    id: "leadership",
    icon: Users,
    title: "Leadership",
    description: "Teams, talent, and stakeholders.",
    items: ["IT Team Management", "Talent Development", "Stakeholder Collaboration", "Cross-functional Leadership"],
  },
];

export type ExpertiseLayer = {
  index: string;
  title: string;
  items: string[];
  description: string;
};

export const expertiseLayers: ExpertiseLayer[] = [
  {
    index: "01",
    title: "STRATEGY & GOVERNANCE",
    description: "Policy, frameworks, risk and compliance.",
    items: ["ISO/IEC 27001", "ITIL 4", "IT Governance", "Risk & Compliance", "Audit"],
  },
  {
    index: "02",
    title: "CYBERSECURITY",
    description: "Prevention, detection and response.",
    items: ["SOC", "SIEM", "EDR", "Vulnerability Management", "Incident Response"],
  },
  {
    index: "03",
    title: "NETWORK",
    description: "Resilient, segmented connectivity.",
    items: ["FortiGate", "Cisco", "MikroTik", "VPN", "VLAN"],
  },
  {
    index: "04",
    title: "INFRASTRUCTURE",
    description: "Compute, storage and continuity.",
    items: ["Servers", "Virtualization", "Storage", "Backup", "Disaster Recovery"],
  },
  {
    index: "05",
    title: "IT OPERATIONS",
    description: "Service delivery and observability.",
    items: ["ITSM", "SOC / NOC", "Monitoring", "Automation", "Incident Management"],
  },
];

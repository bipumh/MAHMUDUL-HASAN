export type AiFeature = {
  id: string;
  title: string;
  description: string;
  points: string[];
};

export const aiFeatures: AiFeature[] = [
  {
    id: "security-monitoring",
    title: "AI-Driven Security Monitoring",
    description:
      "AI-assisted security monitoring improving threat visibility, anomaly detection, and proactive security operations.",
    points: ["Threat visibility", "Anomaly detection", "Proactive operations"],
  },
  {
    id: "itsm-automation",
    title: "AI-Enabled ITSM Automation",
    description:
      "Integrated Claude and AI-based MCP/API connectivity into ITSM workflows, accelerating information exchange and incident management.",
    points: ["Claude integration", "MCP / API connectivity", "Faster information exchange"],
  },
  {
    id: "centralized-platform",
    title: "Centralized IT & Cybersecurity Platform",
    description:
      "Designed a unified open-source/code-based platform integrating IT operations, security monitoring, and ITSM functions.",
    points: ["IT operations", "Security monitoring", "ITSM functions"],
  },
];

export const aiPipeline = [
  "DATA",
  "MONITORING",
  "AI ASSISTANCE",
  "ANOMALY DETECTION",
  "ITSM",
  "INCIDENT MANAGEMENT",
  "RESPONSE",
];

export type SecurityChain = {
  id: string;
  title: string;
  items: string[];
};

export const securityChains: SecurityChain[] = [
  {
    id: "soc-chain",
    title: "Security Operations",
    items: ["ENDPOINTS", "NETWORK", "FIREWALL", "SIEM", "SOC", "INCIDENT RESPONSE"],
  },
  {
    id: "iam-chain",
    title: "Identity & Access",
    items: ["USERS", "IAM", "ACCESS CONTROL", "AUDIT"],
  },
];

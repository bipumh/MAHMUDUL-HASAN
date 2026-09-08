export type Metric = {
  value: number | null;
  text?: string;
  suffix?: string;
  label: string;
  detail: string;
};

export type AchievementStory = {
  id: string;
  title: string;
  domain: string;
  body: string;
  tags: string[];
  featured?: boolean;
};

/**
 * Metrics shown in the hero-adjacent executive metrics strip.
 * Values are exactly as they appear on the CV — do not modify.
 */
export const executiveMetrics: Metric[] = [
  {
    value: 13,
    suffix: "+",
    label: "Years Experience",
    detail: "Enterprise IT & cybersecurity leadership.",
  },
  {
    value: 99,
    suffix: "%+",
    label: "IT Operations Uptime",
    detail: "Sustained availability across enterprise operations.",
  },
  {
    value: 95,
    suffix: "%",
    label: "Resolution Efficiency",
    detail: "Service request & incident resolution performance.",
  },
  {
    value: 2000,
    suffix: "+",
    label: "Users",
    detail: "Enterprise users served, supported, and secured.",
  },
  {
    value: 40,
    text: "40–60",
    suffix: "%",
    label: "Security Incident Reduction",
    detail: "Fewer recurring incidents through layered controls.",
  },
  {
    value: null,
    text: "2h → 20",
    suffix: "min",
    label: "Incident Response",
    detail: "Structured, fast security incident response.",
  },
  {
    value: 95,
    suffix: "%",
    label: "Vulnerability Remediation",
    detail: "Remediation delivered within SLA.",
  },
  {
    value: 30,
    suffix: "+",
    label: "Branch Deployments",
    detail: "Full IT infrastructure for new branches nationwide.",
  },
];

/**
 * High-impact, CV-supported results.
 */
export const impactMetrics: Metric[] = [
  {
    value: 99,
    suffix: "%+",
    label: "Uptime",
    detail: "Reliability delivered through proactive monitoring and resilient enterprise infrastructure.",
  },
  {
    value: 95,
    suffix: "%",
    label: "Resolution Efficiency",
    detail: "Consistently high service request and incident resolution performance against defined ITSM targets.",
  },
  {
    value: 40,
    text: "40–60",
    suffix: "%",
    label: "Security Incident Reduction",
    detail: "Reduced recurring security incidents through layered controls, monitoring, and awareness.",
  },
  {
    value: null,
    text: "2h → 20",
    suffix: "min",
    label: "Incident Response",
    detail: "Rapid, structured security incident response enabled by SOC monitoring and defined playbooks.",
  },
  {
    value: 95,
    suffix: "%",
    label: "Vulnerability Remediation Within SLA",
    detail: "Timely remediation of identified vulnerabilities against defined service-level targets.",
  },
  {
    value: 30,
    suffix: "+",
    label: "New Branch Offices",
    detail: "Complete IT infrastructure planned, deployed, and commissioned for branches nationwide.",
  },
  {
    value: 2000,
    suffix: "+",
    label: "Users",
    detail: "IT, security, and service support delivered to a large, multi-site enterprise user base.",
  },
  {
    value: 30,
    suffix: "%",
    label: "Incident Reduction via Awareness",
    detail: "Organization-wide cybersecurity awareness program that lowered security incidents.",
  },
];

export const achievementStories: AchievementStory[] = [
  {
    id: "ai-security-monitoring",
    title: "AI-Driven Security Monitoring",
    domain: "Security Operations",
    body: "Implemented AI-assisted security monitoring to improve threat visibility, anomaly detection, and proactive security operations.",
    tags: ["AI", "Threat Visibility", "Anomaly Detection"],
    featured: true,
  },
  {
    id: "ai-itsm-automation",
    title: "AI-Enabled ITSM Automation",
    domain: "IT Service Management",
    body: "Integrated Claude and AI-based MCP/API connectivity into ITSM workflows, accelerating information exchange and incident management.",
    tags: ["AI", "ITSM", "Automation", "Claude"],
    featured: true,
  },
  {
    id: "centralized-platform",
    title: "Centralized IT & Cybersecurity Platform",
    domain: "Platform Engineering",
    body: "Designed a unified open-source/code-based platform integrating IT operations, security monitoring, and ITSM functions.",
    tags: ["IT Operations", "Security", "ITSM"],
    featured: true,
  },
  {
    id: "centralized-noc",
    title: "Centralized NOC",
    domain: "Infrastructure Operations",
    body: "Established a Network Operations Center delivering unified monitoring, visibility, and incident response across business sites.",
    tags: ["NOC", "Monitoring", "Visibility"],
  },
  {
    id: "iso-27001",
    title: "ISO/IEC 27001 ISMS Implementation",
    domain: "Governance & Compliance",
    body: "Led end-to-end rollout of information security policies, risk management, controls, and governance documentation.",
    tags: ["ISO/IEC 27001", "ISMS", "Governance"],
    featured: true,
  },
  {
    id: "itil-4",
    title: "ITIL 4 ITSM Deployment",
    domain: "IT Service Management",
    body: "Introduced structured Incident, Change, Problem, Service Request, and Escalation Management.",
    tags: ["ITIL 4", "ITSM", "Process"],
  },
  {
    id: "multi-site",
    title: "Multi-site Infrastructure Rollout",
    domain: "Infrastructure",
    body: "Installed complete IT infrastructure for 30+ new branch offices nationwide.",
    tags: ["Infrastructure", "Multi-site", "Deployment"],
  },
  {
    id: "awareness",
    title: "Security Awareness Program",
    domain: "Security Culture",
    body: "Led organization-wide cybersecurity training, reducing security incidents by 30%.",
    tags: ["Awareness", "Training", "Reduction"],
  },
  {
    id: "government-ict",
    title: "Government ICT Projects",
    domain: "Nationwide Delivery",
    body: "Delivered nationwide ICT deployments involving Bangladesh Bank, Primary Education, Land Ministry, Bangladesh Zila Parishad Election, and Bangladesh Census.",
    tags: ["Government", "Nationwide", "ICT"],
  },
];

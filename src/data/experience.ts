export type JobResponsibilityGroup = {
  title: string;
  items: string[];
};

export type Role = {
  id: string;
  period: string;
  roleTitle: string;
  company: string;
  location: string;
  tenure?: string;
  status: "current" | "previous" | "earlier";
  summary?: string;
  responsibilityGroups: JobResponsibilityGroup[];
};

export const experience: {
  current: Role;
  timeline: Role[];
} = {
  current: {
    id: "akij",
    period: "Jul 2026 — Present",
    roleTitle: "Group Head – IT Infrastructure & Cybersecurity",
    company: "Akij Resource Group",
    location: "Dhaka, Bangladesh",
    status: "current",
    summary:
      "Leading group-wide IT infrastructure and cybersecurity, connecting engineering, security, governance, and service management under a single accountable leadership model.",
    responsibilityGroups: [
      {
        title: "IT Infrastructure & Operations",
        items: [
          "IT Infrastructure",
          "Servers",
          "Virtualization",
          "Storage",
          "Backup",
          "Business Continuity",
          "Monitoring",
          "IT Operations",
        ],
      },
      {
        title: "Network",
        items: [
          "Network",
          "Firewall",
          "Switching",
          "Wi-Fi",
          "VLAN",
          "VPN",
          "Routing",
          "ISP connectivity",
        ],
      },
      {
        title: "Cybersecurity & Compliance",
        items: [
          "Information Security",
          "Cybersecurity",
          "SIEM / SOC",
          "Vulnerability Management",
          "Endpoint Security",
          "Incident Response",
          "ISMS",
          "Risk Assessment",
          "Risk Register",
          "ISO/IEC 27001",
        ],
      },
      {
        title: "Identity & Access Management",
        items: [
          "IAM",
          "Access Review",
          "Privileged Access",
        ],
      },
      {
        title: "IT Governance & Service Management",
        items: [
          "IT Governance",
          "Policies",
          "SOPs",
          "ITIL",
          "ITSM",
          "Executive Reporting",
        ],
      },
      {
        title: "Vendor, Procurement & People",
        items: [
          "Vendor Management",
          "Procurement",
          "BOQ",
          "Cybersecurity Awareness",
        ],
      },
    ],
  },
  timeline: [
    {
      id: "walton",
      period: "Feb 2015 — Jul 2026",
      roleTitle: "Group IT Lead (Sr. AD) – ICT Department",
      company: "Walton Group",
      location: "Dhaka, Bangladesh",
      tenure: "11.3 Years",
      status: "previous",
      summary:
        "Leadership across a large enterprise ICT footprint — spanning security operations, network engineering, infrastructure, governance, and service management for a multi-division manufacturing group.",
      responsibilityGroups: [
        {
          title: "Security Operations",
          items: [
            "SOC",
            "Fortinet",
            "Cisco",
            "SIEM",
            "EDR",
            "Cybersecurity",
            "Network Security",
          ],
        },
        {
          title: "Network & Infrastructure",
          items: [
            "NOC",
            "Network",
            "MikroTik",
            "VPN",
            "VLAN",
            "Load Balancing",
            "Auto-Failover",
            "Link Redundancy",
            "Servers",
            "Backup",
            "Disaster Recovery",
            "Business Continuity",
            "CCTV",
          ],
        },
        {
          title: "Enterprise Systems",
          items: [
            "Oracle EBS",
            "CRM",
            "POS",
            "Active Directory",
            "IT Automation",
            "Infrastructure",
          ],
        },
        {
          title: "IT Governance & Management",
          items: [
            "IT Governance",
            "Risk & Compliance",
            "IT Audit",
            "Asset Management",
            "Vendor Management",
            "SLA Management",
            "IT Budgeting",
            "Performance Evaluation",
            "Team Mentoring",
            "IT Operations",
          ],
        },
      ],
    },
    {
      id: "synesis",
      period: "Jul 2013 — Feb 2015",
      roleTitle: "IT Officer",
      company: "Synesis IT PLC",
      location: "Dhaka, Bangladesh",
      status: "earlier",
      summary:
        "IT operations for a Linux-based call center environment, covering enterprise network equipment, servers, and end-user support.",
      responsibilityGroups: [
        {
          title: "IT Operations",
          items: [
            "Linux-based call center infrastructure",
            "Enterprise network equipment",
            "End-user support",
            "Vici Dial",
            "Network",
            "Server",
            "CCTV",
            "DVR",
            "Incident Resolution",
            "Business Continuity",
          ],
        },
      ],
    },
  ],
};

export type CareerMilestone = {
  year: string;
  company: string;
  role: string;
};

export const careerMilestones: CareerMilestone[] = [
  { year: "2013", company: "Synesis IT PLC", role: "IT Officer" },
  { year: "2015", company: "Walton Group", role: "Group IT Lead" },
  { year: "2026", company: "Akij Resource Group", role: "Group Head – IT Infrastructure & Cybersecurity" },
];

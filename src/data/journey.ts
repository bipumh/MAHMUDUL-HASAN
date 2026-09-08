export type CapabilityStep = {
  label: string;
  detail: string;
};

export const capabilityJourney: CapabilityStep[] = [
  { label: "NETWORK", detail: "Connectivity & fabric" },
  { label: "INFRASTRUCTURE", detail: "Platform & continuity" },
  { label: "ENTERPRISE IT", detail: "Integrated systems" },
  { label: "CYBERSECURITY", detail: "Defence & response" },
  { label: "GOVERNANCE", detail: "Policy & compliance" },
  { label: "ITSM", detail: "Service excellence" },
  { label: "AI-ASSISTED OPERATIONS", detail: "Intelligence & automation" },
  { label: "STRATEGIC LEADERSHIP", detail: "Direction & delivery" },
];

export type Principle = {
  label: string;
  detail: string;
};

export const principles: Principle[] = [
  { label: "RELIABILITY", detail: "Operations you can depend on" },
  { label: "SECURITY", detail: "Secure by design" },
  { label: "GOVERNANCE", detail: "Frameworks that hold" },
  { label: "CONTINUITY", detail: "Ready for disruption" },
  { label: "VISIBILITY", detail: "Monitor everything" },
  { label: "AUTOMATION", detail: "Eliminate toil" },
  { label: "LEADERSHIP", detail: "Enable people and teams" },
];

export type GovernmentProject = {
  id: string;
  name: string;
  description: string;
};

export const governmentProjects: GovernmentProject[] = [
  {
    id: "bb",
    name: "Bangladesh Bank",
    description: "Nationwide ICT deployment supporting central banking operations.",
  },
  {
    id: "education",
    name: "Primary Education",
    description: "ICT rollout across nationwide primary education facilities.",
  },
  {
    id: "land",
    name: "Land Ministry",
    description: "ICT deployment supporting the public land ministry network.",
  },
  {
    id: "zila",
    name: "Bangladesh Zila Parishad Election",
    description: "Technology deployment delivered for national council election programs.",
  },
  {
    id: "census",
    name: "Bangladesh Census",
    description: "ICT deployment supporting the national census operation.",
  },
];

export const governmentEquipment = [
  "Laptops",
  "Desktops",
  "Routers",
  "Switches",
  "CCTV Surveillance",
];

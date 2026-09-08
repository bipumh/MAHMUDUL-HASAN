export type TrainingCourse = {
  id: string;
  title: string;
  provider: string;
  year: string;
};

export const trainingCourses: TrainingCourse[] = [
  { id: "iso27001", title: "ISO 27001 Lead Auditor – ISMS", provider: "Alison", year: "2025" },
  { id: "ccna", title: "CCNA", provider: "Cisco Networking Academy", year: "2026" },
  { id: "itil4", title: "ITIL 4 Foundation", provider: "Udemy", year: "2025" },
  { id: "aws", title: "AWS Cloud Technical Essentials", provider: "Grameenphone Academy", year: "2025" },
  { id: "chissp", title: "CHISSP", provider: "Udemy", year: "2025" },
  { id: "linux", title: "Linux Network Administrator", provider: "Alison", year: "2025" },
  { id: "cisco-security", title: "Cisco Network Support and Security", provider: "Cisco", year: "2025" },
  { id: "intro-cyber", title: "Introduction to Cybersecurity", provider: "Cisco", year: "2025" },
  { id: "policy", title: "Policy Development Process", provider: "APNIC Academy", year: "2025" },
  { id: "healthcare", title: "Healthcare Information Systems", provider: "Udemy", year: "2025" },
  { id: "winserver", title: "Windows Server 2016 Administration", provider: "CSL IT", year: "2020" },
];

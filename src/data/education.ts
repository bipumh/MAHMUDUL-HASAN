export type EducationRecord = {
  id: string;
  degree: string;
  program: string;
  institution: string;
  institutionType: string;
  year: string;
  result: string;
};

export const education: EducationRecord[] = [
  {
    id: "mba",
    degree: "MBA",
    program: "Human Resource Management",
    institution: "Begum Rokeya University",
    institutionType: "Public",
    year: "2024",
    result: "CGPA 3.90/4.00",
  },
  {
    id: "bsc",
    degree: "BSc",
    program: "Computer Science & Engineering",
    institution: "Daffodil International University",
    institutionType: "University",
    year: "2015",
    result: "CGPA 3.53/4.00",
  },
  {
    id: "diploma",
    degree: "Diploma",
    program: "Telecommunication Engineering",
    institution: "Tangail Polytechnic Institute",
    institutionType: "Govt.",
    year: "2011",
    result: "CGPA 3.16/4.00",
  },
];

export const recognition = {
  title: "Best Employee Award",
  detail: "Recognized for outstanding IT service delivery.",
};

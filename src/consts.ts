import interno from "@/assets/projects/interno.png";
export type Project = {
  title: string;
  image: any; // bisa diperjelas kalau kamu tahu tipenya
  date: number;
  testType: string;
  description: string;
  techStack: string[];
  statusWebsite: boolean;
  websiteLink: string;
  repository: string;
};

export const projectsData: Project[] = [

];

export const workExperiences = [
  {
    id: 1,
    company: "Puskomedia Indonesia Kreatif",
    position: "Web Developer Intern",
    startDate: "August 2022",
    endDate: "September 2022",
  },
];

export const study = [
  {
    location: "Institut Teknologi Telkom Purwokerto",
    major: "Teknik Informatika",
    date: "August 2019 - March 2024",
  },
  {
    location: "SMK Negeri 1 Wanareja",
    major: "Multimedia",
    date: "July 2016 - May 2019",
  },
];
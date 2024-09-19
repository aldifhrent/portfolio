import Link from "next/link";
import { Card, CardHeader, CardTitle } from "./ui/card";

const projectsData = [
  {
    title: "Landing Page",
    date: 2024,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis tempore non veniam architecto ipsum perspiciatis earum dolor velit. Neque aliquam numquam delectus recusandae eveniet doloremque ratione voluptates temporibus molestiae veritatis.",
    websiteLink: "http://www.google.com",
  },
  {
    title: "Landing Page",
    date: 2024,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis tempore non veniam architecto ipsum perspiciatis earum dolor velit. Neque aliquam numquam delectus recusandae eveniet doloremque ratione voluptates temporibus molestiae veritatis.",
    websiteLink: "http://www.google.com",
  },
  {
    title: "Landing Page",
    date: 2024,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis tempore non veniam architecto ipsum perspiciatis earum dolor velit. Neque aliquam numquam delectus recusandae eveniet doloremque ratione voluptates temporibus molestiae veritatis.",
    websiteLink: "http://www.google.com",
  },
];
export default function Projects() {
  return (
    <section className="mt-8 ">
      <div className="container mx-auto justify-center flex flex-col">
        <h1 className="text-md font-semibold ">Projects</h1>
        <div className="flex flex-col gap-y-8 mt-4">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              date={project.date}
              description={project.description}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectProps {
  title: string;
  date: number;
  description?: string;
  websiteLink?: string;
}
function ProjectCard({ title, date, description, websiteLink }: ProjectProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <h1 className="text-xl md:text-3xl">{title}</h1>
        <p className="px-2 py-[3px] bg-black dark:bg-white text-white dark:text-black  rounded-lg">
          {date}
        </p>
      </div>
      <p className="text-sm mt-2 md:text-lg text-muted-foreground text-justify">
        {description}
      </p>
      <Link
        href={websiteLink || ""}
        className="mt-2 text-md hover:underline hover:cursor-pointer"
      >
        Link Website
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Portfolio Slicing",
    date: 2024,
    description:
      "slicing the portfolio landing page with the design obtained from the figma community and slicing using nextjs, tailwindcss and also framer motion.",
    websiteLink: "https://portfolio-slicing.vercel.app/",
  },
  {
    title: "Landing Page",
    date: 2024,
    description:
      "slicing landing page designs and designs obtained from the figma community using nextjs, tailwindcss and framer motion.",
    websiteLink: "https://landingpage-slicing.vercel.app/",
  },
];
export default function Projects() {
  return (
    <section className="mt-8 " id="projects">
      <div className="container mx-auto justify-center flex flex-col">
        <h1 className="text-md font-semibold ">Projects</h1>
        <div className="flex flex-col gap-y-8 mt-4">
          {projectsData.map((project, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.5,
                ease: "easeInOut",
              }}
            >
              <ProjectCard
                key={index}
                title={project.title}
                date={project.date}
                description={project.description}
                websiteLink={project.websiteLink}
              />
            </motion.div>
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
        <h1 className="text-xl md:text-2xl">{title}</h1>
        <p className="px-2 py-[3px] bg-black dark:bg-white text-white dark:text-black  rounded-lg">
          {date}
        </p>
      </div>
      <p className="text-sm mt-2 md:text-md text-muted-foreground text-justify">
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

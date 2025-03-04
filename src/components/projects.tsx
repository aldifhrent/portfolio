"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Github } from "lucide-react";
import { BiWorld } from "react-icons/bi";

import { useEffect } from "react";
import { projectsData } from "@/consts";



export default function Projects() {
  return (
    <section className="mt-12 " id="projects">
      <div className="container mx-auto justify-center flex flex-col">
        <h1 className="text-md font-semibold   p-[2px] rounded-xs  w-fit">
          my projects
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-4">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
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
                title={project.title}
                description={project.description}
                websiteLink={project.websiteLink}
                repository={project.repository}
                image={project.image}
                techStack={project.techStack}
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
  description?: string;
  websiteLink?: string;
  repository?: string;
  techStack: string[];
  image: StaticImageData | string;
}
function ProjectCard({
  title,
  description,
  websiteLink,
  repository,
  techStack,
  image,
}: ProjectProps) {
  return (
    <Card className="relative flex w-[300px] shadow-lg bg-white dark:bg-black dark:border-white border-[2px]">
      {/* Clone Effect */}
      <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 border border-white opacity-40 rounded-lg"></div>

      <div className="flex flex-col gap-4">
        <Link href={websiteLink || ""} target="_blank">
          <Image src={image} alt={`${title} Project`} className="w-full" />
        </Link>
        <div className="p-4">
          <h1 className="text-lg font-bold -mt-2">{title}</h1>
          <p className="text-sm text-muted-foreground text-justify mt-2">
            {description}
          </p>
        </div>
        {techStack && (
          <div className="flex flex-wrap gap-2 px-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-semibold text-white bg-black dark:bg-white dark:text-black rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center gap-x-4 justify-center p-4  ">
          <Link
            target="_blank"
            href={repository || ""}
            className="mt-2 text-md hover:underline hover:cursor-pointer font-bold hover:underline-offset-2"
          >
            <div className="flex gap-1 p-1 rounded-lg items-center">
              <Github
                size={20}
                className="bg-black p-1 text-white rounded-lg dark:bg-white dark:text-black"
              />{" "}
              Repository
            </div>
          </Link>
        </div>
      </div>
    </Card>
  );
}

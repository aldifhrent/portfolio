"use client";

import Link from "next/link";
import { Card } from "../ui/card";
import Image, { StaticImageData } from "next/image";
import { Github } from "lucide-react";
import { projectsData } from "@/consts";
import ProjectCard from "../project.card";

export default function Projects() {
  const displayedProjects = projectsData.slice(0, 3); // Tampilkan 3 proyek pertama

  return (
    <section className="mt-12" id="projects">
      <div className="container mx-auto flex flex-col justify-center">
        <h1 className="text-md font-semibold p-[2px] rounded-xs w-fit">
          My Projects
        </h1>

        {/* Grid dengan jarak antar item */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {projectsData.length > 3 && (
          <Link
          href="/projects"
            className="mt-8  bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-lg font-semibold w-fit text-center"
          >
            Check Other Projects
          </Link>
        )}
      </div>
    </section>
  );
}


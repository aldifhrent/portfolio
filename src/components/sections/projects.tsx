"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/consts";
import ProjectCard from "../project.card";

const categories = ["All", "Front End", "Back End", "Full Stack"];

export default function Projects() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    selectedType === "All" ? true : project.type === selectedType
  );

  return (
    <section className="mt-12" id="projects">
      <div className="container mx-auto flex flex-col justify-center">
        <Link href="/projects" className="text-md font-semibold p-[2px] hover:underline hover:underline-offset-4">
          my Projects
        </Link>

        {/* Filter Buttons */}
        <div className="flex gap-4 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                selectedType === category ? "bg-black text-white dark:bg-white dark:text-black" : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setSelectedType(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid dengan filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mt-8">
          {filteredProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <Link
            href="/projects"
            className="mt-8 bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-lg font-semibold w-fit text-center"
          >
            Check Other Projects
          </Link>
        )}
      </div>
    </section>
  );
}

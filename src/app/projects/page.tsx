"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/consts";
import Profile from "@/components/sections/profile";
import Footer from "@/components/sections/footer";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Contacts from "@/components/sections/contacts";

const categories = ["All", "Front End", "Back End", "Full Stack"];
const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects based on selected type
  const filteredProjects = projectsData.filter((project) =>
    selectedType === "All" ? true : project.type === selectedType
  );

  // Calculate pagination values
  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / ITEMS_PER_PAGE);

  // Get current page projects
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of projects section
    document
      .getElementById("projects-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Reset to first page when changing filter
  const handleFilterChange = (category: string) => {
    setSelectedType(category);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="min-h-screen py-16">
      <div className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                selectedType === category
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setSelectedType(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid or empty state */}
        {filteredProjects.length > 0 ? (
          <>
            <div
              id="projects-grid"
              className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {currentProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-[400px]"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={
                        typeof project.image === "string"
                          ? project.image
                          : project.image.src
                      }
                      alt={project.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-gray-500">{project.date}</span>
                    </div>

                    <div className="flex gap-2 mb-4">
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-md">
                        {project.type}
                      </span>
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-md">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-center items-center mt-4 w-full mx-auto">
                      {project.statusWebsite ? (
                        <Link
                          href={project.websiteLink || ""}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Visit Website
                        </Link>
                      ) : (
                        <span className="text-gray-400">Under Development</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {/* Previous button */}
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          currentPage > 1 && handlePageChange(currentPage - 1)
                        }
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => handlePageChange(page)}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}

                    {/* Next button */}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          currentPage < totalPages &&
                          handlePageChange(currentPage + 1)
                        }
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 mt-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-medium text-gray-700 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-white">
              No projects match the selected filter. Try selecting a different
              category.
            </p>
          </div>
        )}
      </div>
      <Contacts />
      <Footer />
    </section>
  );
}

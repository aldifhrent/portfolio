import Link from "next/link";
import { Card } from "./ui/card";
import Image, { StaticImageData } from "next/image";

export interface ProjectProps {
  title: string;
  description?: string;
  websiteLink?: string;
  repository?: string;
  techStack: string[]; // Tools untuk QA
  testType?: string;
  statusWebsite?: boolean;
  image: StaticImageData | string;
}

export default function ProjectCard({
  title,
  description,
  websiteLink,
  techStack,
  testType,
  statusWebsite,
  image,
}: ProjectProps) {
  return (
    <Card className="relative flex flex-col w-[300px] h-full mx-auto shadow-lg bg-white dark:bg-black dark:border-white border-[2px] rounded-lg z-2">
      {/* Clone Effect */}
      <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 border border-black dark:border-white rounded-lg opacity-30 bg-black dark:bg-white"></div>

      {/* Container utama */}
      <div className="flex flex-col justify-between h-full">
        <Image
          src={image}
          alt={`${title} Project`}
          width={500}
          height={500}
          className="w-full"
        />

        {/* Konten */}
        <div className="p-4 flex-grow">
          <h1 className="text-lg font-bold">{title}</h1>
          {testType && (
            <p className="font-bold bg-black text-white dark:bg-white dark:text-black w-fit px-2 py-1 mt-3 rounded-sm">
              {testType}
            </p>
          )}
          <p className="text-sm text-muted-foreground mt-4 min-h-[100px]">
            {description}
          </p>
        </div>

        {/* Tools */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 px-4 min-h-[50px]">
            {techStack.map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-semibold text-white bg-black dark:bg-white dark:text-black rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* Tombol */}
        <div className="p-4 mt-auto">
          {statusWebsite !== undefined && (
            <div
              className={`w-full text-center p-2 rounded-lg font-bold ${
                statusWebsite
                  ? "bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 transition"
                  : "bg-gray-300 text-black"
              }`}
            >
              {statusWebsite ? (
                <Link
                  href={websiteLink || "#"}
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <div className="bg-green-300 size-2 rounded-full animate-pulse"></div>
                  Live
                </Link>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Coming Soon
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

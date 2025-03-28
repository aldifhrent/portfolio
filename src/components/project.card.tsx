import Link from "next/link";
import { Card } from "./ui/card";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  description?: string;
  websiteLink?: string;
  repository?: string;
  techStack: string[];
  type?: string;
  statusWebsite?: boolean;
  image: StaticImageData | string;
}

export default function ProjectCard({
  title,
  description,
  websiteLink,
  techStack,
  type,
  statusWebsite,
  image,
}: ProjectProps) {
  return (
    <Card className="relative flex flex-col max-w-md h-full mx-auto shadow-lg bg-white dark:bg-black dark:border-white border-[2px]  rounded-lg z-2">
      {/* Clone Effect */}
      <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 border border-black dark:border-white rounded-lg opacity-30 bg-black dark:bg-white"></div>

      <div className="flex flex-col gap-4">
      <Image
              src={image}
              alt={`${title} Project`}
              className="w-full h-auto rounded-t-lg"
              width={300}
              height={150}
            />
        <div className="p-4">
          <h1 className="text-lg font-bold -mt-2">{title}</h1>
          <p className="bbg-black dark:bg-white text-black dark:text-black w-fit px-1 mt-3">{type}</p>
          <p className="text-sm text-muted-foreground mt-4">{description}</p>
        </div>
        {techStack.length > 0 && (
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
        <div className="flex items-center justify-center p-4">
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

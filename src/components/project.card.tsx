import Link from "next/link";
import { Card } from "./ui/card";
import { Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  description?: string;
  websiteLink?: string;
  repository?: string;
  techStack: string[];
  image: StaticImageData | string;
}

export default function ProjectCard({
  title,
  description,
  websiteLink,
  repository,
  techStack,
  image,
}: ProjectProps) {
  return (
    <Card className="relative flex flex-col w-fit mx-auto shadow-lg bg-white dark:bg-black dark:border-white border-[2px] h-full">
      {/* Clone Effect */}
      <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 border border-black dark:border-white rounded-lg opacity-30 bg-black dark:bg-white"></div>

      <div className="flex flex-col gap-4">
        <Link href={websiteLink || ""} target="_blank">
          <Image
            src={image}
            alt={`${title} Project`}
            className="w-full h-auto"
          />
        </Link>
        <div className="p-4">
          <h1 className="text-lg font-bold -mt-2">{title}</h1>
          <p className="text-sm text-muted-foreground  mt-2">
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
        <div className="flex items-center gap-2 justify-center p-4">
          <Link
            target="_blank"
            href={websiteLink || ""}
            className="hover:underline font-bold w-full bg-black dark:bg-white p-1 text-white dark:text-black text-center rounded-lg mx-auto"
          >
            <div className="flex items-center gap-2 text-center justify-center">
              <div className="bg-green-300 size-2 rounded-full animate-blink"></div>
              <span> Live Website</span>
            </div>
          </Link>
        </div>
      </div>
    </Card>
  );
}

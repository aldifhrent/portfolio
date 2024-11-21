import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image, { StaticImageData } from "next/image";

const skills = [
  "javascript",
  "typescript",
  "express.js",
  "postgresql",
  "prisma",
];
export function Skills() {
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h1 className="font-bold">skills</h1>

          <div className="flex relative overflow-hidden rounded-lg bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
              {skills.map((sk) => {
                return (
                  <h1
                    key={sk}
                    className="bg-black text-white dark:bg-white dark:text-black px-2 rounded-full font-semibold"
                  >
                    {sk}
                  </h1>
                );
              })}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

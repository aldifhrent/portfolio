"use client";

import { workExperiences } from "@/consts";
import { motion } from "framer-motion";

export default function WorkExperience() {
  return (
    <section className="mt-12">
      <motion.div
        className="container mx-auto"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8}}
      >
        <h1 className="font-bold text-md">work experience</h1>
        <div className="flex flex-col mt-4 gap-8">
          {workExperiences.map((work) => (
            <div className="flex justify-between" key={work.id}>
            <div>
              <h1 className="font-bold text-md">
                {work.company}
              </h1>
              <h2 className="text-sm">{work.position}</h2>
            </div>
            <h3>{work.startDate} - {work.endDate}</h3>
          </div>
          ))}
          
        </div>
      </motion.div>
    </section>
  );
}

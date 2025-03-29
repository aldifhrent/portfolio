"use client";

import { motion } from "framer-motion";

export default function WorkExperience() {
  return (
    <section className="mt-12">
      <motion.div
        className="container mx-auto"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7}}
      >
        <h1 className="font-bold text-md">work experience</h1>
        <div className="flex flex-col mt-4">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-md">
                Puskomedia Indonesia Kreatif
              </h1>
              <h2 className="text-sm">Web Developer Intern</h2>
            </div>
            <h3>Aug 2022 - Sep 2022</h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

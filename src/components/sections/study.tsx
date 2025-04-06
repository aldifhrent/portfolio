'use client'

import React from "react";
import StudyCard from "../study.card";
import { motion } from "framer-motion";
import { study } from "@/consts";


export default function Study() {
  return (
    <section className="mt-12">
      <motion.div
        className="container mx-auto"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col">
          <h1 className="font-bold">education</h1>
          <div className="flex flex-col mt-4 gap-5">
            {study.map((study) => (
              <StudyCard
                location={study.location}
                major={study.major}
                date={study.date}
                key={study.location}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

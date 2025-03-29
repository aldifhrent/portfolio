"use client";

import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Menu = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <section className="mt-12 max-w-screen">
      <div className="container mx-auto">
        <motion.div
          className="flex justify-between items-center border rounded-full dark:border-white px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={resolvedTheme}
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {resolvedTheme === "light" ? (
                  <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-100" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center hover:font-semibold hover:underline cursor-pointer"
          >
            <Link
              href="/Aldi-CV.pdf"
              className="p-2 flex items-center hover:underline space-x-1 hover:bg-gray-700 text-black dark:text-white hover:text-white rounded-full gap-2"
            >
              <Download className="size-5" />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

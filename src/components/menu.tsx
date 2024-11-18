"use client";

import {
  AtSign,
  BriefcaseBusiness,
  FolderClosed,
  Download,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
const Menu = () => {
  const controls = useAnimation();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = Cookies.get("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  if (!mounted) return null;

  const handleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    Cookies.set("theme", newTheme);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      controls.start({
        y: element.offsetTop,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="mt-12 max-w-screen">
      <div className="container mx-auto">
        <motion.div
          className="flex justify-between items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          >
            {resolvedTheme === "light" ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-gray-100" />
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center hover:font-semibold hover:underline cursor-pointer"
          >
            <Link
              href="/Aldi-CV.pdf"
              className="flex items-center hover:underline space-x-1 hover:bg-gray-100 black  rounded-full p-1"
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

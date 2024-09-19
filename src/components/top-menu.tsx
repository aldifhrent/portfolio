"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie

const TopMenu = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is loaded before rendering to avoid hydration mismatches
  useEffect(() => {
    setMounted(true);
    // Check if a theme preference is stored in cookies
    const storedTheme = Cookies.get("theme");
    if (storedTheme) {
      setTheme(storedTheme); // Set theme based on cookie value
    }
  }, [setTheme]);

  // If not mounted, don't render anything (prevents flashing)
  if (!mounted) return null;

  const handleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    Cookies.set("theme", newTheme); // Save the new theme in cookies
  };

  return (
    <section className="relative pt-4">
      <div className="container flex justify-end">
        <button
          onClick={handleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        >
          {resolvedTheme === "light" ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-100" />
          )}
        </button>
      </div>
    </section>
  );
};

export default TopMenu;

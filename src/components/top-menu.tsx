"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const TopMenu = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    // Toggle antara tema light dan dark
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="relative pt-4">
      <div className="container flex justify-end">
        <button onClick={handleTheme}>
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </div>
    </section>
  );
};

export default TopMenu;

"use client";

import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
export default function Header() {
  const { theme, setTheme } = useTheme();

  // Toggle between dark and light theme
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 right-0 p-4">
      <div className="flex items-center space-x-4">
        <button
          className={`flex items-center justify-center w-10 h-10 rounded-full  shadow-lg ${
            theme === "dark" ? "bg-white" : "bg-black"
          }`}
          onClick={handleThemeToggle}
        >
          {theme === "dark" ? (
            <FaMoon
              className={`size-5 ${
                theme === "dark" ? "text-black" : "text-white"
              } rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
            />
          ) : (
            <IoMdSunny
              className={`size-5 ${
                theme === "dark" ? "text-black" : "text-white"
              } rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`}
            />
          )}
        </button>
      </div>
    </header>
  );
}

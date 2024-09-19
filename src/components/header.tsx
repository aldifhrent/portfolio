"use client";

import { AtSign, BriefcaseBusiness, FolderClosed } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  // Toggle between dark and light theme
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky h-16 flex justify-evenly mt-8 xl:mt-0">
      <div className="container flex justify-between items-center ">
        <div className="flex flex-col gap-2">
          <Link
            href="/portfolio"
            className="group flex items-center gap-1 text-md hover:font-semibold hover:underline cursor-pointer focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            <FolderClosed className="w-5 h-5" />
            projects
          </Link>
          <Link
            href="/portfolio"
            className="group flex items-center gap-1 text-md hover:font-semibold hover:underline cursor-pointer focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            <BriefcaseBusiness className="w-5 h-5" />
            work
          </Link>
          <Link
            href="/portfolio"
            className="flex items-center gap-1 text-md hover:font-semibold hover:underline cursor-pointer"
          >
            <AtSign className="size-5" />
            contact
          </Link>
        </div>
      </div>
    </header>
  );
}

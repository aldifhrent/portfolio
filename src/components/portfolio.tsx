"use client";

import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";

export default function Portfolio() {
  return (
    <section className="mt-8 w-full">
      <h2 className="text-2xl font-bold text-center ">Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-4 items-center">
        <Card className="w-[300px] bg-gray-100 hover:bg-gray-200">Hello</Card>
        <Card className="w-[300px]">Hello</Card>
      </div>
    </section>
  );
}

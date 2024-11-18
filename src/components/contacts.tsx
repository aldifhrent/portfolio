"use client";

import { useToast } from "@/hooks/use-toast";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  const { toast } = useToast();

  const handleCopy = () => {
    const email = "aldiahmadfahriziilmawan@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast({
          title: "Copied to clipboard",
          description: email,
        });
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <section className="mt-12" id="contact">
      <div className="container mx-auto">
        <h1 className="text-lg font-bold p-[2px] rounded-xs  w-fit">
          Contacts
        </h1>
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex items-center">
            <p className="flex-shrink-0">Email</p>
            <hr className="flex-grow border-gray-300 mx-2" />
            <p
              className="flex items-center pl-4 hover:underline hover:cursor-pointer"
              onClick={handleCopy}
            >
              aldiahmadfahriziilmawan@gmail.com <ChevronRight />
            </p>
          </div>
          <div className="flex items-center">
            <p className="flex-shrink-0">Github</p>
            <hr className="flex-grow border-gray-300 mx-2" />
            <Link
              href="https://github.com/aldifhrent"
              className="flex items-center pl-4 hover:underline"
              target="_blank"
            >
              @aldifhrent <ChevronRight />
            </Link>
          </div>
          <div className="flex items-center">
            <p className="flex-shrink-0">Linkedin</p>
            <hr className="flex-grow border-gray-300 mx-2" />
            <Link
              href="https://www.linkedin.com/in/aldiahmadfahriziilmawan/"
              className="flex items-center pl-4 hover:underline"
              target="_blank"
            >
              @aldiahmadfahriziilmawan <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useToast } from "@/hooks/use-toast";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  const { toast } = useToast();

  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast({
          title: "Copied to clipboard",
          description: value,
        });
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  const contacts = [
    {
      type: "Phone Number",
      value: "+6285818718161",
      action: (value: string) => (
        <span
          className="flex items-center pl-4 hover:cursor-pointer hover:underline hover:underline-offset-4"
          onClick={() => handleCopy(value)}
        >
          {value} <ChevronRight />
        </span>
      ),
    },
    {
      type: "Email",
      value: "aldiahmadfahriziilmawan@gmail.com",
      action: (value: string) => (
        <span
          className="flex items-center pl-4 hover:cursor-pointer hover:underline hover:underline-offset-4"
          onClick={() => handleCopy(value)}
        >
          {value} <ChevronRight />
        </span>
      ),
    },
    {
      type: "Linkedin",
      value: "Aldi Ahmad Fahrizi Ilmawan",
      action: (value: string) => (
        <Link
          href="https://www.linkedin.com/in/aldiahmadfahriziilmawan/"
          target="_blank"
          className="flex items-center pl-4 hover:underline hover:underline-offset-4"
        >
          {value} <ChevronRight />
        </Link>
      ),
    },
    {
      type: "Github",
      value: "@aldifhrent",
      action: (value: string) => (
        <Link
          href="https://github.com/aldifhrent"
          target="_blank"
          className="flex items-center pl-4 hover:underline hover:underline-offset-4"
        >
          {value} <ChevronRight />
        </Link>
      ),
    },
    
    
  ];
  return (
    <section className="mt-12" id="contact">
      <div className="container mx-auto">
        <h1 className="text-md font-bold p-[2px] rounded-xs  w-fit">
          contact me
        </h1>
        <div className="flex flex-col mt-4 gap-4">
          {contacts.map((contact, index) => (
            <div className="flex items-center" key={index}>
              <p className="flex-shrink-0">{contact.type}</p>
              <hr className="flex-grow border-gray-300 mx-2" />
              {contact.action(contact.value)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

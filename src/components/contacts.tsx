import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  return (
    <section className="mt-12">
      <div className="container">
        <h1 className="text-lg font-bold">Contacts</h1>
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex items-center">
            <p className="flex-shrink-0">Email</p>
            <hr className="flex-grow border-gray-300 mx-2" />
            <p className="pl-4">aldifahriziilmawan@gmail.com</p>
          </div>
          <div className="flex items-center">
            <p className="flex-shrink-0">Github</p>
            <hr className="flex-grow border-gray-300 mx-2" />
            <Link
              href="https://github.com/aldifhrent"
              className="flex items-center pl-4"
              target="_blank"
            >
              @aldifhrent <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

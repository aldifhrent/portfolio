import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <section className="mt-8 w-full">
      <h2 className="text-2xl font-bold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-4 items-center">
        <span className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          <FaHtml5 />
        </span>
        <span className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          <FaCss3 />
        </span>
        <span className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          <IoLogoJavascript />
        </span>
        <span className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          <FaReact />
        </span>
        <span className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          <RiNextjsFill />
        </span>
        <span className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          <RiTailwindCssFill />
        </span>
      </div>
    </section>
  );
}

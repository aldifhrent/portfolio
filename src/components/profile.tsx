import { FaLocationDot } from "react-icons/fa6";
import HyperText from "./magicui/hyper-text";
export default function Profile() {
  return (
    <section className="xl:py-12">
      <div className="container mx-auto">
        <HyperText
          className="text-lg md:text-2xl xl:text-4xl  text-center mt-2  dark:text-white font-extrabold "
          text="Aldi Ahmad Fahrizi Ilmawan"
          duration={500}
          animateOnLoad={true}
        />
        <p className="text-sm font-semibold">Front End Developer</p>

        <p className="mt-4 text-sm md:text-md">
          I&apos;m front-end developer who loves turning code into beautiful
          responsive website
        </p>
        <div className="flex flex-col md:flex-row  items-start gap-4 mt-4">
          <div className="flex gap-1 items-center">
            <FaLocationDot />
            Cilacap
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-green-300 w-2 h-2 rounded-full animate-blink"></div>
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

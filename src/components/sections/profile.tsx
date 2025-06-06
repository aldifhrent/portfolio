import { FaLocationDot } from "react-icons/fa6";
import HyperText from "../magicui/hyper-text";
import TopMenu from "../menu";

export default function Profile() {
  return (
    <section>
      <TopMenu />
      <div className="container mx-auto mt-8">
        <div className="flex flex-col">
          <HyperText
            className="text-4xl md:text-2xl xl:text-4xl text-center mt-2 dark:text-white font-extrabold"
            text="Aldi Ahmad Fahrizi Ilmawan"
            duration={900}
            animateOnLoad={true}
          />
          <p className="text-lg font-semibold  text-gray-800 dark:text-gray-100">
            Quality Assurance Engineer
          </p>

          <p className="mt-4 text-sm md:text-md text-justify max-w-2xl  text-gray-600 dark:text-gray-300">
            I catch bugs before they catch users.
          </p>

          <div className="flex flex-col md:flex-row  gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-green-600 size-2 rounded-full animate-blink"></div>
              <span>available for work</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-lg" />
              <span>Cilacap Selatan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

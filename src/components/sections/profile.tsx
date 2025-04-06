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
            className="text-4xl md:text-2xl xl:text-4xl  text-center mt-2  dark:text-white font-extrabold "
            text="Aldi Ahmad Fahrizi Ilmawan"
            duration={900}
            animateOnLoad={true}
          />
          <p className="text-lg font-semibold">Full Stack Web Developer</p>
          <p className="mt-4 text-sm md:text-md">
            Just a man who loves turning lines of code into stunning and
            functional websites.
          </p>
          <div className="flex flex-col md:flex-row  items-start gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="bg-green-300 size-2 rounded-full animate-blink"></div>
              <span>available for work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

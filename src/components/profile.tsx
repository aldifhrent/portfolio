import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-1/2 ">
      <Image
        src="https://avatars.githubusercontent.com/u/102520149?s=400&u=34357956c29fea3c51a46333551d2e5252d4e54f&v=4"
        alt="Github Image Profile"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mt-2  dark:text-white">
        Aldi Ahmad Fahrizi Ilmawan
      </h1>
      <p className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-sm mt-4 cursor-pointer font-semibold outline outline-2  outline-offset-2">
        Front End Developer
      </p>
      <div className="flex gap-5 mt-4">
        <Link
          href="https://instagram.com/aldifhrent"
          target="_blank"
          className="bg-black dark:bg-white size-8 flex items-center justify-center rounded-full "
        >
          <FaInstagram className="size-5 text-white dark:text-black" />
        </Link>
        <Link
          href="https://github.com/aldifhrent"
          target="_blank"
          className="bg-black dark:bg-white size-8 flex items-center justify-center rounded-full "
        >
          <FaGithub className="size-5 text-white dark:text-black" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/aldiahmadfahriziilmawan/"
          target="_blank"
          className="bg-black dark:bg-white size-8 flex items-center justify-center rounded-full "
        >
          <FaLinkedin className="size-5 text-white dark:text-black" />
        </Link>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const skills = [
  {
    image: "TS",
  },
];

const SkillsCard = () => {
  return "TS";
};

export function Skills() {
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:19s]">
            {/* {reviews.map((review) => (
              <SkillsCard key={review.username} {...review} />
            ))} */}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-[#121212]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-[#121212]"></div>
        </div>
      </div>
    </section>
  );
}

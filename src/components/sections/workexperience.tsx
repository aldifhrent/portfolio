import Link from "next/link";

export default function WorkExperience() {
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <Link href='/work' className="font-bold text-md hover:underline hover:underline-offset-4">work experience</Link>
        <div className="flex flex-col mt-4">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-md">
                Puskomedia Indonesia Kreatif
              </h1>
              <h2 className="text-sm">Web Developer Intern</h2>
            </div>
            <h3>Aug 2022 - Sep 2022</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

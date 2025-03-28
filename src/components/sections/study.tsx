import React from "react";
import StudyCard from "../study.card";

export const study = [
    {
        location: "Institut Teknologi Telkom Purwokerto",
        major: "Teknik Informatika",
        date: "August 2019 - March 2024"
    }
]

export default function Study() {
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h1 className="font-bold">education</h1>
          <div className="flex flex-col mt-4 gap-5">
            {study.map((study) => (
                <StudyCard location={study.location} major={study.major} date={study.date} key={study.location}/>
            ))}

        </div>
        </div>
      </div>
    </section>
  );
}

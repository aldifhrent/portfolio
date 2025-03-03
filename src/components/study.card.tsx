import React from 'react'

interface StudyCardProps {
    location: string;
    major: string;
    date: string;
}
export default function StudyCard({ location, major, date}: StudyCardProps) {
  return (
    <div className="flex justify-between">
    <div>
      <h1 className="font-bold text-md">
       {location}
      </h1>
      <h2 className="text-sm">{major}</h2>
    </div>
    <h3>{date}</h3>
  </div>
  )
}

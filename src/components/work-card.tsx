import { formatDateRange } from "@/lib/work-time";

interface WorkCardProps {
  place: string;
  role: string;
  startDate: string;
  endDate: string;
}

export default function WorkCard(props: WorkCardProps) {
  const dateRange = formatDateRange(props.startDate, props.endDate);
  return (
    <section className="flex justify-between">
      <div className="flex flex-col">
        <h1 className="text-md">{props.place}</h1>
        <h2 className="text-sm text-muted-foreground">{props.role}</h2>
      </div>
      <p>{dateRange}</p>
    </section>
  );
}

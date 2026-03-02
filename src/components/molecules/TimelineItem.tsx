import { formatDate } from "@/store/util";
import { TimelineHighlight } from "../atoms/TimelineHighlight";

interface TimelineItemProps {
  institution: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

export const TimelineItem = ({
  institution,
  role,
  description,
  startDate,
  endDate,
  isCurrent,
}: TimelineItemProps) => {
  const dateLabel = `${formatDate(startDate, false)} - ${formatDate(endDate, isCurrent)}`;
  return (
    <div className="flex flex-col gap-y-3">
      <p className="text-2xl text-brand-green2 font-semibold">{dateLabel}</p>
      <h3 className="text-2xl font-bold text-main-text uppercase">
        {institution}
      </h3>
      <TimelineHighlight text={role} />
      <p className="text-md text-zinc-300">{description}</p>
    </div>
  );
};

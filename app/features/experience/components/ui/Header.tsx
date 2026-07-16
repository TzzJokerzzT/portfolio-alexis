import { Briefcase } from "lucide-react";

interface HeaderProps {
  title: string;
  company: string;
  endDate: string | null;
  startDate: string;
}

export function Header({ title, company, endDate, startDate }: HeaderProps) {
  const present = endDate ? endDate : "Present";

  return (
    <div className="mb-5 flex flex-col items-center gap-3">
      <div className={`h-8 w-4 skew-x-[-10deg] bg-p5-red`} />
      <h3 className="text-lg font-black tracking-tight text-p5-black uppercase dark:text-white">
        {company} - {title}
      </h3>
      <span className="ml-auto flex items-center gap-2 font-mono text-xs text-gray-400 dark:text-gray-500">
        <Briefcase /> {startDate} - {present}
      </span>
    </div>
  );
}

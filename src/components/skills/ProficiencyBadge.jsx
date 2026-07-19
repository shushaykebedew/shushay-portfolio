import { PROFICIENCY_CONFIG } from "./constants";

export default function ProficiencyBadge({ proficiency }) {
  const config = PROFICIENCY_CONFIG[proficiency];
  const Icon = config.icon;

  const colorMap = {
    Expert: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    Advanced: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    Intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${colorMap[proficiency]}`}>
      <Icon className="w-3 h-3" aria-hidden="true" />
      {proficiency}
    </span>
  );
}

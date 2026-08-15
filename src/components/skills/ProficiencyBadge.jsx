import { PROFICIENCY_CONFIG } from "./constants";

export default function ProficiencyBadge({ proficiency }) {
  const config = PROFICIENCY_CONFIG[proficiency] || PROFICIENCY_CONFIG.Advanced;
  const Icon = config.icon;

  const colorMap = {
    Expert:
      "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20",
    Advanced:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20",
    Intermediate:
      "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 2xl:gap-1.5 px-2.5 2xl:px-3 py-0.5 2xl:py-1 rounded-full text-[11px] 2xl:text-xs font-semibold border backdrop-blur-md transition-all duration-300 ${
        colorMap[proficiency] || colorMap.Advanced
      }`}
    >
      <Icon className="w-3 h-3 2xl:w-3.5 2xl:h-3.5" aria-hidden="true" />
      {proficiency}
    </span>
  );
}

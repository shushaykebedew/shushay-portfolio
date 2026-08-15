import { motion } from "framer-motion";
import ProficiencyBadge from "./ProficiencyBadge";

const GRADIENT_MAP = {
  "from-blue-500 to-cyan-500": "linear-gradient(to right,#3b82f6,#06b6d4)",
  "from-blue-400 to-cyan-400": "linear-gradient(to right,#60a5fa,#22d3ee)",
  "from-emerald-500 to-teal-500": "linear-gradient(to right,#10b981,#14b8a6)",
  "from-emerald-400 to-teal-400": "linear-gradient(to right,#34d399,#2dd4bf)",
  "from-purple-500 to-pink-500": "linear-gradient(to right,#a855f7,#ec4899)",
  "from-purple-400 to-pink-400": "linear-gradient(to right,#c084fc,#f472b6)",
  "from-orange-500 to-red-500": "linear-gradient(to right,#f97316,#ef4444)",
  "from-orange-400 to-red-400": "linear-gradient(to right,#fb923c,#f87171)",
};

function ProgressBar({ level, skillIndex, gradient }) {
  return (
    <div className="relative w-full">
      <div className="w-full h-1.5 sm:h-2 2xl:h-2.5 rounded-full overflow-hidden bg-slate-200/60 dark:bg-slate-800/80 p-0.5">
        <motion.div
          className="h-full rounded-full relative overflow-hidden shadow-sm"
          style={{ background: gradient }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1], delay: skillIndex * 0.035 }}
        >
          {/* Shimmer line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export function SkillRowColored({ tab, name, level, proficiency, skillIndex }) {
  const gradient =
    GRADIENT_MAP[tab.color] ||
    GRADIENT_MAP[tab.darkColor] ||
    "linear-gradient(to right,#6366f1,#8b5cf6)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut", delay: skillIndex * 0.03 }}
      className="group p-2 sm:p-2.5 2xl:p-3 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors"
    >
      <div className="flex items-center justify-between mb-1.5 sm:mb-2 2xl:mb-2.5 gap-2 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-1.5 sm:gap-2.5 2xl:gap-3 flex-wrap min-w-0">
          <span className="text-xs sm:text-sm 2xl:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
            {name}
          </span>
          <ProficiencyBadge proficiency={proficiency} />
        </div>
        <span className="text-[11px] sm:text-xs 2xl:text-sm font-mono font-bold text-slate-500 dark:text-slate-400 flex-shrink-0 ml-auto">
          {level}%
        </span>
      </div>

      <ProgressBar level={level} skillIndex={skillIndex} gradient={gradient} />
    </motion.div>
  );
}

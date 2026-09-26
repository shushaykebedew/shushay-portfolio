import { motion } from "framer-motion";
import ProficiencyBadge from "./ProficiencyBadge";

const GRADIENT_MAP = {
  "from-blue-500 to-cyan-500": "linear-gradient(to right, #06b6d4, #3b82f6)",
  "from-blue-400 to-cyan-400": "linear-gradient(to right, #22d3ee, #60a5fa)",
  "from-emerald-500 to-teal-500": "linear-gradient(to right, #10b981, #06b6d4)",
  "from-emerald-400 to-teal-400": "linear-gradient(to right, #34d399, #22d3ee)",
  "from-violet-500 to-purple-500": "linear-gradient(to right, #8b5cf6, #06b6d4)",
  "from-violet-400 to-purple-400": "linear-gradient(to right, #a78bfa, #22d3ee)",
  "from-purple-500 to-pink-500": "linear-gradient(to right, #3b82f6, #10b981)",
  "from-orange-500 to-red-500": "linear-gradient(to right, #06b6d4, #10b981)",
};

function ProgressBar({ level, skillIndex, gradient }) {
  return (
    <div className="relative w-full">
      <div className="w-full h-2 2xl:h-2.5 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800/80 p-0.5 border border-slate-300/60 dark:border-slate-700/50">
        <motion.div
          className="h-full rounded-full relative overflow-hidden shadow-sm"
          style={{ background: gradient }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1], delay: skillIndex * 0.035 }}
        >
          {/* Shimmer line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export function SkillRowColored({ tab, name, level, proficiency, skillIndex }) {
  const gradient =
    GRADIENT_MAP[tab.color] ||
    "linear-gradient(to right, #06b6d4, #3b82f6)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut", delay: skillIndex * 0.03 }}
      className="group p-2.5 sm:p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-cyan-500/20"
    >
      <div className="flex items-center justify-between mb-2 gap-2 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2.5 flex-wrap min-w-0">
          <span className="text-xs sm:text-sm 2xl:text-base font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors truncate">
            {name}
          </span>
          <ProficiencyBadge proficiency={proficiency} />
        </div>
        <span className="text-[11px] sm:text-xs 2xl:text-sm font-mono font-black text-cyan-700 dark:text-cyan-400 flex-shrink-0 ml-auto">
          {level}%
        </span>
      </div>

      <ProgressBar level={level} skillIndex={skillIndex} gradient={gradient} />
    </motion.div>
  );
}

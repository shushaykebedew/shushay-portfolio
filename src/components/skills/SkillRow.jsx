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
    <div className="relative">
      <div className="w-full h-2 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: gradient }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.6, ease: "easeOut", delay: skillIndex * 0.03 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
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
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: skillIndex * 0.03 }}
      whileHover={{ x: 4 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {name}
          </span>
          <motion.div whileHover={{ scale: 1.05 }}>
            <ProficiencyBadge proficiency={proficiency} />
          </motion.div>
        </div>
        <motion.span
          className="text-xs font-bold px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: skillIndex * 0.03 + 0.2, duration: 0.2 }}
        >
          {level}%
        </motion.span>
      </div>

      <ProgressBar level={level} skillIndex={skillIndex} gradient={gradient} />
    </motion.div>
  );
}

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Server,
  Database,
  Brain,
  Star,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const TABS = [
  {
    id: "frontend",
    label: "Frontend",
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-400 to-cyan-400",
    iconBg: { light: "#E6F1FB", dark: "#0C447C33" },
    iconColor: { light: "#185FA5", dark: "#85B7EB" },
    skills: [
      { name: "HTML5 & CSS3", level: 92, proficiency: "Expert" },
      { name: "JavaScript", level: 88, proficiency: "Expert" },
      { name: "Next.js", level: 88, proficiency: "Expert" },
      { name: "React.js", level: 90, proficiency: "Expert" },
      { name: "Tailwind CSS", level: 94, proficiency: "Expert" },
      { name: "SvelteKit", level: 85, proficiency: "Advanced" },
      { name: "Svelte", level: 85, proficiency: "Advanced" },
      { name: "TypeScript", level: 86, proficiency: "Advanced" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    darkColor: "from-emerald-400 to-teal-400",
    iconBg: { light: "#E1F5EE", dark: "#08504133" },
    iconColor: { light: "#0F6E56", dark: "#5DCAA5" },
    skills: [
      { name: "Authentication", level: 82, proficiency: "Advanced" },
      { name: "Express.js", level: 83, proficiency: "Advanced" },
      { name: "Node.js", level: 85, proficiency: "Advanced" },
      { name: "REST APIs", level: 87, proficiency: "Advanced" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    title: "Databases & Tools",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-400 to-pink-400",
    iconBg: { light: "#EEEDFE", dark: "#3C348933" },
    iconColor: { light: "#534AB7", dark: "#AFA9EC" },
    skills: [
      { name: "Git & GitHub", level: 88, proficiency: "Expert" },
      { name: "MongoDB", level: 82, proficiency: "Advanced" },
      { name: "MySQL", level: 80, proficiency: "Advanced" },
      { name: "Docker", level: 75, proficiency: "Intermediate" },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    title: "AI/ML & Analytics",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    darkColor: "from-orange-400 to-red-400",
    iconBg: { light: "#FAECE7", dark: "#71281333" },
    iconColor: { light: "#993C1D", dark: "#F0997B" },
    skills: [
      { name: "Data analysis", level: 88, proficiency: "Expert" },
      { name: "AI fundamentals", level: 82, proficiency: "Advanced" },
      { name: "Machine learning", level: 84, proficiency: "Advanced" },
      { name: "Python", level: 85, proficiency: "Advanced" },
    ],
  },
];

const PROFICIENCY_CONFIG = {
  Expert: {
    icon: Star,
    light: { bg: "#FAEEDA", text: "#854F0B" },
    dark: { bg: "#41240244", text: "#FAC775" },
    dot: "#BA7517",
  },
  Advanced: {
    icon: TrendingUp,
    light: { bg: "#E1F5EE", text: "#0F6E56" },
    dark: { bg: "#04342C44", text: "#9FE1CB" },
    dot: "#1D9E75",
  },
  Intermediate: {
    icon: CheckCircle2,
    light: { bg: "#E6F1FB", text: "#185FA5" },
    dark: { bg: "#042C5344", text: "#85B7EB" },
    dot: "#378ADD",
  },
};

function ProficiencyBadge({ proficiency, theme }) {
  const config = PROFICIENCY_CONFIG[proficiency];
  const colors = theme === "dark" ? config.dark : config.light;
  const Icon = config.icon;
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <Icon className="w-3 h-3" />
      {proficiency}
    </span>
  );
}

function SkillRow({ name, level, proficiency, theme, skillIndex }) {
  const textColor = theme === "dark" ? "#f1f5f9" : "#0f172a";
  const subTextColor = theme === "dark" ? "#94a3b8" : "#64748b";
  const progressBg = theme === "dark" ? "#0f172a" : "#f1f5f9";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: skillIndex * 0.07 }}
      whileHover={{ x: 4 }}
      className="group/skill"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold" style={{ color: textColor }}>
            {name}
          </span>
          <motion.div whileHover={{ scale: 1.05 }}>
            <ProficiencyBadge proficiency={proficiency} theme={theme} />
          </motion.div>
        </div>
        <motion.span
          className="text-xs font-bold px-2 py-1 rounded-full"
          style={{ backgroundColor: progressBg, color: textColor }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: skillIndex * 0.07 + 0.5, duration: 0.3 }}
        >
          {level}%
        </motion.span>
      </div>

      <div className="relative">
        <div
          className="w-full h-2 rounded-full overflow-hidden shadow-inner"
          style={{ backgroundColor: progressBg }}
        >
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: skillIndex * 0.07,
            }}
          >
            {/* We use a CSS var trick via inline style since Tailwind gradient classes need the tab color */}
            <div className="absolute inset-0 gradient-fill" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
        <motion.div
          className="absolute top-0 h-2 w-0.5 bg-white rounded-full"
          initial={{ left: "0%" }}
          animate={{ left: `${level}%` }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: skillIndex * 0.07,
          }}
          style={{ transform: "translateX(-50%)" }}
        />
      </div>
    </motion.div>
  );
}

// Wrapper that injects gradient color into skill rows via a style tag
function SkillRowColored({ tab, theme, ...props }) {
  const gradClass = theme === "dark" ? tab.darkColor : tab.color;
  // Map Tailwind gradient class names to actual CSS for the fill div
  const gradMap = {
    "from-blue-500 to-cyan-500": "linear-gradient(to right,#3b82f6,#06b6d4)",
    "from-blue-400 to-cyan-400": "linear-gradient(to right,#60a5fa,#22d3ee)",
    "from-emerald-500 to-teal-500": "linear-gradient(to right,#10b981,#14b8a6)",
    "from-emerald-400 to-teal-400": "linear-gradient(to right,#34d399,#2dd4bf)",
    "from-purple-500 to-pink-500": "linear-gradient(to right,#a855f7,#ec4899)",
    "from-purple-400 to-pink-400": "linear-gradient(to right,#c084fc,#f472b6)",
    "from-orange-500 to-red-500": "linear-gradient(to right,#f97316,#ef4444)",
    "from-orange-400 to-red-400": "linear-gradient(to right,#fb923c,#f87171)",
  };
  const gradient =
    gradMap[gradClass] || "linear-gradient(to right,#6366f1,#8b5cf6)";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: props.skillIndex * 0.07,
      }}
      whileHover={{ x: 4 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-semibold"
            style={{ color: theme === "dark" ? "#f1f5f9" : "#0f172a" }}
          >
            {props.name}
          </span>
          <motion.div whileHover={{ scale: 1.05 }}>
            <ProficiencyBadge proficiency={props.proficiency} theme={theme} />
          </motion.div>
        </div>
        <motion.span
          className="text-xs font-bold px-2 py-1 rounded-full"
          style={{
            backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9",
            color: theme === "dark" ? "#f1f5f9" : "#0f172a",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: props.skillIndex * 0.07 + 0.5, duration: 0.3 }}
        >
          {props.level}%
        </motion.span>
      </div>

      <div className="relative">
        <div
          className="w-full h-2 rounded-full overflow-hidden shadow-inner"
          style={{ backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9" }}
        >
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{ background: gradient }}
            initial={{ width: 0 }}
            animate={{ width: `${props.level}%` }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: props.skillIndex * 0.07,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
        <motion.div
          className="absolute top-0 h-2 w-0.5 bg-white rounded-full"
          initial={{ left: "0%" }}
          animate={{ left: `${props.level}%` }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: props.skillIndex * 0.07,
          }}
          style={{ transform: "translateX(-50%)" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills({ theme = "light" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("frontend");

  const isDark = theme === "dark";
  const textColor = isDark ? "#f1f5f9" : "#0f172a";
  const subTextColor = isDark ? "#cbd5e1" : "#475569";
  const bgColor = isDark ? "#1e293b" : "#ffffff";
  const borderColor = isDark ? "#334155" : "#e2e8f0";
  const cardHoverBg = isDark ? "#0f172a" : "#f8fafc";

  const currentTab = TABS.find((t) => t.id === activeTab);
  const avg = Math.round(
    currentTab.skills.reduce((a, s) => a + s.level, 0) /
      currentTab.skills.length,
  );
  const uniqueProficiencies = [
    ...new Set(currentTab.skills.map((s) => s.proficiency)),
  ];

  return (
    <section id="skills" className="py-20 md:py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-3 font-bold"
              style={{ color: subTextColor }}
            >
              My Skills
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: textColor }}
            >
              Tools & Technologies
            </h2>
            <p
              className="text-base max-w-2xl mx-auto leading-relaxed font-medium"
              style={{ color: subTextColor }}
            >
              A comprehensive overview of my technical expertise across
              frontend, backend, databases, and emerging technologies with
              proficiency levels.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center gap-2 flex-wrap mb-8"
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-colors duration-200 cursor-pointer"
                style={{
                  backgroundColor: isActive
                    ? isDark
                      ? "#f1f5f9"
                      : "#0f172a"
                    : bgColor,
                  color: isActive
                    ? isDark
                      ? "#0f172a"
                      : "#ffffff"
                    : subTextColor,
                  borderColor: isActive
                    ? isDark
                      ? "#f1f5f9"
                      : "#0f172a"
                    : borderColor,
                }}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skill card — AnimatePresence swaps on tab change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className="relative p-6 rounded-2xl shadow-lg border-2 overflow-hidden transition-colors duration-300"
              style={{ backgroundColor: bgColor, borderColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = cardHoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = bgColor;
              }}
            >
              {/* Decorative blob */}
              <div
                className={`absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 blur-2xl bg-gradient-to-br ${
                  isDark ? currentTab.darkColor : currentTab.color
                } group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Card header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${
                      isDark ? currentTab.darkColor : currentTab.color
                    } shadow-md`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {(() => {
                      const Icon = currentTab.icon;
                      return <Icon className="w-5 h-5 text-white" />;
                    })()}
                  </motion.div>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: textColor }}
                    >
                      {currentTab.title}
                    </h3>
                    <p
                      className="text-xs font-medium mt-0.5"
                      style={{ color: subTextColor }}
                    >
                      {currentTab.skills.length} Technologies
                    </p>
                  </div>
                </div>
                <motion.span
                  className="text-xs font-bold px-3 py-1.5 rounded-full border-2"
                  style={{
                    borderColor,
                    color: subTextColor,
                    backgroundColor: bgColor,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Avg {avg}%
                </motion.span>
              </div>

              {/* Skills */}
              <div className="space-y-4 relative z-10">
                {currentTab.skills.map((skill, i) => (
                  <SkillRowColored
                    key={`${activeTab}-${skill.name}`}
                    tab={currentTab}
                    theme={theme}
                    skillIndex={i}
                    {...skill}
                  />
                ))}
              </div>

              {/* Footer */}
              <div
                className="mt-6 pt-4 border-t-2 border-dashed flex items-center justify-between text-xs font-medium opacity-60"
                style={{ borderColor }}
              >
                <span style={{ color: subTextColor }}>Avg. Proficiency</span>
                <motion.span
                  className="font-bold"
                  style={{ color: textColor }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {avg}%
                </motion.span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <motion.div
            className="inline-flex items-center gap-5 px-6 py-3 rounded-xl border-2"
            style={{ backgroundColor: bgColor, borderColor }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            {uniqueProficiencies.map((p, i) => {
              const Icon = PROFICIENCY_CONFIG[p].icon;
              const colors = isDark
                ? PROFICIENCY_CONFIG[p].dark
                : PROFICIENCY_CONFIG[p].light;
              return (
                <motion.div
                  key={p}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-4 h-4" style={{ color: colors.text }} />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: textColor }}
                  >
                    {p}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

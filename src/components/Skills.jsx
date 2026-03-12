import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Brain,
  Star,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-400 to-cyan-400",
    skills: [
      { name: "React.js", level: 90, proficiency: "Expert" },
      { name: "Next.js", level: 88, proficiency: "Expert" },
      { name: "TypeScript", level: 86, proficiency: "Advanced" },
      { name: "JavaScript", level: 88, proficiency: "Expert" },
      { name: "Tailwind CSS", level: 94, proficiency: "Expert" },
      { name: "HTML5 & CSS3", level: 92, proficiency: "Expert" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    darkColor: "from-emerald-400 to-teal-400",
    skills: [
      { name: "Node.js", level: 85, proficiency: "Advanced" },
      { name: "Express.js", level: 83, proficiency: "Advanced" },
      { name: "REST APIs", level: 87, proficiency: "Advanced" },
      { name: "Authentication", level: 82, proficiency: "Advanced" },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-400 to-pink-400",
    skills: [
      { name: "MongoDB", level: 82, proficiency: "Advanced" },
      { name: "MySQL", level: 80, proficiency: "Advanced" },
      { name: "Git & GitHub", level: 88, proficiency: "Expert" },
      { name: "Docker", level: 75, proficiency: "Intermediate" },
    ],
  },
  {
    title: "AI/ML & Analytics",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    darkColor: "from-orange-400 to-red-400",
    skills: [
      { name: "Machine Learning", level: 84, proficiency: "Advanced" },
      { name: "Data Analysis", level: 88, proficiency: "Expert" },
      { name: "Python", level: 85, proficiency: "Advanced" },
      { name: "AI Fundamentals", level: 82, proficiency: "Advanced" },
    ],
  },
];

const getProficiencyIcon = (proficiency) => {
  switch (proficiency) {
    case "Expert":
      return <Star className="w-4 h-4" />;
    case "Advanced":
      return <TrendingUp className="w-4 h-4" />;
    case "Intermediate":
      return <CheckCircle2 className="w-4 h-4" />;
    default:
      return <CheckCircle2 className="w-4 h-4" />;
  }
};

const getProficiencyColor = (proficiency, theme) => {
  const colors = {
    Expert: theme === "dark" ? "#fbbf24" : "#f59e0b",
    Advanced: theme === "dark" ? "#34d399" : "#10b981", 
    Intermediate: theme === "dark" ? "#60a5fa" : "#3b82f6"
  };
  return colors[proficiency] || colors.Intermediate;
};

export default function Skills({ theme }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const textColor = theme === "dark" ? "#f1f5f9" : "#0f172a";
  const subTextColor = theme === "dark" ? "#cbd5e1" : "#475569";
  const bgColor = theme === "dark" ? "#1e293b" : "#ffffff";
  const borderColor = theme === "dark" ? "#334155" : "#cbd5e1";
  const cardHoverBg = theme === "dark" ? "#0f172a" : "#f8fafc";
  const progressBg = theme === "dark" ? "#0f172a" : "#f1f5f9";

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="py-20 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
              className="text-base max-w-3xl mx-auto leading-relaxed font-medium"
              style={{ color: subTextColor }}
            >
              A comprehensive overview of my technical expertise across frontend, backend, 
              databases, and emerging technologies with proficiency levels.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillGroups.map(({ title, icon: Icon, color, darkColor, skills }, groupIndex) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Container */}
              <div
                className="relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-2 overflow-hidden"
                style={{
                  backgroundColor: bgColor,
                  borderColor: borderColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = cardHoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = bgColor;
                }}
              >
                {/* Background Gradient */}
                <div 
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-xl bg-gradient-to-br ${theme === "dark" ? darkColor : color} group-hover:opacity-20 transition-opacity duration-500`}
                />
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${theme === "dark" ? darkColor : color} shadow-md`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: textColor }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-xs font-medium mt-0.5"
                      style={{ color: subTextColor }}
                    >
                      {skills.length} Technologies
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4 relative z-10">
                  {skills.map(({ name, level, proficiency }, skillIndex) => (
                    <motion.div
                      key={name}
                      custom={skillIndex}
                      variants={skillItem}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="group/skill"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-sm font-semibold"
                            style={{ color: textColor }}
                          >
                            {name}
                          </span>
                          <motion.div 
                            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
                            style={{ 
                              backgroundColor: theme === "dark" ? "#334155" : "#e2e8f0",
                              color: getProficiencyColor(proficiency, theme)
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {getProficiencyIcon(proficiency)}
                            <span className="text-xs">{proficiency}</span>
                          </motion.div>
                        </div>
                        <motion.span
                          className="text-xs font-bold px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9",
                            color: textColor,
                          }}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: groupIndex * 0.2 + skillIndex * 0.1 + 0.5, duration: 0.3 }}
                        >
                          {level}%
                        </motion.span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div
                          className="w-full h-2 rounded-full overflow-hidden shadow-inner"
                          style={{ backgroundColor: progressBg }}
                        >
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${theme === "dark" ? darkColor : color} shadow-sm relative overflow-hidden`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              ease: "easeOut", 
                              delay: groupIndex * 0.2 + skillIndex * 0.1 
                            }}
                            whileHover={{ scale: 1.02 }}
                          >
                            {/* Shimmer Effect */}
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              initial={{ x: "-100%" }}
                              animate={{ x: "100%" }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                repeatDelay: 3,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                        </div>
                        
                        {/* Progress Indicator */}
                        <motion.div
                          className="absolute top-0 h-2 w-0.5 bg-white rounded-full shadow-md"
                          initial={{ left: "0%" }}
                          animate={isInView ? { left: `${level}%` } : { left: "0%" }}
                          transition={{ 
                            duration: 1.5, 
                            ease: "easeOut", 
                            delay: groupIndex * 0.2 + skillIndex * 0.1 
                          }}
                          style={{ transform: "translateX(-50%)" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Card Footer */}
                <div 
                  className={`mt-6 pt-4 border-t-2 border-dashed opacity-50`}
                  style={{ borderColor: borderColor }}
                >
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span style={{ color: subTextColor }}>
                      Avg. Proficiency
                    </span>
                    <motion.span 
                      className="font-bold"
                      style={{ color: textColor }}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: groupIndex * 0.2 + 1, duration: 0.5 }}
                    >
                      {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-6 py-3 rounded-xl border-2"
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#f8fafc",
              borderColor: borderColor,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {[
              { level: "Expert", icon: Star, color: getProficiencyColor("Expert", theme) },
              { level: "Advanced", icon: TrendingUp, color: getProficiencyColor("Advanced", theme) },
              { level: "Intermediate", icon: CheckCircle2, color: getProficiencyColor("Intermediate", theme) }
            ].map(({ level, icon: Icon, color }, index) => (
              <motion.div 
                key={level}
                className="flex items-center gap-1.5"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
                <span className="text-xs font-semibold" style={{ color: textColor }}>
                  {level}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TABS } from "./constants";
import { SkillRowColored } from "./SkillRow";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("frontend");

  const currentTab = TABS.find((t) => t.id === activeTab);
  const avg = Math.round(
    currentTab.skills.reduce((a, s) => a + s.level, 0) /
      currentTab.skills.length,
  );

  return (
    <section
      id="skills"
      className="py-20 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest mb-3 font-bold text-slate-500 dark:text-slate-400">
              My Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Tools & Technologies
            </h2>
            <p className="text-base max-w-2xl mx-auto leading-relaxed font-medium text-slate-600 dark:text-slate-300">
              A comprehensive overview of my technical expertise across
              frontend, backend, databases, and emerging technologies.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center gap-2 flex-wrap mb-8"
          role="tablist"
          aria-label="Skill categories"
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
                role="tab"
                aria-selected={isActive}
                aria-controls={`skillpanel-${tab.id}`}
                className={`relative flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isActive
                    ? "text-white dark:text-slate-900 border-slate-900 dark:border-slate-100"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTabBg"
                    className="absolute inset-0 rounded-full bg-slate-900 dark:bg-slate-100"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative w-4 h-4" aria-hidden="true" />
                <span className="relative">{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skill card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`skillpanel-${activeTab}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative p-6 sm:p-8 rounded-2xl shadow-lg border-2 overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 transition-colors duration-300">
              {/* Decorative blob */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 blur-2xl bg-gradient-to-br ${currentTab.color} dark:${currentTab.darkColor}`}
              />

              {/* Card header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${currentTab.color} shadow-md`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {(() => {
                      const Icon = currentTab.icon;
                      return (
                        <Icon
                          className="w-5 h-5 text-white"
                          aria-hidden="true"
                        />
                      );
                    })()}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {currentTab.title}
                    </h3>
                    <p className="text-xs font-medium mt-0.5 text-slate-500 dark:text-slate-400">
                      {currentTab.skills.length} Technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-5 relative z-10">
                {currentTab.skills.map((skill, i) => (
                  <SkillRowColored
                    key={`${activeTab}-${skill.name}`}
                    tab={currentTab}
                    skillIndex={i}
                    {...skill}
                  />
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Avg. Proficiency</span>
                <motion.span
                  className="font-bold text-slate-800 dark:text-slate-100"
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
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TABS } from "./constants";
import { SkillRowColored } from "./SkillRow";
import SectionHeader from "../ui/SectionHeader";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];
  const avg = Math.round(
    currentTab.skills.reduce((a, s) => a + s.level, 0) /
    currentTab.skills.length
  );

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="max-w-5xl 2xl:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <SectionHeader
          subtitle="My Skills"
          title={
            <>
              Tools & <span className="brand-gradient-text">Technologies</span>
            </>
          }
          description="A comprehensive overview of my technical expertise across frontend, backend, databases, and emerging technologies."
        />

        {/* Tab Controls */}
        <div
          className="flex justify-center gap-1.5 sm:gap-2.5 2xl:gap-3 flex-wrap mb-8 sm:mb-10 2xl:mb-14"
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
                className={`relative flex items-center gap-1.5 sm:gap-2 2xl:gap-2.5 text-xs sm:text-sm 2xl:text-base font-semibold px-3 sm:px-4 2xl:px-6 py-2 sm:py-2.5 2xl:py-3 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white shadow-lg shadow-indigo-500/20"
                    : "glass-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTabBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 flex-shrink-0" aria-hidden="true" />
                <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Skill Card Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`skillpanel-${activeTab}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative glass-card p-4 sm:p-6 md:p-8 2xl:p-12 rounded-2xl sm:rounded-3xl 2xl:rounded-4xl glow-hover overflow-hidden">
              {/* Decorative radial gradient in corner */}
              <div
                className={`absolute top-0 right-0 w-48 sm:w-64 2xl:w-96 h-48 sm:h-64 2xl:h-96 rounded-full opacity-20 dark:opacity-15 blur-3xl bg-gradient-to-br ${currentTab.color} pointer-events-none`}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 2xl:mb-10 relative z-10 gap-3">
                <div className="flex items-center gap-3 sm:gap-4 2xl:gap-5 min-w-0">
                  <motion.div
                    className={`p-2.5 sm:p-3.5 2xl:p-4 rounded-xl sm:rounded-2xl 2xl:rounded-3xl bg-gradient-to-br ${currentTab.color} text-white shadow-md flex-shrink-0`}
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {(() => {
                      const Icon = currentTab.icon;
                      return <Icon className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" aria-hidden="true" />;
                    })()}
                  </motion.div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold text-slate-900 dark:text-white truncate">
                      {currentTab.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs 2xl:text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      {currentTab.skills.length} Technologies
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end flex-shrink-0">
                  <span className="text-[10px] sm:text-[11px] 2xl:text-xs uppercase tracking-wider font-semibold text-slate-400">
                    Avg Level
                  </span>
                  <span className="text-base sm:text-lg 2xl:text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                    {avg}%
                  </span>
                </div>
              </div>

              {/* Skills List - 2 columns on 2xl screens */}
              <div className="space-y-2 sm:space-y-3 2xl:grid 2xl:grid-cols-2 2xl:gap-x-10 2xl:gap-y-3.5 2xl:space-y-0 relative z-10">
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
              <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400 relative z-10">
                <span>Proficiency scale: 0 - 100%</span>
                <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                  {currentTab.skills.length} skills listed
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

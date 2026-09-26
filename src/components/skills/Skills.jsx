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
    <section id="skills" aria-label="Skills and Technologies" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8">
        <SectionHeader
          subtitle="My Skills"
          title={
            <>
              Tools & <span className="brand-gradient-text">Technologies</span>
            </>
          }
          description="A comprehensive overview of my technical expertise across frontend architectures, backend systems, database modeling, and AI integrations."
        />

        {/* Tab Controls */}
        <div
          className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-8 sm:mb-10 2xl:mb-14"
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
                className={`relative flex items-center gap-2 text-xs sm:text-sm 2xl:text-base font-extrabold px-4 sm:px-5 2xl:px-6 py-2.5 2xl:py-3 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white shadow-lg shadow-cyan-500/25"
                    : "glass-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTabBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 w-4 h-4 2xl:w-5 2xl:h-5 flex-shrink-0" aria-hidden="true" />
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
            aria-label={`${currentTab.title} skills`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative glass-card p-5 sm:p-7 md:p-9 2xl:p-12 rounded-3xl 2xl:rounded-4xl glow-hover border border-slate-200 dark:border-cyan-500/20 overflow-hidden shadow-2xl">
              {/* Decorative radial gradient in corner */}
              <div
                className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full opacity-20 dark:opacity-25 blur-3xl bg-gradient-to-br from-cyan-500 to-emerald-500 pointer-events-none"
              />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 2xl:mb-10 relative z-10 gap-3">
                <div className="flex items-center gap-3.5 sm:gap-4.5 2xl:gap-5 min-w-0">
                  <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20 flex-shrink-0">
                    {(() => {
                      const Icon = currentTab.icon;
                      return <Icon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7" aria-hidden="true" />;
                    })()}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-black text-slate-900 dark:text-white truncate">
                      {currentTab.title}
                    </h3>
                    <p className="text-xs 2xl:text-sm font-bold text-cyan-700 dark:text-cyan-400 mt-0.5">
                      {currentTab.skills.length} Tech Stack Modules
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end flex-shrink-0">
                  <span className="text-[10px] sm:text-[11px] 2xl:text-xs uppercase tracking-wider font-extrabold text-slate-500 dark:text-slate-400">
                    Avg Proficiency
                  </span>
                  <span className="text-base sm:text-xl 2xl:text-2xl font-black font-mono text-cyan-700 dark:text-cyan-400">
                    {avg}%
                  </span>
                </div>
              </div>

              {/* Skills List - 2 columns on xl screens */}
              <div className="space-y-2 sm:space-y-3 xl:grid xl:grid-cols-2 xl:gap-x-10 xl:gap-y-4 xl:space-y-0 relative z-10">
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
              <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 relative z-10">
                <span>Proficiency scale: 0 - 100%</span>
                <span className="font-mono font-black text-cyan-700 dark:text-cyan-400">
                  {currentTab.skills.length} modules listed
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

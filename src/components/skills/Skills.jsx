import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TABS } from "./constants";
import SectionHeader from "../ui/SectionHeader";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

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
          description="A practical overview of the technologies I use to build and ship modern web applications, backend services, and data-driven products."
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
            <div className="relative glass-card p-5 sm:p-7 md:p-9 2xl:p-12 rounded-3xl glow-hover border border-slate-200 dark:border-cyan-500/20 overflow-hidden shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-7 relative z-10">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg">
                    {(() => { const Icon = currentTab.icon; return <Icon className="w-6 h-6" aria-hidden="true" />; })()}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">{currentTab.title}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">{currentTab.skills.length} technologies</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex rounded-full px-3 py-1.5 text-xs font-bold bg-cyan-50 text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-300">Core stack</span>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10" aria-label={`${currentTab.title} technologies`}>
                {currentTab.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.025 }}
                    className="inline-flex items-center rounded-xl border border-slate-200 bg-white/80 px-3.5 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
              <p className="mt-7 border-t border-slate-200 pt-4 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400 relative z-10">
                Technologies are grouped by practical use rather than self-assigned percentage ratings.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

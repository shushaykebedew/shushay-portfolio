import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TABS } from "./constants";
import SectionHeader from "../ui/SectionHeader";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const currentTab = TABS.find((tab) => tab.id === activeTab) || TABS[0];
  const Icon = currentTab.icon;

  return (
    <section id="skills" aria-label="Skills and Technologies" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8">
        <SectionHeader
          subtitle="Technical Skills"
          title={
            <>
              Tools & <span className="brand-gradient-text">Technologies</span>
            </>
          }
          description="Technologies and tools I use to design, build, test, and ship production web applications and data-driven solutions."
        />

        <div
          className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-8 sm:mb-10 2xl:mb-14"
          role="tablist"
          aria-label="Skill categories"
        >
          {TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                id={`skilltab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`skillpanel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 text-white border-transparent shadow-lg shadow-cyan-500/20"
                    : "glass-card text-slate-700 dark:text-slate-300 border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500/50"
                }`}
              >
                <TabIcon className="w-4 h-4" aria-hidden="true" />
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-slate-200 dark:bg-slate-800"}`}>
                  {tab.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`skillpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`skilltab-${activeTab}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="relative glass-card p-5 sm:p-7 md:p-9 rounded-3xl border border-slate-200 dark:border-cyan-500/20 shadow-xl overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">{currentTab.title}</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  {currentTab.skills.length} technologies and tools
                </p>
              </div>
            </div>

            <ul className="relative z-10 flex flex-wrap gap-2.5" aria-label={`${currentTab.title} technologies`}>
              {currentTab.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/60 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

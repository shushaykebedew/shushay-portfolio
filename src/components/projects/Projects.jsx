import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, PROJECT_CATEGORIES } from "./constants";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../ui/SectionHeader";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" aria-label="Featured Projects" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8">
        <SectionHeader
          subtitle="My Projects"
          title={
            <>
              Featured <span className="brand-gradient-text">Works</span>
            </>
          }
          description="A curated selection of client projects, full-stack web applications, and AI platforms built for real-world impact."
        />

        {/* Category Filter Tabs */}
        <div
          className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-6 sm:mb-8 2xl:mb-10"
          role="tablist"
          aria-label="Project categories"
        >
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                role="tab"
                aria-selected={isActive}
                className={`relative flex items-center gap-2 text-xs sm:text-sm 2xl:text-base font-extrabold px-4 sm:px-5.5 2xl:px-6 py-2.5 2xl:py-3 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white shadow-lg shadow-cyan-500/25"
                    : "glass-card text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProjCategoryBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{cat.label}</span>
                <span
                  className={`relative z-10 text-[10px] sm:text-xs font-mono font-black px-2 py-0.5 rounded-full min-w-[22px] text-center leading-none transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 border border-slate-300 dark:border-cyan-500/20"
                  }`}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Showing X of Y indicator */}
        {activeCategory !== "all" && (
          <motion.p
            key={activeCategory}
            className="text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-extrabold mb-8 sm:mb-10 2xl:mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Showing{" "}
            <span className="font-black text-cyan-700 dark:text-cyan-400">
              {filtered.length}
            </span>{" "}
            of{" "}
            <span className="font-black text-slate-900 dark:text-white">
              {projects.length}
            </span>{" "}
            projects
          </motion.p>
        )}

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 2xl:gap-10 items-stretch"
          >
            {filtered.length > 0 ? (
              filtered.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                  isFeatured={index === 0 && activeCategory === "all"}
                />
              ))
            ) : (
              <div className="col-span-2 text-center py-20 text-slate-500 font-bold">
                <p className="text-lg">No projects in this category yet.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

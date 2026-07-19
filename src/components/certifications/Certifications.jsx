import { Award, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { certifications } from "./constants";

export default function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const courseVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="certifications" className="py-20 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-3 font-semibold text-slate-500 dark:text-slate-400">
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Professional Development
          </h2>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {certifications.map(({ provider, courses }) => (
            <motion.div
              key={provider}
              variants={itemVariants}
              className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              {/* Provider Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-50 dark:bg-indigo-950/50 flex-shrink-0">
                  <Award size={24} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {provider}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {courses.length}{" "}
                    {courses.length === 1 ? "Course" : "Courses"} Completed
                  </p>
                </div>
              </div>

              {/* Courses List */}
              <div className="space-y-4">
                {courses.map(({ title, year, description, link }, courseIndex) => (
                  <motion.div
                    key={title}
                    custom={courseIndex}
                    variants={courseVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-white leading-snug">
                        {title}
                      </h4>
                      {year && (
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 flex-shrink-0">
                          <Calendar size={13} aria-hidden="true" />
                          <span className="whitespace-nowrap">{year}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed mb-3 text-slate-600 dark:text-slate-400">
                      {description}
                    </p>
                    {link && (
                      <div className="flex justify-end">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-indigo-400 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-transparent"
                          aria-label={`View ${title} certificate`}
                        >
                          <ExternalLink size={12} strokeWidth={2} aria-hidden="true" />
                          View Certificate
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

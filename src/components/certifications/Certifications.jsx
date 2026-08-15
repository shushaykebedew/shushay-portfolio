import { Award, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { certifications } from "./constants";
import SectionHeader from "../ui/SectionHeader";

export default function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const providerIconClass = "w-4 h-4 sm:w-5 sm:h-5";
  const metaIconClass = "w-3 h-3 flex-shrink-0";

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <SectionHeader
          subtitle="Certifications"
          title={
            <>
              Continuous <span className="brand-gradient-text">Learning</span>
            </>
          }
          description="Verified credentials in AI, machine learning, mobile development, cybersecurity, and software fundamentals."
        />

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 2xl:gap-10 items-stretch"
        >
          {certifications.map(({ provider, courses }) => (
            <motion.div
              key={provider}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-card p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl glow-hover flex flex-col h-full"
            >
              {/* Provider Header */}
              <div className="flex items-center gap-3 2xl:gap-4 mb-5 2xl:mb-6 pb-3.5 2xl:pb-4 border-b border-slate-200/50 dark:border-slate-800/80">
                <div className="w-10 h-10 sm:w-11 sm:h-11 2xl:w-13 2xl:h-13 rounded-xl sm:rounded-2xl 2xl:rounded-3xl flex items-center justify-center bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-slate-900 dark:text-white">
                    {provider}
                  </h3>
                  <p className="text-[11px] sm:text-xs 2xl:text-sm font-medium text-slate-500 dark:text-slate-400">
                    {courses.length} {courses.length === 1 ? "Credential" : "Credentials"}
                  </p>
                </div>
              </div>

              {/* Courses List */}
              <div className="space-y-3 2xl:space-y-4 flex-1 flex flex-col">
                {courses.map(({ title, year, description, link }) => (
                  <div
                    key={title}
                    className="p-3.5 sm:p-4 2xl:p-5 rounded-xl sm:rounded-2xl 2xl:rounded-3xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/40 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-1.5 mb-1 2xl:mb-2">
                        <h4 className="font-bold text-xs sm:text-sm 2xl:text-base text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                          {title}
                        </h4>
                        {year && (
                          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] 2xl:text-xs font-mono text-slate-400 flex-shrink-0">
                            <Calendar className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 flex-shrink-0" aria-hidden="true" />
                            <span>{year}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-[11px] sm:text-xs 2xl:text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-2.5 2xl:mb-3.5">
                        {description}
                      </p>
                    </div>

                    {link && (
                      <div className="flex justify-end pt-1">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs 2xl:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors focus:outline-none"
                          aria-label={`View ${title} certificate`}
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 flex-shrink-0" aria-hidden="true" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

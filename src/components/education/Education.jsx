import { GraduationCap, Calendar, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import { education } from "./constants";
import SectionHeader from "../ui/SectionHeader";

export default function Education() {
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
    }),
  };

  const headerIconClass = "w-5 h-5 sm:w-6 sm:h-6";
  const metaIconClass = "w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0";
  const detailIconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0";

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <SectionHeader
          subtitle="Education"
          title={
            <>
              Academic <span className="brand-gradient-text">Background</span>
            </>
          }
          description="Formal foundation in Information Technology and Business Management."
        />

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 2xl:gap-10 items-stretch">
          {education.map(({ degree, institute, year, details }, index) => (
            <motion.div
              key={degree}
              className="glass-card p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl glow-hover flex flex-col justify-between"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-start gap-3.5 sm:gap-4 2xl:gap-5 mb-5 sm:mb-6 2xl:mb-8">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 2xl:w-16 2xl:h-16 rounded-xl sm:rounded-2xl 2xl:rounded-3xl flex items-center justify-center flex-shrink-0 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                      {degree}
                    </h3>

                    {/* Institute */}
                    <p className="text-xs sm:text-sm 2xl:text-base font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                      {institute}
                    </p>

                    {/* Year on New Line */}
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs 2xl:text-sm font-mono text-slate-500 dark:text-slate-400 mt-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" aria-hidden="true" />
                      <span>{year}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-3.5 sm:p-4 2xl:p-6 rounded-xl sm:rounded-2xl 2xl:rounded-3xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/40 flex items-start gap-2.5 sm:gap-3 2xl:gap-4">
                  <CircleCheck
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-indigo-500 dark:text-indigo-400 mt-0.5 2xl:mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-xs sm:text-sm 2xl:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, Building, Calendar, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import { education } from "./constants";

export default function Education() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const headerIconClass = "w-6 h-6 sm:w-7 sm:h-7";
  const metaIconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4";
  const detailIconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4";

  return (
    <section
      id="education"
      className="py-20 md:py-24 transition-colors duration-300 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-3 font-semibold text-slate-500 dark:text-slate-400">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Academic Background
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map(({ degree, institute, year, details }, index) => (
            <motion.div
              key={degree}
              className="flex flex-col gap-5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Header with Icon */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-50 dark:bg-blue-950/50">
                  <GraduationCap
                    className={`${headerIconClass} text-blue-600 dark:text-blue-400`}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {degree}
                  </h3>

                  {/* Institute */}
                  <div className="flex items-center gap-3 mt-1.5">
                    <p className="text-base font-bold text-blue-700 dark:text-blue-400">
                      {institute}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-1.5">
                    <Calendar
                      className={`${metaIconClass} text-slate-400 dark:text-slate-500 flex-shrink-0`}
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <CircleCheck
                  className={`${detailIconClass} text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0`}
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

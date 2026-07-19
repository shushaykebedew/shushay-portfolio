import { Briefcase, CircleCheck, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { experience } from "./constants";

export default function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.8, ease: "easeOut" },
    }),
  };

  const headerIconClass = "w-4 h-4 sm:w-5 sm:h-5";
  const metaIconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4";
  const detailIconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4";

  return (
    <section
      id="experience"
      className="py-20 md:py-24 transition-colors duration-300 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-widest mb-3 font-semibold text-slate-500 dark:text-slate-400">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Professional Background
          </h2>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map(({ role, company, year, details }, index) => (
            <motion.div
              key={role + company}
              className="flex flex-col gap-5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Header with Icon */}
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm bg-indigo-50 dark:bg-indigo-950/50"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Briefcase
                    className={`${headerIconClass} text-indigo-600 dark:text-indigo-400`}
                    aria-hidden="true"
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
                    {role}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold mt-1">
                    {company}
                  </p>

                  <div className="flex items-center gap-3 mt-1.5">
                    <Calendar
                      className={`${metaIconClass} text-slate-400 mt-1 dark:text-slate-500 flex-shrink-0`}
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      {year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                {Array.isArray(details) ? (
                  details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CircleCheck
                        className={`${detailIconClass} mt-1.5 flex-shrink-0 text-indigo-500 dark:text-indigo-400`}
                        aria-hidden="true"
                      />
                      <p className="text-sm leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start gap-3">
                    <CircleCheck
                      className={`${detailIconClass} mt-1.5 flex-shrink-0 text-indigo-500 dark:text-indigo-400`}
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                      {details}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

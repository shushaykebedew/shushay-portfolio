import { Briefcase } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { experience } from "./constants";

export default function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="experience"
      className="py-20 md:py-24 transition-colors duration-300 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-3 font-semibold text-slate-500 dark:text-slate-400">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Professional Background
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map(({ role, company, year, details }, index) => (
            <motion.div
              key={role + company}
              className="flex flex-col gap-5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Header with Icon */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm bg-indigo-50 dark:bg-indigo-950/50">
                  <Briefcase size={20} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">
                    {role}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold mt-1">
                    {company}
                  </p>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {year}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                {Array.isArray(details) ? (
                  details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle
                        size={18}
                        className="mt-1.5 flex-shrink-0 text-indigo-500 dark:text-indigo-400"
                        aria-hidden="true"
                      />
                      <p className="text-sm leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start gap-3">
                    <FaCheckCircle
                      size={18}
                      className="mt-1.5 flex-shrink-0 text-indigo-500 dark:text-indigo-400"
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

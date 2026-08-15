import { Briefcase, CircleCheck, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { experience } from "./constants";
import SectionHeader from "../ui/SectionHeader";

export default function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
    }),
  };

  const headerIconClass = "w-4 h-4 sm:w-5 sm:h-5";
  const metaIconClass = "w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0";
  const detailIconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0";

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="max-w-5xl 2xl:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <SectionHeader
          subtitle="Experience"
          title={
            <>
              Professional <span className="brand-gradient-text">Journey</span>
            </>
          }
          description="My career timeline delivering impactful solutions in fast-paced software engineering roles."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 xs:pl-8 sm:pl-10 2xl:pl-14 space-y-6 sm:space-y-10 2xl:space-y-12 before:absolute before:left-2 xs:before:left-2.5 sm:before:left-3 2xl:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-pink-500">
          {experience.map(({ role, company, year, details }, index) => (
            <motion.div
              key={role + company}
              className="relative group"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[29px] xs:-left-[31px] sm:-left-[37px] 2xl:-left-[47px] top-5 sm:top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 rounded-full bg-slate-900 border-2 border-indigo-500 shadow-md group-hover:scale-125 group-hover:border-fuchsia-400 transition-all duration-300 flex items-center justify-center">
                <span className="w-1 h-1 2xl:w-1.5 2xl:h-1.5 rounded-full bg-indigo-400" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-4 sm:p-6 md:p-7 2xl:p-9 rounded-2xl sm:rounded-3xl 2xl:rounded-4xl glow-hover relative overflow-hidden">
                {/* Header with Role & Company and Aligned Year */}
                <div className="flex items-start gap-3.5 sm:gap-4 2xl:gap-5 mb-4 sm:mb-6 2xl:mb-8 pb-3.5 sm:pb-4 2xl:pb-6 border-b border-slate-200/50 dark:border-slate-800/80">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-xl sm:rounded-2xl 2xl:rounded-3xl flex items-center justify-center flex-shrink-0 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 min-w-0">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                        {role}
                      </h3>
                      <p className="text-xs sm:text-sm 2xl:text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 2xl:mt-1">
                        {company}
                      </p>
                    </div>

                    {/* Year Pill — Aligned with title and company */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 2xl:px-4 py-1 2xl:py-1.5 rounded-full text-[11px] sm:text-xs 2xl:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50 self-start sm:self-center flex-shrink-0">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" aria-hidden="true" />
                      <span>{year}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 sm:space-y-2.5 2xl:space-y-3.5">
                  {Array.isArray(details) ? (
                    details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 sm:gap-2.5 2xl:gap-3 text-xs sm:text-sm 2xl:text-base leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <CircleCheck
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 flex-shrink-0 mt-0.5 text-indigo-500 dark:text-indigo-400"
                          aria-hidden="true"
                        />
                        <span>{detail}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start gap-2 sm:gap-2.5 2xl:gap-3 text-xs sm:text-sm 2xl:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                      <CircleCheck
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 flex-shrink-0 mt-0.5 text-indigo-500 dark:text-indigo-400"
                        aria-hidden="true"
                      />
                      <span>{details}</span>
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

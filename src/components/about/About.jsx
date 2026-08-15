import AboutImg from "../../assets/profile.png";
import { CircleCheck, Sparkles, Code, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const STATS = [
  { label: "Years Experience", value: "2+", icon: Briefcase },
  { label: "Projects Built", value: "8+", icon: Code },
  { label: "Certifications", value: "8+", icon: Award },
];

export default function About() {
  const iconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4";

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <SectionHeader
          subtitle="About Me"
          title={
            <>
              Who I <span className="brand-gradient-text">Am</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 2xl:gap-24 items-center">
          {/* Image & Stats Column */}
          <motion.div
            className="lg:col-span-5 2xl:col-span-5 flex flex-col items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative group">
              {/* Animated decorative gradient glow backdrop */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-30 dark:opacity-40 blur-xl group-hover:opacity-60 transition duration-700 animate-glow-pulse" />

              <motion.div
                className="relative w-52 h-52 xs:w-60 xs:h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 rounded-full p-2 sm:p-2.5 2xl:p-3 glass-card-strong flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 ring-2 ring-indigo-500/20 dark:ring-indigo-400/30">
                  <img
                    src={AboutImg}
                    alt="Portrait of Shushay Kebedew"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition duration-500"
                    style={{ transform: "scale(1.15) translateY(-6%)" }}
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl flex items-center gap-1.5 sm:gap-2 shadow-xl border border-indigo-500/30"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 animate-spin-slow flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                  Full Stack Engineer
                </span>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 2xl:gap-5 w-full mt-8 sm:mt-10 2xl:mt-12">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="glass-card p-2.5 sm:p-3.5 2xl:p-5 rounded-xl sm:rounded-2xl 2xl:rounded-3xl text-center flex flex-col items-center justify-center glow-hover"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-6 2xl:h-6 text-indigo-500 mb-1 2xl:mb-2" />
                    <span className="text-base sm:text-xl 2xl:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {stat.value}
                    </span>
                    <span className="text-[9px] xs:text-[10px] sm:text-xs 2xl:text-sm text-slate-500 dark:text-slate-400 font-medium leading-tight mt-0.5">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="lg:col-span-7 2xl:col-span-7 space-y-4 sm:space-y-6 2xl:space-y-8"
            initial={{ x: 25, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="space-y-3 sm:space-y-4 2xl:space-y-5 text-slate-600 dark:text-slate-300">
              <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl leading-relaxed font-medium">
                I'm{" "}
                <strong className="text-slate-900 dark:text-white font-bold">
                  Shushay Kebedew
                </strong>
                , a dedicated Full Stack Developer with deep expertise in crafting
                modern, responsive, and scalable web applications. I specialize in
                React, Next.js, Node.js, and database ecosystems, bringing ideas to
                life with clean architecture and exceptional attention to detail.
              </p>

              <p className="leading-relaxed text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400">
                My approach unites engineering precision with pragmatic business
                thinking. I thrive in translating complex technical requirements
                into frictionless digital products that are fast, accessible, and
                maintainable.
              </p>
            </div>

            {/* Expertise Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 2xl:gap-6 pt-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardContainerVariants}
            >
              <div className="glass-card p-4 sm:p-5 2xl:p-7 rounded-2xl 2xl:rounded-3xl glow-hover">
                <h3 className="font-bold mb-2.5 sm:mb-3 2xl:mb-4 text-sm sm:text-base 2xl:text-lg text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                  <span className="w-2 h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-indigo-500" />
                  Frontend Architecture
                </h3>
                <ul className="space-y-2 2xl:space-y-3 text-xs sm:text-sm 2xl:text-base font-medium text-slate-600 dark:text-slate-300">
                  {[
                    "React & Next.js Ecosystem",
                    "Pixel-Perfect Responsive UI/UX",
                    "TypeScript, ESNext & State Management",
                  ].map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2 2xl:gap-3"
                      variants={cardItemVariants}
                    >
                      <CircleCheck
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-4 sm:p-5 2xl:p-7 rounded-2xl 2xl:rounded-3xl glow-hover">
                <h3 className="font-bold mb-2.5 sm:mb-3 2xl:mb-4 text-sm sm:text-base 2xl:text-lg text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <span className="w-2 h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-purple-500" />
                  Backend & Cloud Data
                </h3>
                <ul className="space-y-2 2xl:space-y-3 text-xs sm:text-sm 2xl:text-base font-medium text-slate-600 dark:text-slate-300">
                  {[
                    "Robust RESTful APIs & Microservices",
                    "Database Modeling (MongoDB, SQL)",
                    "Authentication, JWT & Cloud Deployment",
                  ].map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2 2xl:gap-3"
                      variants={cardItemVariants}
                    >
                      <CircleCheck
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-purple-500 dark:text-purple-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Soft Skills Banner */}
            <motion.div
              className="glass-card p-4 sm:p-5 2xl:p-7 rounded-2xl 2xl:rounded-3xl border-l-4 border-l-amber-500 dark:border-l-amber-400"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <h4 className="font-bold mb-2 2xl:mb-3 text-xs sm:text-sm 2xl:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-amber-500 flex-shrink-0" />
                Core Strengths & Mindset
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 2xl:gap-6 text-xs sm:text-sm 2xl:text-base text-slate-600 dark:text-slate-400">
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5 font-semibold">
                    Problem Solving
                  </strong>
                  Breaking down ambiguous problems into clean, modular solutions.
                </div>
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5 font-semibold">
                    Agile Collaboration
                  </strong>
                  Clear communication, code reviews, and high ownership of outcomes.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

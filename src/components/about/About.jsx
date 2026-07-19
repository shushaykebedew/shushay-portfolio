import AboutImg from "../../assets/profile.png";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  const iconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4";

  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-2 border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-800">
              <img
                src={AboutImg}
                alt="Portrait of Shushay Kebedew"
                className="w-full h-full object-cover"
                style={{ transform: "scale(1.2) translateY(-10%)" }}
                loading="lazy"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/20 dark:border-indigo-400/20 scale-110 -z-10" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-widest mb-3 font-semibold text-slate-500 dark:text-slate-400">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            Who I Am
          </h2>
          <div className="space-y-5 text-slate-600 dark:text-slate-300">
            <p className="text-base sm:text-md leading-relaxed font-medium">
              I'm{" "}
              <strong className="text-slate-900 dark:text-white font-bold">
                Shushay Kebedew
              </strong>
              , a passionate Full Stack Developer with expertise in building
              modern, scalable web applications. I specialize in React, Next.js,
              Node.js, and database technologies, delivering complete solutions
              from concept to deployment.
            </p>

            <p className="leading-relaxed">
              My approach combines strong technical skills with business
              understanding, enabling me to create applications that not only
              function flawlessly but also drive real value. I excel at
              translating complex requirements into clean, maintainable code and
              user-friendly interfaces.
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardContainerVariants}
              whileHover={{ scale: 1.015, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div>
                <h3 className="font-bold mb-4 text-lg text-indigo-700 dark:text-blue-400">
                  Frontend Expertise
                </h3>
                <ul className="space-y-3 text-sm font-medium">
                  {[
                    "React & Next.js Apps",
                    "Responsive UI/UX",
                    "TypeScript & ES6+",
                  ].map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      variants={cardItemVariants}
                    >
                      <CircleCheck
                        className={`${iconClass} mt-0.5 text-indigo-500 dark:text-blue-400 flex-shrink-0`}
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-lg text-purple-700 dark:text-purple-400">
                  Backend & Database
                </h3>
                <ul className="space-y-3 text-sm font-medium">
                  {[
                    "RESTful APIs",
                    "Database Design",
                    "Server Architecture",
                  ].map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      variants={cardItemVariants}
                    >
                      <CircleCheck
                        className={`${iconClass} text-purple-500 dark:text-purple-400 mt-0.5 flex-shrink-0`}
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Soft Skills Section */}
            <motion.div
              className="mt-8 p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardContainerVariants}
              whileHover={{ scale: 1.015, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className="font-bold mb-5 text-lg text-amber-600 dark:text-amber-400">
                Core Strengths & Approach
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    skill: "Problem-Solving",
                    desc: "Breaking complex challenges into manageable solutions.",
                  },
                  {
                    skill: "Team Collaboration",
                    desc: "Effective communication in cross-functional teams.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={cardItemVariants}
                  >
                    <CircleCheck
                      className={`${iconClass} text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0`}
                      aria-hidden="true"
                    />
                    <div>
                      <span className="block font-semibold text-base text-slate-900 dark:text-white mb-1">
                        {item.skill}
                      </span>
                      <span className="block text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.desc}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import AboutImg from "../assets/profile.png";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function About({ theme }) {
  const textColor = theme === "dark" ? "#f1f5f9" : "#0f172a";
  const subTextColor = theme === "dark" ? "#cbd5e1" : "#475569";
  const eyebrowColor = theme === "dark" ? "#94a3b8" : "#64748b";
  const borderColor = theme === "dark" ? "#334155" : "#cbd5e1";
  const iconColor = theme === "dark" ? "#60a5fa" : "#1e40af";

  const skills = [
    "Building end-to-end web applications with modern tech stacks.",
    "Designing and implementing RESTful APIs and backend systems.",
    "Database architecture, optimization, and integration.",
    "Writing clean, maintainable, and scalable code.",
  ];

  // Variants for skill items
  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5 + i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div
            className="w-56 h-56 rounded-full border shadow-md flex items-center justify-center overflow-hidden"
            style={{ borderColor }}
          >
            <img
              src={AboutImg}
              alt="Shushay Kebedew - Full Stack Developer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            className="text-sm text-center uppercase tracking-widest mb-2"
            style={{ color: eyebrowColor }}
          >
            About Me
          </p>
          <h2
            className="text-2xl text-center sm:text-3xl font-bold mb-6"
            style={{ color: textColor }}
          >
            Who I Am
          </h2>
          <div className="space-y-6" style={{ color: subTextColor }}>
            <p className="text-lg leading-relaxed font-medium">
              I'm <strong style={{ color: textColor }}>Shushay Kebedew</strong>, a passionate Full Stack Developer 
              with expertise in building modern, scalable web applications. I specialize 
              in React, Next.js, Node.js, and database technologies, delivering complete 
              solutions from concept to deployment.
            </p>

            <p className="leading-relaxed">
              My approach combines strong technical skills with business understanding, 
              enabling me to create applications that not only function flawlessly but 
              also drive real value. I excel at translating complex requirements into 
              clean, maintainable code and user-friendly interfaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 p-6 rounded-2xl" style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#f8fafc",
              border: `1px solid ${borderColor}`
            }}>
              <div>
                <h4 className="font-bold mb-3 text-lg" style={{ 
                  color: theme === "dark" ? "#60a5fa" : "#1e40af" 
                }}>Frontend Expertise</h4>
                <ul className="space-y-2 text-sm">
                  {["React & Next.js Applications", "Responsive UI/UX Design", "Modern JavaScript & TypeScript"].map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      custom={index}
                      variants={skillVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <CheckCircle size={18} color={iconColor} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span style={{ color: subTextColor }}>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-lg" style={{ 
                  color: theme === "dark" ? "#a855f7" : "#7c3aed" 
                }}>Backend & Database</h4>
                <ul className="space-y-2 text-sm">
                  {["RESTful API Development", "Database Design & Optimization", "Server-side Architecture"].map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      custom={index + 3}
                      variants={skillVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <CheckCircle size={18} color={iconColor} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span style={{ color: subTextColor }}>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="my-8 p-6 rounded-2xl" style={{
              backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9",
              border: `1px solid ${borderColor}`
            }}>
              <h4 className="font-bold mb-4 text-lg" style={{ 
                color: theme === "dark" ? "#fbbf24" : "#f59e0b" 
              }}>Core Strengths & Approach</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {[
                    { skill: "Problem-Solving", desc: "Breaking complex challenges into manageable solutions" },
                    { skill: "Team Collaboration", desc: "Effective communication in cross-functional teams" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      custom={index + 6}
                      variants={skillVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <CheckCircle size={18} color={iconColor} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <span className="font-semibold text-sm" style={{ color: textColor }}>{item.skill}</span>
                        <p className="text-xs mt-1" style={{ color: subTextColor }}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { skill: "Continuous Learning", desc: "Staying current with emerging technologies" },
                    { skill: "Quality Focus", desc: "Writing clean, maintainable, and scalable code" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      custom={index + 8}
                      variants={skillVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <CheckCircle size={18} color={iconColor} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <span className="font-semibold text-sm" style={{ color: textColor }}>{item.skill}</span>
                        <p className="text-xs mt-1" style={{ color: subTextColor }}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <p className="leading-relaxed text-lg">
              Ready to collaborate on your next project?{" "}
              <a
                href="#contact"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:underline font-bold transition-all duration-300 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 rounded px-1"
                aria-label="Navigate to contact section"
              >
                Let's build something amazing together!
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

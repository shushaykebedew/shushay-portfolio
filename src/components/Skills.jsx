import React from "react";
import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiPython,
  DiMysql,
  DiMongodb,
} from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: DiHtml5, color: "text-orange-600" },
  { name: "CSS", icon: DiCss3, color: "text-blue-600" },
  { name: "JavaScript", icon: DiJavascript1, color: "text-yellow-600" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-700" },
  { name: "React", icon: DiReact, color: "text-cyan-600" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-teal-600" },
  { name: "Node.js", icon: DiNodejsSmall, color: "text-green-600" },
  { name: "MongoDB", icon: DiMongodb, color: "text-green-700" },
  { name: "MySQL", icon: DiMysql, color: "text-blue-700" },
  { name: "Git/GitHub", icon: DiGit, color: "text-yellow-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-600" },
  { name: "Python", icon: DiPython, color: "text-cyan-600" },
];

export default function Skills({ theme }) {
  const textColor = theme === "dark" ? "#f9fafb" : "#111827";
  const bgColor = theme === "dark" ? "#0f172a" : "#ffffff";
  const borderColor = theme === "dark" ? "#1e293b" : "#e5e7eb";

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm uppercase tracking-widest mb-2"
            style={{ color: theme === "dark" ? "#9ca3af" : "#6b7280" }}
          >
            My Skills
          </p>
          <h2 className="text-4xl font-bold" style={{ color: textColor }}>
            Tools & Technologies
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              variants={item}
              className="group  rounded-xl p-5
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-lg
                             bg-gray-100 dark:bg-gray-800
                             w-10 h-10"
                >
                  <Icon className={`${color} w-6 h-6`} />
                </div>

                <span
                  className="text-base font-medium"
                  style={{ color: textColor }}
                >
                  {name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

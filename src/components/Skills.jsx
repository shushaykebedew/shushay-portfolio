import React from "react";
import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiJava,
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
  { name: "Java", icon: DiJava, color: "text-red-600" },
];

export default function Skills({ theme }) {
  const textColor = theme === "dark" ? "#f9fafb" : "#111827";
  const bgColor = theme === "dark" ? "#111827" : "#ffffff";
  const borderColor = theme === "dark" ? "#1f2937" : "#e5e7eb";

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map(({ name, icon: Icon, color }, index) => (
            <motion.div
              key={name}
              className="flex items-center gap-2 p-3 rounded-lg shadow-sm cursor-pointer
                         hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800
                         transition-all duration-300"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
              custom={index}
              variants={skillVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Icon inline with text */}
              <Icon className={`${color} w-5 h-5 md:w-6 md:h-6`} />

              {/* Skill Name */}
              <span
                className="text-sm sm:text-base font-medium"
                style={{ color: textColor }}
              >
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

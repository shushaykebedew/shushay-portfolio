import React from "react";
import { Code, Terminal, Layers, Database, Github, Wind } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: Code, color: "bg-orange-100 text-orange-600" },
  { name: "CSS", icon: Code, color: "bg-blue-100 text-blue-600" },
  {
    name: "JavaScript",
    icon: Terminal,
    color: "bg-yellow-100 text-yellow-600",
  },
  { name: "React", icon: Layers, color: "bg-cyan-100 text-cyan-600" },
  { name: "Next.JS", icon: Code, color: "bg-teal-100 text-teal-600" },
  { name: "Node.js", icon: Terminal, color: "bg-green-100 text-green-600" },
  { name: "MongoDB", icon: Database, color: "bg-green-200 text-green-700" },
  { name: "MySQL", icon: Database, color: "bg-blue-200 text-blue-700" },
  { name: "Git/GitHub", icon: Github, color: "bg-gray-200 text-gray-700" },
  { name: "Tailwind CSS", icon: Wind, color: "bg-teal-100 text-teal-600" },
];

export default function Skills({ theme }) {
  const textColor = theme === "dark" ? "#f9fafb" : "#111827"; // Skill text
  const bgColor = theme === "dark" ? "#111827" : "#ffffff"; // Card background
  const borderColor = theme === "dark" ? "#1f2937" : "#e5e7eb"; // Card border

  // Animation variants for skills
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
          {skills.map(({ name, icon: Icon, color }, index) => (
            <motion.div
              key={name}
              className="flex items-center gap-2 p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
              custom={index}
              variants={skillVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Icon: hidden on mobile, visible from sm screens */}
              <div
                className={`hidden sm:flex flex-shrink-0 items-center justify-center rounded-full ${color} 
                   w-10 h-10 md:w-12 md:h-12`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>

              {/* Skill name */}
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

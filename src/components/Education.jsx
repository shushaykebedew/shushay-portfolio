import React from "react";
import { GraduationCap, Calendar, Building } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor's in Information Technology",
    institute: "Mekelle University/MIT",
    year: "2018 - 2025",
    details:
      "Focused on full-stack development, networking, data structures, algorithms, and other IT-related fields.",
  },
  {
    degree: "Bachelor's in Business Management",
    institute: "Ethio Lens College",
    year: "2020 - 2025",
    details:
      "Explored core principles of business management, leadership, organizational behavior, economics, and strategic planning.",
  },
];

export default function Education({ theme }) {
  const textColor = theme === "dark" ? "#f9fafb" : "#111827";
  const subTextColor = theme === "dark" ? "#d1d5db" : "#4b5563";
  const bgColor = theme === "dark" ? "#1f2937" : "#ffffff";
  const borderColor = theme === "dark" ? "#374151" : "#e5e7eb";
  const iconBg = theme === "dark" ? "#374151" : "#e0f2fe";
  const iconColor = theme === "dark" ? "#60a5fa" : "#0c4a6e";

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="education"
      className="py-24 transition-colors duration-300"
      style={{ backgroundColor: theme === "dark" ? "#111827" : "#f9fafb" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-base uppercase tracking-widest mb-2"
            style={{ color: subTextColor }}
          >
            Education
          </p>
          <h2 className="text-4xl font-bold" style={{ color: textColor }}>
            Academic Background
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {education.map(({ degree, institute, year, details }, index) => (
            <motion.div
              key={degree}
              className="flex flex-col gap-4 p-8 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:scale-[1.02]"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Header with Icon */}
              <div className="flex flex-col md:flex-row items-start gap-4 text-left">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: iconBg }}
                >
                  <GraduationCap size={24} color={iconColor} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: textColor }}>
                  {degree}
                </h3>
              </div>

              {/* Institute & Year */}
              <div className="flex items-center gap-4">
                <Building size={20} color={iconColor} />
                <p
                  className="text-base font-semibold"
                  style={{ color: subTextColor }}
                >
                  {institute}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Calendar size={20} color={iconColor} />
                <p
                  className="text-base font-semibold"
                  style={{ color: subTextColor }}
                >
                  {year}
                </p>
              </div>

              {/* Details with check icon */}
              <div className="flex items-start gap-2 mt-4">
                <FaCheckCircle
                  size={16}
                  color={iconColor}
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-base" style={{ color: subTextColor }}>
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

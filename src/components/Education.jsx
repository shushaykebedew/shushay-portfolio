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
      "Comprehensive study in software engineering, full-stack development, database systems, networking, data structures, algorithms, and modern web technologies. Gained hands-on experience in both frontend and backend development with practical project implementations.",
  },
  {
    degree: "Bachelor's in Business Management",
    institute: "Ethio Lens College",
    year: "2020 - 2025",
    details:
      "Studied business fundamentals, leadership principles, organizational behavior, economics, and strategic planning. Developed strong project management skills and understanding of business requirements for technical solutions.",
  },
];

export default function Education({ theme }) {
  const textColor = theme === "dark" ? "#f1f5f9" : "#0f172a";
  const subTextColor = theme === "dark" ? "#cbd5e1" : "#475569";
  const bgColor = theme === "dark" ? "#1e293b" : "#ffffff";
  const borderColor = theme === "dark" ? "#334155" : "#cbd5e1";
  const sectionBg = theme === "dark" ? "#0f172a" : "#f8fafc";
  const iconBg = theme === "dark" ? "#334155" : "#e0f2fe";
  const iconColor = theme === "dark" ? "#60a5fa" : "#1e40af";

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
      className="py-20 md:py-24 transition-colors duration-300"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p
            className="text-sm uppercase tracking-widest mb-3 font-semibold"
            style={{ color: subTextColor }}
          >
            Education
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: textColor }}
          >
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
                <h3
                  className="text-base sm:text-xl font-bold"
                  style={{ color: textColor }}
                >
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
                  size={20}
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

import { Briefcase, Calendar } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Frontend Developer",
    company: "Metnee Systems PLC",
    year: "Aug 2025 - Present",
    details:
      "Developing high-performance user interfaces using React, Next.js, and Tailwind CSS. Successfully translated 15+ Figma designs into pixel-perfect, accessible components. Optimized application performance by 40% through code splitting and lazy loading. Collaborated with backend teams to integrate RESTful APIs and improve user experience.",
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Metnee Systems PLC",
    year: "Nov 2024 - Feb 2025",
    details:
      "Built responsive UI components and integrated client-side APIs using React and Tailwind CSS. Resolved 25+ UI bugs and implemented mobile-first design principles. Gained hands-on experience with version control, code reviews, and agile development practices. Contributed to improving application accessibility and cross-browser compatibility.",
  },
];

function Experience({ theme }) {
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
      id="experience"
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
            Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: textColor }}
          >
            Professional Background
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experience.map(({ role, company, year, details }, index) => (
            <motion.div
              key={role}
              className="flex flex-col gap-4 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden"
              style={{
                backgroundColor: bgColor,
                border: `2px solid ${borderColor}`,
              }}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Header with Icon */}
              <div className="flex flex-col md:flex-row items-start gap-4 text-left">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ backgroundColor: iconBg }}
                >
                  <Briefcase size={20} color={iconColor} />
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold leading-tight"
                  style={{ color: textColor }}
                >
                  {role}
                </h3>
              </div>

              {/* Company & Year */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <p
                    className="text-base font-bold"
                    style={{ color: theme === "dark" ? "#60a5fa" : "#1e40af" }}
                  >
                    {company}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={18} color={iconColor} />
                  <p
                    className="text-sm font-semibold"
                    style={{ color: subTextColor }}
                  >
                    {year}
                  </p>
                </div>
              </div>

              {/* Details with check icon */}
              <div className="flex items-start gap-3 p-4 rounded-xl" style={{
                backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9",
                border: `1px solid ${borderColor}`
              }}>
                <FaCheckCircle
                  size={18}
                  color={iconColor}
                  className="mt-0.5 flex-shrink-0"
                />
                <p className="text-sm leading-relaxed font-medium" style={{ color: subTextColor }}>
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
export default Experience;
import { Briefcase, Calendar } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Frontend Developer",
    company: "Blih Marketing and Communications PLC",
    year: "Jun 2026 - Present",
    details: [
      "Building and maintaining production features in Next.js and React, translating Figma designs into pixel-accurate, responsive UI.",
      "Implementing state management solutions to keep client-side data flow predictable and maintainable across growing feature sets.",
      "Collaborating closely with design and marketing stakeholders to ship polished, on-brand interfaces under real client timelines.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Metnee Systems PLC",
    year: "Feb 2025 - Jun 2026",
    details: [
      "Co-developed and deployed responsive web applications for international clients in Ethiopia and South Korea.",
      "Built pixel-perfect user interfaces from Figma designs with strong attention to detail, ensuring consistency across modern browsers and devices.",
      "Implemented state management using Redux Toolkit and Zustand, along with secure RESTful API integration using JWT authentication.",
      "Developed and maintained multilingual interfaces supporting both English and Korean while creating reusable React and TypeScript components.",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Metnee Systems PLC",
    year: "Sep 2024 - Jan 2025",
    details: [
      "Built administrative dashboards with filtering, sorting, and pagination for efficient data management.",
      "Improved application accessibility following WCAG guidelines and enhanced SEO best practices.",
      "Collaborated with the development team to refine UI/UX and migrate legacy pages to modern React architecture.",
    ],
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
              key={role + company}
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
              <div className="flex items-start gap-4 text-left">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ backgroundColor: iconBg }}
                >
                  <Briefcase size={20} color={iconColor} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-lg sm:text-xl font-bold leading-tight"
                    style={{ color: textColor }}
                  >
                    {role}
                  </h3>
                  <div className="flex items-center gap-3">
                    {/* <Calendar size={16} color={iconColor} /> */}
                    <p
                      className="text-sm font-semibold"
                      style={{ color: subTextColor }}
                    >
                      {year}
                    </p>
                  </div>
                </div>
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
              </div>

              {/* Details with check icon */}
              <div
                className="flex flex-col gap-3 p-4 rounded-xl"
                style={{
                  backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9",
                  border: `1px solid ${borderColor}`,
                }}
              >
                {Array.isArray(details) ? (
                  details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle
                        size={18}
                        color={iconColor}
                        className="mt-0.5 flex-shrink-0"
                      />
                      <p
                        className="text-sm leading-relaxed font-medium"
                        style={{ color: subTextColor }}
                      >
                        {detail}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start gap-3">
                    <FaCheckCircle
                      size={18}
                      color={iconColor}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <p
                      className="text-sm leading-relaxed font-medium"
                      style={{ color: subTextColor }}
                    >
                      {details}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

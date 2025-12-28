import React from "react";
import { motion } from "framer-motion";
import sheqleeDashboard from "../assets/sheqlee-dashboard.png";
import qrCodeScan from "../assets/qr-code-scan.jpg";
import machaImg from "../assets/macha.png";
import glitchImg from "../assets/glitch.png";

const projects = [
  {
    title: "QR-Code Based ID Verification",
    description:
      "A secure, efficient solution for identity verification using QR code scanning. Ensures smooth UX and enhanced security for access control and authentication.",
    image: qrCodeScan,
    tech: ["React", "Node.js", "MySQL", "CSS"],
  },
  {
    title: "Sheqlee's Admin Page",
    description:
      "Admin dashboard for the Sheqlee web app, helping freelancers and companies manage profiles, projects, and payments with an intuitive UI.",
    image: sheqleeDashboard,
    tech: ["React", "CSS Module"],
  },
  {
    title: "Macha Taximeter",
    description:
      "Macha Taximeter modernizes taxi services by accurately calculating fares based on distance and time. It ensures a transparent, reliable experience for both drivers and passengers.",
    image: machaImg,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Glitch",
    description:
      "A multilingual landing page supporting English and Korean, focused on clean design, performance, and accessibility with a modern responsive layout.",
    image: glitchImg,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects({ theme }) {
  const textColor = theme === "dark" ? "#f9fafb" : "#111827";
  const subTextColor = theme === "dark" ? "#d1d5db" : "#4b5563";
  const bgColor = theme === "dark" ? "#1f2937" : "#ffffff";
  const borderColor = theme === "dark" ? "#374151" : "#e5e7eb";

  // Animation variants for project cards
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm uppercase tracking-widest mb-2"
            style={{ color: subTextColor }}
          >
            My Projects
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: textColor }}
          >
            Selected Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map(({ title, description, image, tech }, index) => (
            <motion.div
              key={title}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-transform hover:scale-[1.02]  flex flex-col h-full"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
              custom={index}
              variants={projectVariants}
              initial="hidden"
              animate="visible"
            >
              <img src={image} alt={title} className="w-full h-56" />
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-lg sm:text-xl font-bold mb-2"
                  style={{ color: textColor }}
                >
                  {title}
                </h3>
                <p className="text-sm mb-4" style={{ color: subTextColor }}>
                  {description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2  mt-auto">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        theme === "dark"
                          ? "border-gray-600 bg-gray-900 text-gray-200"
                          : "border-gray-300 bg-gray-100 text-gray-700"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

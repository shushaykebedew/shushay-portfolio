import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import sheqleeDashboard from "../assets/sheqlee-dashboard.png";
import qrCodeScan from "../assets/qr-code-scan.png";
import machaImg from "../assets/macha.png";
import glitchImg from "../assets/glitch.png";
import katechImg from "../assets/katech.png";
import bellboy from "../assets/bellboy.png";
import xCafe from "../assets/x-cafe.png";
import AI_Powered_Fraud_Detection from "../assets/AI_Powered_Fraud_Detection.png";

// Lazy loading component for images
const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded" />
      )}

      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
      />

      {error && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

const projects = [
  {
    title: "Katech Driver Data Platform",
    description:
      "Data management platform for collecting, validating, and processing driving videos and related metadata. Built to help AI and automotive companies access high-quality human–vehicle interaction datasets for machine learning, autonomous driving research, and analytics.",
    image: katechImg,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Git/Github",
      "i18n",
    ],
    demoUrl: "https://katech-local.vercel.app/",
  },
  {
    title: "Macha Taximeter Platform",
    description:
      "Modern taxi fare calculation system with GPS tracking and dynamic pricing. Built with server-side rendering for optimal performance and real-time location updates.",
    image: machaImg,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Geolocation API"],
    demoUrl: "https://macha-taximeter.vercel.app/",
  },
  {
    title: "Sheqlee Admin Dashboard",
    description:
      "Full-stack admin platform for freelancer marketplace management. Includes user management, project tracking, payment processing, and analytics dashboard with real-time data synchronization.",
    image: sheqleeDashboard,
    tech: ["React", "CSS Module", "Node.js", "MongoDB", "REST API"],
    demoUrl: " https://sheqlee-admin-panel.vercel.app/",
  },
  {
    title: "Glitch Multilingual Platform",
    description:
      "Internationalized web platform with English and Korean support. Features server-side rendering, dynamic content management, and optimized SEO performance.",
    image: glitchImg,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    demoUrl: "https://glitch-ui.vercel.app/",
  },

  {
    title: "Bellboy Delivery",
    description:
      "Built delivery system with smooth, interactive animations that visually track each step of the delivery process—from request to pickup, transit, and drop-off—providing real-time status updates and a clear, engaging user experience.",
    image: bellboy,
    tech: ["Svelte", "SvelteKit", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://bellboy-delivery.vercel.app/",
  },
  {
    title: "X Cafe",
    description:
      "Built an admin dashboard for a QR-based café ordering system with real-time order updates, menu management, and order tracking. Enabled customers to place orders via QR scan while staff manage and monitor incoming orders efficiently. Focused on real-time sync and streamlined café operations.",
    image: xCafe,
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://x-cafe-system.vercel.app/",
  },
  {
    title: "Automated ID Verification System",
    description:
      "Enterprise-grade identity verification platform with QR code scanning. Features secure user authentication, real-time verification status, and comprehensive admin dashboard.",
    image: qrCodeScan,
    tech: ["React", "CSS Module", "Node.js", "MySQL", "JWT", "REST API"],
    demoUrl: "",
  },

  {
    title: "AI-Powered Fraud Detection",
    description:
      "Advanced fraud detection platform for Ethiopian banking and mobile payment systems. Utilizes AI and machine learning to identify suspicious transactions in real-time, ensure secure payments, and provide actionable analytics through an intuitive admin dashboard.",
    image: AI_Powered_Fraud_Detection,
    tech: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Node.js",
      "Next.js",
      "REST API",
    ],
    demoUrl: "",
  },
];

export default function Projects({ theme }) {
  const textColor = theme === "dark" ? "#f1f5f9" : "#0f172a";
  const subTextColor = theme === "dark" ? "#cbd5e1" : "#475569";
  const bgColor = theme === "dark" ? "#1e293b" : "#ffffff";
  const borderColor = theme === "dark" ? "#334155" : "#cbd5e1";

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm uppercase tracking-widest mb-3 font-semibold"
            style={{ color: subTextColor }}
          >
            My Projects
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: textColor }}
          >
            Selected Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map(
            (
              { title, description, image, tech, demoUrl, githubUrl },
              index,
            ) => (
              <motion.div
                key={title}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] flex flex-col h-full group"
                style={{
                  backgroundColor: bgColor,
                  border: `2px solid ${borderColor}`,
                }}
                custom={index}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={image}
                    alt={`${title} project screenshot`}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-lg sm:text-xl font-bold mb-3 leading-tight"
                    style={{ color: textColor }}
                  >
                    {title}
                  </h3>

                  <p
                    className="text-sm mb-4 leading-relaxed font-medium"
                    style={{ color: subTextColor }}
                  >
                    {description}
                  </p>

                  <div className="flex gap-3 mb-6 mt-2">
                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#3b82f6" : "#2563eb",
                          color: "#ffffff",
                        }}
                      >
                        <FaExternalLinkAlt size={14} /> View Demo
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#334155" : "#e2e8f0",
                          color: theme === "dark" ? "#f1f5f9" : "#0f172a",
                        }}
                      >
                        <FaGithub size={16} /> GitHub
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full border font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          borderColor: theme === "dark" ? "#475569" : "#94a3b8",
                          backgroundColor:
                            theme === "dark" ? "#334155" : "#e2e8f0",
                          color: theme === "dark" ? "#cbd5e1" : "#475569",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

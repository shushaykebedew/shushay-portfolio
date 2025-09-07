import React, { useState, useEffect } from "react";
import {
  Globe,
  Database,
  Smartphone,
  Search,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer({ theme }) {
  const [showTop, setShowTop] = useState(false);
  const textColor = theme === "dark" ? "#f9fafb" : "#111827";
  const subTextColor = theme === "dark" ? "#d1d5db" : "#4b5563";
  const bgColor = theme === "dark" ? "#111827" : "#f9fafb";
  const borderColor = theme === "dark" ? "#374151" : "#e5e7eb";
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const socialLinks = [
    { icon: Facebook, link: "https://www.facebook.com/shushay.kebedew" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/shushay-kebedew/" },
    { icon: Twitter, link: "https://x.com/Shushay_Kebedew" },
    { icon: Instagram, link: "https://www.instagram.com/shushay_kebedew" },
    { icon: Github, link: "https://github.com/shushaykebedew" },
  ];

  return (
    <footer
      style={{
        backgroundColor: bgColor,
        borderTop: `1px solid ${borderColor}`,
        color: textColor,
      }}
      className="pt-12 pb-6 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Contact */}
        <motion.div
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-lg font-extrabold tracking-wide">SHUSHAY</h3>
          <p className="mt-2 text-sm" style={{ color: subTextColor }}>
            Addis Ababa, Ethiopia
          </p>
          <p className="mt-1 text-sm" style={{ color: subTextColor }}>
            Phone: +251 943 668 796
          </p>
          <p className="mt-1 text-sm" style={{ color: subTextColor }}>
            Email:{" "}
            <a
              href="mailto:shushaykebedew12@gmail.com"
              className="hover:underline"
            >
              shushaykebedew12@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          custom={1}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h4 className="font-semibold mb-3">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:underline"
                  style={{ color: subTextColor }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          custom={2}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Globe size={16} /> Web Development
            </li>
            <li className="flex items-center gap-2">
              <Database size={16} /> Database Management
            </li>
            <li className="flex items-center gap-2">
              <Smartphone size={16} /> Mobile App Development
            </li>
            <li className="flex items-center gap-2">
              <Search size={16} /> SEO & Digital Marketing
            </li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          custom={3}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h4 className="font-semibold mb-3">Follow Me</h4>
          <p className="text-sm" style={{ color: subTextColor }}>
            Connect with me on social media
          </p>
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {socialLinks.map(({ icon: Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border p-3 text-sm transition-all duration-300"
                style={{ borderColor: borderColor, color: textColor }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderImage =
                    "linear-gradient(to right, #6366f1, #a855f7, #ec4899) 1";
                  e.currentTarget.style.borderStyle = "solid";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderImage = "";
                  e.currentTarget.style.borderColor = borderColor;
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        custom={4}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="mt-10 border-t pt-6 text-center text-sm"
        style={{ borderColor: borderColor, color: subTextColor }}
      >
        © {year} All rights reserved
      </motion.div>

      {/* Back to Top */}
      {showTop && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 inline-flex items-center justify-center rounded-full border p-3 shadow-lg transition-all duration-300"
          style={{
            borderColor: borderColor,
            backgroundColor: bgColor,
            color: textColor,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderImage =
              "linear-gradient(to right, #6366f1, #a855f7, #ec4899) 1";
            e.currentTarget.style.borderStyle = "solid";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderImage = "";
            e.currentTarget.style.borderColor = borderColor;
          }}
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </footer>
  );
}

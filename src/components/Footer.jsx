import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer({ theme }) {
  const [showTop, setShowTop] = useState(false);
  const textColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const iconColor = theme === "dark" ? "#60a5fa" : "#0c4a6e";

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
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/shushay.kebedew",
      label: "Facebook",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/shushay-kebedew/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      link: "https://x.com/Shushay_Kebedew",
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/shushay_kebedew",
      label: "Instagram",
    },
    {
      icon: FaGithub,
      link: "https://github.com/shushaykebedew",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <footer
      className={`${bgColor} ${borderColor} border-t ${textColor} pt-12 pb-6 relative`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Brand & Contact */}
        <motion.div
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-lg uppercase font-bold tracking-wide">
            Shushay Kebedew
          </h3>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <MapPin size={15} color={iconColor} />
            <span className={subTextColor}>Addis Ababa, Ethiopia</span>
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm">
            <Phone size={15} color={iconColor} />
            <a
              href="tel:+251943668796"
              className={`${subTextColor} cursor-pointer hover:underline`}
            >
              +251 943 668 796
            </a>
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm flex-wrap">
            <Mail size={15} color={iconColor} />

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shusaykebedew12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${subTextColor} hover:underline cursor-pointer break-all`}
            >
              shushaykebedew12@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          custom={1}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h4 className="font-medium mb-3 uppercase">Quick Links</h4>
          <div className="inline-grid grid-cols-2 gap-x-8 gap-y-2 justify-items-start">
            {quickLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`${subTextColor} hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition text-sm`}
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Social */}
        <motion.div
          custom={2}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h4 className="font-medium uppercase mb-3">Social Links</h4>
          <p className={`text-sm ${subTextColor}`}>
            Connect with me on social media
          </p>
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {socialLinks.map(({ icon: Icon, link, label }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`inline-flex items-center justify-center rounded-xl border ${borderColor} p-3 text-sm transition-all duration-300
                hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white`}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        custom={3}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className={`mt-10 border-t ${borderColor} pt-6 text-center text-sm ${subTextColor}`}
      >
        © {year} All rights reserved!
      </motion.div>

      {/* Back to Top */}
      {showTop && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`fixed bottom-6 right-6 inline-flex items-center justify-center rounded-full border ${borderColor} p-3 shadow-lg transition-all duration-300
            hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white`}
          style={{
            backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
          }}
        >
          <FaArrowUp size={18} />
        </motion.a>
      )}
    </footer>
  );
}

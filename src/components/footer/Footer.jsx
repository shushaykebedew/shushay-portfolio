import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ArrowUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  {
    icon: Facebook,
    link: "https://www.facebook.com/shushay.kebedew",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/shushay-kebedew/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    link: "https://x.com/Shushay_Kebedew",
    label: "X (Twitter)",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/shushay_kebedew",
    label: "Instagram",
  },
  {
    icon: Github,
    link: "https://github.com/shushaykebedew",
    label: "GitHub",
  },
];

const quickLinks = [
  "About",
  "Skills",
  "Experience",
  "Certifications",
  "Projects",
  "Education",
  "Contact",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  const contactIconClass = "w-4 h-4";
  const socialIconClass = "w-4 h-4 sm:w-5 sm:h-5";

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pt-14 pb-8 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand & Contact */}
        <motion.div
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-lg font-extrabold tracking-wide uppercase mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Shushay Kebedew
          </h2>
          <div className="space-y-2.5 text-sm">
            <div className="flex items-center gap-2.5">
              <MapPin
                className={`${contactIconClass} text-indigo-600 dark:text-indigo-400 flex-shrink-0`}
                aria-hidden="true"
              />
              <span className="text-slate-600 dark:text-slate-400">
                Addis Ababa, Ethiopia
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone
                className={`${contactIconClass} text-indigo-600 dark:text-indigo-400 flex-shrink-0`}
                aria-hidden="true"
              />
              <a
                href="tel:+251943668796"
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Call +251 943 668 796"
              >
                +251 943 668 796
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail
                className={`${contactIconClass} text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5`}
                aria-hidden="true"
              />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shusaykebedew12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                aria-label="Send email to shusaykebedew12@gmail.com"
              >
                shusaykebedew12@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.nav
          custom={1}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          aria-label="Footer Navigation"
        >
          <h3 className="font-bold mb-4 uppercase tracking-wide text-sm text-slate-900 dark:text-slate-100">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-x-0 gap-y-2.5">
            {quickLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm w-fit"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.nav>

        {/* Social */}
        <motion.div
          custom={2}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="font-bold uppercase tracking-wide text-sm mb-2 text-slate-900 dark:text-slate-100">
            Connect
          </h3>
          <p className="text-sm mb-4 text-slate-500 dark:text-slate-400">
            Find me on social media or check out my work.
          </p>
          <div className="flex gap-2 flex-wrap">
            {socialLinks.map(({ icon: Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${label} profile`}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-slate-700 dark:text-slate-400 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Icon className={socialIconClass} aria-hidden="true" />
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
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-6 text-center text-sm text-slate-500 dark:text-slate-400"
      >
        © {year} Shushay Kebedew. All rights reserved.
      </motion.div>

      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#home"
            aria-label="Scroll back to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 p-3 shadow-xl transition-colors duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
          >
            <ArrowUp className={socialIconClass} aria-hidden="true" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}

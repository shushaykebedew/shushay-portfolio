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
  Heart,
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
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
  }),
};

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  const contactIconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0";
  const socialIconClass = "w-4 h-4 sm:w-4.5 sm:h-4.5";

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative pt-12 sm:pt-16 2xl:pt-20 pb-8 sm:pb-12 2xl:pb-16 border-t border-slate-200/50 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-lg">
      <div className="max-w-6xl 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 2xl:gap-12 pb-8 sm:pb-12 2xl:pb-16">
          {/* Brand & Contact */}
          <motion.div
            custom={0}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="sm:col-span-2 lg:col-span-5"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4 2xl:mb-5">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white px-2.5 2xl:px-3 py-1 2xl:py-1.5 rounded-lg 2xl:rounded-xl text-xs sm:text-sm 2xl:text-base font-extrabold tracking-wide">
                SK
              </span>
              <span className="text-lg sm:text-xl 2xl:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Shushay Kebedew
              </span>
            </div>

            <p className="text-xs sm:text-sm 2xl:text-base text-slate-500 dark:text-slate-400 mb-5 sm:mb-6 2xl:mb-8 max-w-sm 2xl:max-w-md leading-relaxed">
              Full Stack Developer focused on building high-performance web
              applications with clean interfaces and scalable architectures.
            </p>

            <div className="space-y-2 sm:space-y-2.5 2xl:space-y-3.5 text-xs sm:text-sm 2xl:text-base text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2.5 2xl:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-indigo-500 flex-shrink-0" aria-hidden="true" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2.5 2xl:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-indigo-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+251943668796"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Call +251 943 668 796"
                >
                  +251 943 668 796
                </a>
              </div>
              <div className="flex items-center gap-2.5 2xl:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-indigo-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shusaykebedew12@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
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
            viewport={{ once: true, amount: 0.15 }}
            aria-label="Footer Navigation"
            className="sm:col-span-1 lg:col-span-3"
          >
            <h3 className="font-bold text-[11px] sm:text-xs 2xl:text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-3 sm:mb-4 2xl:mb-5">
              Navigation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-2 2xl:gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs sm:text-sm 2xl:text-base text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium w-fit"
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
            viewport={{ once: true, amount: 0.15 }}
            className="sm:col-span-1 lg:col-span-4"
          >
            <h3 className="font-bold text-[11px] sm:text-xs 2xl:text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-3 sm:mb-4 2xl:mb-5">
              Connect Online
            </h3>
            <p className="text-xs sm:text-sm 2xl:text-base text-slate-500 dark:text-slate-400 mb-3.5 sm:mb-4 2xl:mb-6">
              Feel free to connect or follow my latest works across social platforms.
            </p>
            <div className="flex gap-2 2xl:gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${label} profile`}
                  className="glass-card p-2 sm:p-2.5 2xl:p-3 rounded-xl 2xl:rounded-2xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all duration-300 focus:outline-none"
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 2xl:w-5 2xl:h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 2xl:pt-10 border-t border-slate-200/50 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs 2xl:text-sm text-slate-400 dark:text-slate-500 text-center sm:text-left">
          <p>© {year} Shushay Kebedew. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Built with passion & precision</span>
            <Heart className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-pink-500 inline fill-pink-500" />
          </div>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#home"
            aria-label="Scroll back to top"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 glass-card-strong p-3 sm:p-3.5 rounded-full shadow-2xl text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors focus:outline-none cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}

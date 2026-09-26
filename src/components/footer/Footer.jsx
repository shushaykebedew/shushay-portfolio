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
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";

const EMAIL = "shushaykebedew12@gmail.com";

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

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [copied, copy] = useCopyToClipboard();
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative pt-14 sm:pt-18 2xl:pt-22 pb-8 sm:pb-12 2xl:pb-16 border-t border-slate-200 dark:border-cyan-500/20 bg-slate-100/70 dark:bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-6xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 2xl:gap-12 pb-10 sm:pb-14 border-b border-slate-200 dark:border-slate-800">
          {/* Brand & Contact */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 text-white px-3 py-1 rounded-xl text-xs sm:text-sm font-black tracking-wide shadow-md shadow-cyan-500/20">
                SK
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Shushay Kebedew
              </span>
            </div>

            <p className="text-xs sm:text-sm 2xl:text-base text-slate-600 dark:text-slate-400 mb-6 max-w-sm 2xl:max-w-md leading-relaxed font-medium">
              Full Stack Developer focused on building high-performance web
              applications with modern interfaces and scalable architectures.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" aria-hidden="true" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+251943668796"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  aria-label="Call +251 943 668 796"
                >
                  +251 943 668 796
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all"
                  aria-label={`Send email to ${EMAIL}`}
                >
                  {EMAIL}
                </a>
                <button
                  onClick={() => copy(EMAIL)}
                  aria-label={copied ? "Copied!" : "Copy email address"}
                  className="flex-shrink-0 cursor-pointer p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 focus:outline-none"
                >
                  {copied
                    ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    : <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation" className="sm:col-span-1 lg:col-span-3">
            <h3 className="font-extrabold text-xs 2xl:text-sm uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Navigation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-bold w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          {/* Social Links */}
          <div className="sm:col-span-1 lg:col-span-4">
            <h3 className="font-extrabold text-xs 2xl:text-sm uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-4">
              Connect Online
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 font-semibold">
              Connect or follow my latest engineering projects across social platforms.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {socialLinks.map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${label} profile`}
                  className="glass-card p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 hover:scale-110 transition-all duration-300 focus:outline-none border border-slate-200 dark:border-cyan-500/20"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs 2xl:text-sm text-slate-600 dark:text-slate-400 font-bold text-center sm:text-left">
          <p>© {year} Shushay Kebedew. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400 font-black">
            <span>Crafted with precision & code</span>
            <Heart className="w-4 h-4 text-cyan-600 dark:text-cyan-400 inline fill-cyan-600 dark:fill-cyan-400" />
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
            className="fixed bottom-5 right-5 z-40 glass-card-strong p-3.5 rounded-full shadow-2xl text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-white border border-slate-200 dark:border-cyan-500/40 hover:border-cyan-500 transition-colors focus:outline-none cursor-pointer bg-white/90 dark:bg-slate-950/90"
          >
            <ArrowUp className="w-5 h-5" aria-hidden="true" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  User,
  Wrench,
  Briefcase,
  Award,
  FolderKanban,
  GraduationCap,
  Mail,
  Sparkles,
} from "lucide-react";

const links = [
  { label: "Home", id: "home", icon: Home },
  { label: "About", id: "about", icon: User },
  { label: "Skills", id: "skills", icon: Wrench },
  { label: "Experience", id: "experience", icon: Briefcase },
  { label: "Certifications", id: "certifications", icon: Award },
  { label: "Projects", id: "projects", icon: FolderKanban },
  { label: "Education", id: "education", icon: GraduationCap },
  { label: "Contact", id: "contact", icon: Mail },
];

const drawerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

const linksListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const linkItemVariants = {
  hidden: { x: 36, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    x: 16,
    opacity: 0,
    transition: { duration: 0.14, ease: "easeIn" },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
};

const menuIconVariants = {
  initial: { rotate: -90, opacity: 0, scale: 0.5 },
  animate: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    rotate: 90,
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
};

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = parseInt(document.body.style.top || "0", 10);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, -scrollY);
    }
    return () => {
      const scrollY = parseInt(document.body.style.top || "0", 10);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, -scrollY);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-xl shadow-cyan-950/5 dark:shadow-black/30 border-b border-slate-200/80 dark:border-cyan-500/20"
          : "bg-white/70 dark:bg-slate-950/40 backdrop-blur-xl border-b border-slate-200/40 dark:border-slate-800/30"
      }`}
    >
      <div className="relative z-[60] max-w-7xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8 flex h-16 sm:h-18 2xl:h-22 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group font-bold text-base sm:text-lg 2xl:text-xl flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
          aria-label="Go to home section"
        >
          <span className="relative flex items-center justify-center bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 text-white px-2.5 py-1 2xl:px-3.5 2xl:py-1.5 rounded-xl text-xs sm:text-sm 2xl:text-base font-black tracking-wide shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            SK
          </span>
          <span className="inline text-slate-900 dark:text-white font-black tracking-tight text-sm sm:text-base 2xl:text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            Shushay
          </span>
          <span className="hidden xl:inline text-slate-500 dark:text-cyan-400/80 font-semibold text-xs 2xl:text-sm tracking-normal">
            Kebedew
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {links.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative px-3 2xl:px-4 py-1.5 2xl:py-2 rounded-xl group focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className={`relative z-10 transition-colors duration-200 font-bold text-xs xl:text-[13px] 2xl:text-base ${
                  activeSection === id
                    ? "text-cyan-700 dark:text-cyan-400 font-black"
                    : "text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                }`}
              >
                {label}
              </span>

              {activeSection === id && (
                <motion.span
                  layoutId="activeNavBg"
                  className="absolute inset-0 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 shadow-sm"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <div className="ml-2 pl-2 2xl:ml-4 2xl:pl-4 border-l border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Dark Mode"
              className="p-2 2xl:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-white transition-all duration-300 cursor-pointer border border-slate-200/80 dark:border-cyan-500/20 shadow-sm"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px] 2xl:w-5 2xl:h-5" />
              ) : (
                <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px] 2xl:w-5 2xl:h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 transition-colors border border-slate-200 dark:border-cyan-500/20"
          >
            {theme === "dark" ? (
              <Sun className="w-4.5 h-4.5" />
            ) : (
              <Moon className="w-4.5 h-4.5" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors border border-slate-200 dark:border-cyan-500/20"
          >
            <span className="relative block w-5 h-5">
              <AnimatePresence initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    variants={menuIconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    variants={menuIconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="drawer-backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-md"
              aria-hidden="true"
            />

            <motion.aside
              key="drawer-panel"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden fixed inset-0 w-full h-[100dvh] z-50 bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-2xl flex flex-col justify-between overflow-y-auto p-6 sm:p-8"
              aria-label="Mobile Navigation"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 text-white px-2.5 py-1 rounded-xl text-xs font-black">
                    SK
                  </span>
                  <span className="font-extrabold text-slate-900 dark:text-slate-100">Shushay Kebedew</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.div
                variants={linksListVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-2 my-auto py-4"
              >
                {links.map(({ label, id, icon: Icon }) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    variants={linkItemVariants}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeSection === id
                        ? "bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-black border border-cyan-500/30"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 font-bold"
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-sm font-extrabold">{label}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Full Stack Developer
                </span>
                <span className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400">
                  Addis Ababa, ET
                </span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
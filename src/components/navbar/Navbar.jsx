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
  { label: "Projects", id: "projects", icon: FolderKanban },
  { label: "Education", id: "education", icon: GraduationCap },
  { label: "Certifications", id: "certifications", icon: Award },
  { label: "Contact", id: "contact", icon: Mail },
];

const drawerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
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

      const sections = links
        .map((link) => ({
          id: link.id,
          element: document.getElementById(link.id),
        }))
        .filter(({ element }) => element)
        .sort(
          (a, b) =>
            a.element.getBoundingClientRect().top -
            b.element.getBoundingClientRect().top
        );
      const active = [...sections]
        .reverse()
        .find(({ element }) => element.getBoundingClientRect().top <= 140);

      if (active) setActiveSection(active.id);
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
        menuOpen
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 shadow-md"
          : scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-xl shadow-cyan-950/5 dark:shadow-black/30 border-b border-slate-200/80 dark:border-cyan-500/20"
          : "bg-white/70 dark:bg-slate-950/40 backdrop-blur-xl border-b border-slate-200/40 dark:border-slate-800/30"
      }`}
    >
      <div className="relative z-[60] max-w-7xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 flex h-[4.5rem] 2xl:h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group font-bold flex items-center gap-2.5 cursor-pointer rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          aria-label="Go to home section"
        >
          <span className="relative flex h-9 w-9 2xl:h-10 2xl:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 via-blue-600 to-emerald-600 text-xs 2xl:text-sm font-black tracking-wide text-white shadow-md shadow-cyan-500/20 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            SK
          </span>
          <span className="inline text-[15px] sm:text-base 2xl:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
            Shushay
          </span>
          <span className="hidden xl:inline border-l border-slate-300/80 dark:border-slate-700 pl-2.5 text-xs 2xl:text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            Kebedew
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {links.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative rounded-xl px-2.5 xl:px-3 2xl:px-3.5 py-2 group cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
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
                  className="absolute inset-0 rounded-xl border border-cyan-500/25 bg-white shadow-sm shadow-cyan-950/5 dark:bg-slate-800/90 dark:border-cyan-400/20"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <div className="ml-2 border-l border-slate-200 pl-2.5 dark:border-slate-800">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Dark Mode"
              className="rounded-xl border border-slate-200/80 bg-white/80 p-2.5 text-cyan-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md cursor-pointer dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-cyan-400 dark:hover:bg-slate-800 dark:hover:text-white"
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
            className="rounded-xl border border-slate-200/80 bg-white/80 p-2.5 text-cyan-600 shadow-sm transition-colors cursor-pointer dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-cyan-400"
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
            className="relative rounded-xl border border-slate-200/80 bg-white/80 p-2.5 text-slate-800 shadow-sm transition-colors dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200"
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
              className="lg:hidden fixed inset-0 top-16 sm:top-18 z-40 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.aside
              key="drawer-panel"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden fixed inset-x-0 top-[4.5rem] bottom-0 h-[calc(100dvh-4.5rem)] z-50 flex flex-col justify-between overflow-y-auto border-t border-slate-200/60 bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur-2xl dark:border-slate-800/60 dark:bg-slate-950/95 dark:text-white sm:p-8"
              aria-label="Mobile Navigation"
            >
              {/* Navigation Links */}
              <motion.div
                variants={linksListVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="my-auto flex flex-col gap-2.5 py-6"
              >
                {links.map(({ label, id, icon: Icon }) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    variants={linkItemVariants}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
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
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
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
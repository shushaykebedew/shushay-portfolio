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

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const logoVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const navItemVariants = {
  hidden: { y: -8, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.04, duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  }),
};

// Panel no longer translates on x at all — it just fades/scales into place.
// This is the key fix: since the panel itself isn't moving, nothing inside
// it (top bar, footer) gets dragged along or overlaps during the motion.
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

// Only this wrapper (and its children) actually translates on x.
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

  const toggleIconClass = "w-4 h-4 sm:w-[18px] sm:h-[18px]";
  const menuIconClass = "w-5 h-5";

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
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-md shadow-black/5 dark:shadow-black/25 border-b border-slate-200/60 dark:border-slate-800/60"
          : "bg-white/65 dark:bg-slate-950/50 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-800/20"
        }`}
    >
      <div className="relative z-[60] max-w-7xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8 flex h-16 sm:h-18 2xl:h-22 items-center justify-between">
       {/* Logo — name now visible on mobile too, not just sm+ */}
<motion.a
  href="#home"
  variants={logoVariants}
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2, ease: "easeOut" }}
  className="font-bold text-base sm:text-lg 2xl:text-xl flex items-center gap-1.5 2xl:gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
  aria-label="Go to home section"
>
  <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-2.5 py-1 2xl:px-3.5 2xl:py-1.5 rounded-lg text-xs sm:text-sm 2xl:text-base font-extrabold tracking-wide shadow-sm">
    SK
  </span>
  <span className="inline text-slate-900 dark:text-slate-100 font-extrabold tracking-tight text-sm sm:text-base 2xl:text-lg">
    Shushay
  </span>
  <span className="hidden xl:inline text-slate-500 dark:text-slate-400 font-medium text-xs 2xl:text-sm tracking-normal">
    Kebedew
  </span>
</motion.a>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {links.map(({ label, id }, index) => (
            <motion.a
              key={id}
              href={`#${id}`}
              custom={index}
              variants={navItemVariants}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative px-2.5 xl:px-3 2xl:px-4 py-1.5 2xl:py-2 rounded-lg group focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className={`relative z-10 transition-colors duration-200 font-semibold text-xs xl:text-[13px] 2xl:text-base ${activeSection === id
                    ? "text-indigo-600 dark:text-indigo-400 font-bold"
                    : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                  }`}
              >
                {label}
              </span>

              {activeSection === id && (
                <motion.span
                  layoutId="activeNavBg"
                  className="absolute inset-0 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/50 dark:border-indigo-800/40"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
            </motion.a>
          ))}

          {/* Dark Mode Toggle */}
          <div className="ml-2 pl-2 2xl:ml-4 2xl:pl-4 border-l border-slate-200 dark:border-slate-800">
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileHover={{ scale: 1.08, rotate: 12 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              aria-label="Toggle Dark Mode"
              className="p-2 2xl:p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200/50 dark:border-slate-700/50"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px] 2xl:w-5 2xl:h-5" />
              ) : (
                <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px] 2xl:w-5 2xl:h-5" />
              )}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-1.5">
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors border border-slate-200/60 dark:border-slate-700/60"
          >
            {theme === "dark" ? (
              <Sun className={toggleIconClass} />
            ) : (
              <Moon className={toggleIconClass} />
            )}
          </motion.button>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors border border-slate-200/60 dark:border-slate-700/60"
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
                    <X className={menuIconClass} />
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
                    <Menu className={menuIconClass} />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </motion.button>
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
              className="lg:hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm will-change-[opacity]"
              aria-hidden="true"
            />

            {/* Panel fades/scales in — it does NOT translate on x, so its
                content (top bar, footer) never rides along or overlaps. */}
            <motion.aside
              key="drawer-panel"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ backgroundColor: theme === "dark" ? "#020617" : "#ffffff" }}
              className="lg:hidden fixed inset-0 w-full h-[100dvh] z-50 shadow-2xl flex flex-col justify-between overflow-y-auto p-5 xs:p-6 sm:p-8 will-change-[opacity,transform]"
              aria-label="Mobile Navigation"
            >
              {/* Top bar — plain, static, appears exactly when the panel does */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-2 py-0.5 rounded-lg text-xs font-extrabold tracking-wide">
                    SK
                  </span>
                 
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links — the ONLY thing that slides right-to-left */}
              <motion.div
                variants={linksListVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-1.5 my-auto py-4 overflow-hidden"
              >
                {links.map(({ label, id, icon: Icon }) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    variants={linkItemVariants}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors duration-200 ${
                      activeSection === id
                        ? "bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-200/60 dark:border-indigo-800/50 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-white font-medium"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-semibold">{label}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Footer — plain, static */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-1.5">
                <p className="text-xs text-center font-semibold text-slate-500 dark:text-slate-400">
                  Full Stack Developer
                </p>
          
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
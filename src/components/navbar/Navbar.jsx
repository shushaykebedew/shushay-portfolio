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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const logoVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const navItemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const mobileItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
  }),
};

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleIconClass = "w-4 h-4 sm:w-5 sm:h-5";
  const menuIconClass = "w-4 h-4 sm:w-5 sm:h-5";
  const navItemIconClass = "w-4 h-4 sm:w-[18px] sm:h-[18px]";

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleScroll);
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
      className="sticky top-0 z-50 border-b-2 transition-all duration-300 border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="font-bold text-lg flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm"
          aria-label="Go to home section"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-2 py-1 rounded">
            SHUSHAY
          </span>
          <span className="hidden xl:inline text-slate-900 dark:text-slate-100">
            KEBEDEW
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex gap-8 items-center text-sm lg:text-base font-medium"
          aria-label="Main Navigation"
        >
          {links.map(({ label, id }, index) => (
            <motion.a
              key={id}
              href={`#${id}`}
              custom={index}
              variants={navItemVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative py-2 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 font-semibold">
                {label}
              </span>

              {/* Active & Hover Bottom Border */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ${
                  activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </motion.a>
          ))}

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className={toggleIconClass} />
            ) : (
              <Moon className={toggleIconClass} />
            )}
          </motion.button>
        </nav>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {theme === "dark" ? (
              <Sun className={toggleIconClass} />
            ) : (
              <Moon className={toggleIconClass} />
            )}
          </motion.button>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {menuOpen ? (
              <X className={menuIconClass} />
            ) : (
              <Menu className={menuIconClass} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-2 px-4 py-3">
              {links.map(({ label, id, icon: Icon }, index) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  custom={index}
                  variants={mobileItemVariants}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-5 px-3 py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    activeSection === id
                      ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                >
                  <Icon className={navItemIconClass} />
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

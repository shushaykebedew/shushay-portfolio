import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import {
  FaUser,
  FaTools,
  FaBriefcase,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelope,
  FaHome,
  FaCertificate,
} from "react-icons/fa";

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { label: "Home", id: "home", icon: FaHome },
    { label: "About", id: "about", icon: FaUser },
    { label: "Skills", id: "skills", icon: FaTools },
    { label: "Experience", id: "experience", icon: FaBriefcase },
    { label: "Certifications", id: "certifications", icon: FaCertificate },
    { label: "Projects", id: "projects", icon: FaProjectDiagram },
    { label: "Education", id: "education", icon: FaGraduationCap },
    { label: "Contact", id: "contact", icon: FaEnvelope },
  ];

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
  }, [links]);

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 transition-all duration-300 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-900/95"
          : "border-slate-200 bg-white/95"
      } backdrop-blur-lg shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="font-bold text-lg flex items-center gap-1"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-2 py-1 rounded">
            SHUSHAY
          </span>
          <span className="hidden lg:inline">KEBEDEW</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm lg:text-base font-medium">
          {links.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative py-2 group"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className={`${
                  theme === "dark" ? "text-slate-200" : "text-slate-700"
                } group-hover:bg-gradient-to-r transition-all duration-300 font-semibold`}
              >
                {label}
              </span>

              {/* Active & Hover Bottom Border - NO WHITE FLASH */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ${
                  activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-xl border cursor-pointer ${
              theme === "dark"
                ? "border-gray-800 hover:bg-gray-900"
                : "border-gray-200 hover:bg-gray-100"
            }`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-xl border ${
              theme === "dark"
                ? "border-gray-800 hover:bg-gray-900"
                : "border-gray-200 hover:bg-gray-100"
            }`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-xl border"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className={`${
            theme === "dark"
              ? "bg-gray-950 border-gray-800"
              : "bg-white border-gray-200"
          } md:hidden border-t`}
        >
          <div className="flex flex-col gap-2 px-4 py-3">
            {links.map(({ label, id, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-5 px-2 py-2 rounded-md ${
                  activeSection === id
                    ? "bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"
                    : ""
                } ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition`}
              >
                <Icon size={18} />
                <span className={activeSection === id ? "font-semibold" : ""}>
                  {label}
                </span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
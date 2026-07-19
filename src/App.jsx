import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import Certifications from "./components/certifications/Certifications";

export default function App() {
  // Initialize theme from localStorage or default to dark
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? savedTheme : "dark";
    }
    return "dark"; // default for SSR or initial render
  });

  // Apply dark class to <html> immediately
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Persist theme in localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      <Navbar theme={theme} setTheme={setTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

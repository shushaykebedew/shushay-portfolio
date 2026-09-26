import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";
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
  const [loading, setLoading] = useState(true);

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

  // Loading screen
  useEffect(() => {
    // Increased duration slightly to let the animation play out beautifully
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen />
        )}
      </AnimatePresence>

      {/* Main App Container */}
      <div
        className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden transition-colors duration-400 noise-overlay flex flex-col"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        {/* Global floating gradient orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 w-full max-w-[100vw]" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 dark:from-cyan-500/6 dark:to-blue-600/6 blur-3xl animate-float-slow" />
          <div
            className="absolute bottom-1/4 right-0 w-[300px] sm:w-[450px] lg:w-[500px] h-[300px] sm:h-[450px] lg:h-[500px] rounded-full bg-gradient-to-br from-emerald-500/8 to-teal-500/8 dark:from-emerald-500/5 dark:to-teal-500/5 blur-3xl animate-float-slow"
            style={{ animationDelay: "8s" }}
          />
        </div>

        <Navbar theme={theme} setTheme={setTheme} />
        <main id="main-content" className="flex-1 w-full pt-16 sm:pt-18 2xl:pt-22">
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
    </>
  );
}

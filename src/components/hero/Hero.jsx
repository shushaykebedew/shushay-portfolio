import { Globe, Github, Linkedin, FileText, ChevronDown, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";
import TypingCode from "./TypingCode";
import GradientOrbs from "../ui/GradientOrbs";

const TECH_STACK = ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"];

const HERO_ORBS = [
  {
    color: "from-indigo-500/25 to-violet-500/20",
    darkColor: "dark:from-indigo-500/15 dark:to-violet-500/10",
    size: "w-[280px] xs:w-[360px] sm:w-[450px] lg:w-[550px] h-[280px] xs:h-[360px] sm:h-[450px] lg:h-[550px]",
    position: "-top-20 -left-20 sm:-top-32 sm:-left-32",
    delay: 0,
  },
  {
    color: "from-fuchsia-500/20 to-pink-500/15",
    darkColor: "dark:from-fuchsia-500/10 dark:to-pink-500/8",
    size: "w-[260px] xs:w-[320px] sm:w-[400px] lg:w-[500px] h-[260px] xs:h-[320px] sm:h-[400px] lg:h-[500px]",
    position: "-bottom-24 -right-16 sm:-bottom-48 sm:-right-24",
    delay: 6,
  },
  {
    color: "from-violet-500/15 to-indigo-500/10",
    darkColor: "dark:from-violet-500/8 dark:to-indigo-500/5",
    size: "w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    delay: 12,
  },
];

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const buttonBase =
    "inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 focus:outline-none flex-1 sm:flex-initial text-center";
  const iconClass = "w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0";

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center scroll-mt-16 overflow-hidden py-12 sm:py-16 lg:py-24 2xl:py-32"
    >
      {/* Background orbs */}
      <GradientOrbs orbs={HERO_ORBS} />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 grid lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 2xl:gap-24 items-center w-full">
        {/* Left Column — Text & CTAs */}
        <motion.div
          className="lg:col-span-7 2xl:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badges */}
          <motion.div
            className="flex flex-wrap items-center gap-2 sm:gap-3 2xl:gap-4 mb-6 sm:mb-8 2xl:mb-10"
            variants={itemVariants}
          >
            <div className="glass-card inline-flex items-center gap-2 rounded-full px-3 sm:px-4 2xl:px-5 py-1 sm:py-1.5 2xl:py-2 text-[10px] sm:text-xs 2xl:text-sm font-bold tracking-wide hover:scale-105 transition-transform text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2 2xl:h-2.5 2xl:w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 2xl:h-2.5 2xl:w-2.5 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE FOR WORK</span>
            </div>

            <div className="glass-card inline-flex items-center gap-1.5 2xl:gap-2 rounded-full px-3 sm:px-4 2xl:px-5 py-1 sm:py-1.5 2xl:py-2 text-[10px] sm:text-xs 2xl:text-sm font-bold tracking-wide hover:scale-105 transition-transform text-indigo-700 dark:text-indigo-400">
              <Globe className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" aria-hidden="true" />
              <span>FULL STACK DEVELOPER</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold mb-4 sm:mb-6 2xl:mb-8 leading-[1.1] tracking-tight text-slate-900 dark:text-white"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span className="brand-gradient-text">
              Shushay
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 2xl:mb-10 max-w-xl 2xl:max-w-2xl text-sm sm:text-base lg:text-lg 2xl:text-xl font-medium leading-relaxed"
            variants={itemVariants}
          >
            <strong className="text-slate-900 dark:text-white font-bold">
              Full Stack Developer
            </strong>{" "}
            specializing in robust frontend architectures and pixel-perfect
            implementations. I build scalable web applications using modern
            technologies, delivering seamless user experiences from database to
            interface.
          </motion.p>

          {/* Tech stack badges */}
          <motion.div
            className="flex flex-wrap gap-1.5 sm:gap-2 2xl:gap-3 mb-8 sm:mb-10 2xl:mb-12"
            variants={itemVariants}
          >
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={tech}
                className="glass-card px-2.5 sm:px-3 2xl:px-4 py-1 sm:py-1.5 2xl:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs 2xl:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 2xl:gap-4 w-full"
            variants={itemVariants}
          >
            {/* Primary CTA — Full width on mobile */}
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 2xl:px-7 2xl:py-3.5 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm 2xl:text-base bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/15 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 focus:outline-none whitespace-nowrap text-center"
            >
              <FolderKanban className="w-4 h-4 2xl:w-5 2xl:h-5 flex-shrink-0" aria-hidden="true" />
              <span>View Projects</span>
            </a>

            {/* Secondary CTAs — 3 equal columns on mobile */}
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 2xl:gap-4 w-full sm:w-auto">
              <a
                href="https://github.com/shushaykebedew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-3 sm:px-5 2xl:px-6 py-2.5 sm:py-3 2xl:py-3.5 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm 2xl:text-base glass-card text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 focus:outline-none whitespace-nowrap text-center"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 flex-shrink-0" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shushay-kebedew/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-3 sm:px-5 2xl:px-6 py-2.5 sm:py-3 2xl:py-3.5 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm 2xl:text-base glass-card text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 focus:outline-none whitespace-nowrap text-center"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 flex-shrink-0" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="/SHUSHAY_KEBEDEW_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download my resume"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-3 sm:px-5 2xl:px-6 py-2.5 sm:py-3 2xl:py-3.5 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm 2xl:text-base glass-card text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 focus:outline-none whitespace-nowrap text-center"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 flex-shrink-0" aria-hidden="true" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — Code Terminal */}
        <motion.div
          className="lg:col-span-5 relative w-full mt-4 lg:mt-0"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.25 }}
        >
          {/* Glow behind terminal */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 dark:from-indigo-500/10 dark:to-violet-500/10 rounded-3xl blur-2xl sm:blur-3xl animate-glow-pulse pointer-events-none" />

          <motion.div
            className="relative glass-card-strong rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 glow-hover w-full overflow-hidden"
            whileHover={{
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            {/* Terminal header dots */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-slate-200/50 dark:border-slate-800/80">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500/80" />
              <span className="ml-2.5 text-[11px] sm:text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                shushay.config.js
              </span>
            </div>

            <TypingCode />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator (hidden on small mobile heights) */}
      <motion.a
        href="#about"
        className="hidden md:inline-block absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-scroll-hint" />
      </motion.a>
    </section>
  );
}

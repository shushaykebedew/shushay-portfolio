import { Globe, Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonClass = (type = "outline") =>
    type === "outline"
      ? `inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all duration-300 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-transparent dark:hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800`
      : `inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800`;

  const iconClass = "w-3.5 h-3.5 sm:w-4.5 sm:h-4.5";

  return (
    <section id="home" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-8"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wide transition-all duration-300 hover:scale-105 bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wide transition-all duration-300 hover:scale-105 bg-white border-slate-200 text-indigo-700 dark:bg-slate-900 dark:border-slate-700 dark:text-blue-400 shadow-sm">
              <Globe className={iconClass} aria-hidden="true" /> FULL STACK
              DEVELOPER
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            variants={itemVariants}
          >
            Hi, I'm&nbsp;
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Shushay
            </span>
          </motion.h1>

          <motion.p
            className="text-slate-600 dark:text-slate-300 mb-8 max-w-xl text-md sm:text-lg font-medium leading-relaxed"
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

          <motion.div
            className="text-slate-500 dark:text-slate-400 mb-10 text-sm font-semibold"
            variants={itemVariants}
          >
            <div className="flex flex-wrap gap-6 items-center">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Remote & On-site
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Frontend Focus
              </span>
            </div>
          </motion.div>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <a
              href="https://github.com/shushaykebedew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className={buttonClass("outline")}
            >
              <Github className={iconClass} aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shushay-kebedew/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className={buttonClass("outline")}
            >
              <Linkedin className={iconClass} aria-hidden="true" /> LinkedIn
            </a>
            <a
              href="/SHUSHAY_KEBEDEW_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download my resume"
              className={buttonClass("filled")}
            >
              <FileText className={iconClass} aria-hidden="true" /> Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mt-12 lg:mt-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{
            scale: 1.02,
            y: -8,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[80px] opacity-20 dark:opacity-30 animate-pulse" />

          <div className="relative border rounded-2xl p-6 sm:p-8 shadow-2xl  transition-all duration-500 bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-sm" />
              <span className="ml-3 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                shushay.config.js
              </span>
            </div>

            <div className="font-mono text-sm sm:text-base space-y-3">
              <div className="text-pink-500 dark:text-pink-400">
                const{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  developer
                </span>{" "}
                ={" "}
                <span className="text-yellow-600 dark:text-yellow-300">
                  {"{"}
                </span>
              </div>

              <div className="pl-6 text-slate-800 dark:text-slate-200">
                name:{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  'Shushay Kebedew'
                </span>
                ,
              </div>

              <div className="pl-6 text-slate-800 dark:text-slate-200">
                role:{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  'Full Stack Developer'
                </span>
                ,
              </div>

              <div className="pl-6 text-slate-800 dark:text-slate-200">
                skills:{" "}
                <span className="text-purple-600 dark:text-purple-400">[</span>
                <span className="text-emerald-600 dark:text-emerald-400">
                  'React'
                </span>
                ,{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  'Next.js'
                </span>
                ,{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  'Node.js'
                </span>
                ,{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  'Tailwind CSS'
                </span>
                <span className="text-purple-600 dark:text-purple-400">]</span>,
              </div>

              <div className="pl-6 text-slate-800 dark:text-slate-200 flex items-center">
                status:{" "}
                <span className="text-emerald-600 dark:text-emerald-400 ml-2">
                  'Open to Work'
                </span>
                <span className="ml-2 animate-ping h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>

              <div className="text-yellow-600 dark:text-yellow-300">{"}"}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

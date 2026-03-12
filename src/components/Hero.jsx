import { FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ theme }) {
  // Staggered animation variants
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

  // Button helper with slow hover transition and accessibility
  const buttonClass = (theme, type = "outline") =>
    type === "outline"
      ? `inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 font-medium text-sm transition-all duration-300 ${
          theme === "dark"
            ? "border-slate-600 text-slate-200 hover:border-transparent"
            : "border-slate-300 text-slate-700 hover:border-transparent"
        } hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-md focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800`
      : `inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:scale-105 hover:shadow-md focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800`;

  return (
    <section id="home" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={`inline-flex items-center gap-2 mb-4 rounded-full border px-3 py-1.5 text-xs font-semibold`}
            style={{
              backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
              color: theme === "dark" ? "#60a5fa" : "#1e40af",
              borderColor: theme === "dark" ? "#334155" : "#cbd5e1",
            }}
            variants={itemVariants}
          >
            <FaGlobe size={14} aria-hidden="true" /> FULL STACK DEVELOPER
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
            variants={itemVariants}
          >
            Hi, I'm&nbsp;
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Shushay
            </span>
          </motion.h1>

          <motion.p
            className={`${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            } mb-6 max-w-xl leading-relaxed text-lg font-medium`}
            variants={itemVariants}
          >
            Full Stack Developer crafting scalable web applications with modern technologies. 
            I build end-to-end solutions from database architecture to intuitive user interfaces, 
            delivering high-performance applications that solve real-world problems.
          </motion.p>

          <motion.div 
            className={`${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            } mb-8 text-sm`}
            variants={itemVariants}
          >
            <div className="flex flex-wrap gap-4 items-center">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Remote & On-site
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Full Stack Focus
              </span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
            <a
              href="https://github.com/shushaykebedew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className={buttonClass(theme)}
            >
              <FaGithub size={16} aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shushay-kebedew/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className={buttonClass(theme)}
            >
              <FaLinkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
            <a
              href="/SHUSHAY_KEBEDEW_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download my resume"
              className={buttonClass(theme, "filled")}
            >
              <FileText size={16} aria-hidden="true" /> Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Code Card Section */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            scale: 1.03,
            y: -5,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" />

          <div
            className="relative border rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
            style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
              borderColor: theme === "dark" ? "#334155" : "#e5e7eb",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-2 mb-4 pb-4 border-b"
              style={{
                borderColor: theme === "dark" ? "#334155" : "#e5e7eb",
              }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-500">fullstack-dev.js</span>
            </div>

            {/* Code */}
            <div className="font-mono text-sm space-y-2">
              <div className="text-pink-500">
                const <span className="text-blue-500">developer</span> ={" "}
                <span className="text-yellow-500">{"{"}</span>
              </div>

              <div
                className="pl-4"
                style={{ color: theme === "dark" ? "#d1d5db" : "#1f2937" }}
              >
                name: <span className="text-green-500">'Shushay'</span>,
              </div>

              <div
                className="pl-4"
                style={{ color: theme === "dark" ? "#d1d5db" : "#1f2937" }}
              >
                role: <span className="text-green-500">'Full Stack'</span>,
              </div>

              <div
                className="pl-4"
                style={{ color: theme === "dark" ? "#d1d5db" : "#1f2937" }}
              >
                frontend: [<span className="text-green-500">'React'</span>,{" "}
                <span className="text-green-500">'Next.js'</span>],
              </div>

              <div
                className="pl-4"
                style={{ color: theme === "dark" ? "#d1d5db" : "#1f2937" }}
              >
                backend: [<span className="text-green-500">'Node.js'</span>,{" "}
                <span className="text-green-500">'Express'</span>],
              </div>

              <div
                className="pl-4"
                style={{ color: theme === "dark" ? "#d1d5db" : "#1f2937" }}
              >
                database: [<span className="text-green-500">'MongoDB'</span>,{" "}
                <span className="text-green-500">'MySQL'</span>],
              </div>

              <div
                className="pl-4"
                style={{ color: theme === "dark" ? "#d1d5db" : "#1f2937" }}
              >
                passion: <span className="text-purple-400 text-xl">∞</span>
              </div>

              <div className="text-yellow-500">{"}"}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

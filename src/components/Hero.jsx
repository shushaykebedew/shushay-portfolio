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

  // Button helper with slow hover transition
  const buttonClass = (theme, type = "outline") =>
    type === "outline"
      ? `inline-flex items-center gap-2 px-4 py-2 rounded-2xl border ${
          theme === "dark"
            ? "border-gray-700 text-gray-100"
            : "border-gray-300 text-gray-700"
        } transform transition-all duration-700 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white`
      : `inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600 text-white transform transition-all duration-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500`;

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
            className={`inline-flex items-center gap-2 mb-4 rounded-full border px-3 py-1 text-xs font-semibold`}
            style={{
              backgroundColor: theme === "dark" ? "#1f2937" : "#e0f2fe",
              color: theme === "dark" ? "#60a5fa" : "#0c4a6e",
            }}
            variants={itemVariants}
          >
            <FaGlobe size={14} /> Full Stack Developer
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
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } mb-6 max-w-xl leading-loose`}
            variants={itemVariants}
          >
            A passionate
            <strong>
              <em> Full Stack Developer </em>
            </strong>
            building scalable and user-friendly web applications. Focused on
            performance, clean architecture, and maintainable code. Turning
            ideas into reliable digital products that deliver real value.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
            <a
              href="https://github.com/shushaykebedew"
              target="_blank"
              rel="noreferrer"
              className={buttonClass(theme)}
            >
              <FaGithub size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shushay-kebedew/"
              target="_blank"
              rel="noreferrer"
              className={buttonClass(theme)}
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a
              href="/SHUSHAY_KEBEDEW_CV.pdf"
              target="_blank"
              className={buttonClass(theme, "filled")}
            >
              <FileText size={18} /> Resume
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
                skills: [<span className="text-green-500">'React'</span>,{" "}
                <span className="text-green-500">'Node'</span>,{" "}
                <span className="text-green-500">'Next.js'</span>...],
              </div>

              <div
                className="pl-4"
                style={{ color: theme === "dark" ? "#d1d5db" : "#1f2937" }}
              >
                hardWorker: <span className="text-purple-500">true</span>
              </div>

              <div className="text-yellow-500">{"}"}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

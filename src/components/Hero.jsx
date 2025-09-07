import React from "react";
import HeroImg from "../assets/hero-img.jpg";
import { Globe, Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ theme }) {
  // Animation for buttons
  const buttonsVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8 } },
  };

  return (
    <section id="home" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 mb-4 rounded-full border px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: theme === "dark" ? "#1f2937" : "#e0f2fe",
              color: theme === "dark" ? "#60a5fa" : "#0c4a6e",
            }}
          >
            <Globe size={14} /> Full Stack Developer
          </div>

          {/* Title with original gradient */}
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Shushay
            </span>
          </motion.h1>

          <motion.p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A passionate Full Stack Developer creating scalable, efficient, and
            user-friendly web applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-3"
            variants={buttonsVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="https://github.com/shushaykebedew"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border ${
                theme === "dark"
                  ? "border-gray-700 hover:bg-gray-900 text-gray-100"
                  : "border-gray-300 hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shushay-kebedew/"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border ${
                theme === "dark"
                  ? "border-gray-700 hover:bg-gray-900 text-gray-100"
                  : "border-gray-300 hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="/SHUSHAY_KEBEDEW_CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ y: -5 }}
        >
          <div
            className={`rounded-2xl border shadow-lg overflow-hidden w-72 h-72 md:w-80 md:h-100 flex items-center justify-center`}
            style={{ borderColor: theme === "dark" ? "#1f2937" : "#e5e7eb" }}
          >
            <img
              src={HeroImg}
              alt="Shushay"
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

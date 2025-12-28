import AboutImg from "../assets/me.png";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function About({ theme }) {
  const textColor = theme === "dark" ? "#d1d5db" : "#555"; // paragraph text
  const eyebrowColor = theme === "dark" ? "#9ca3af" : "#6b7280"; // small text
  const borderColor = theme === "dark" ? "#1f2937" : "#e5e7eb"; // image border
  const iconColor = theme === "dark" ? "#60a5fa" : "#0c4a6e";

  const skills = [
    "Building efficient and scalable web applications.",
    "Collaborating on challenging projects that push creativity.",
    "Exploring books to expand knowledge and inspiration.",
    "Hiking and exploring nature for energy and creativity.",
  ];

  // Variants for skill items
  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5 + i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div
            className="w-56 h-56 rounded-full border shadow-md flex items-center justify-center overflow-hidden"
            style={{ borderColor }}
          >
            <img
              src={AboutImg}
              alt="Shushay"
              className="w-full h-full "
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            className="text-sm text-center uppercase tracking-widest mb-2"
            style={{ color: eyebrowColor }}
          >
            About Me
          </p>
          <h2
            className="text-2xl text-center sm:text-3xl font-extrabold mb-4"
            style={{ color: theme === "dark" ? "#f9fafb" : "#111827" }}
          >
            Who I Am
          </h2>
          <div className="space-y-3" style={{ color: textColor }}>
            <p>
              Hi! I'm <strong>Shushay Kebedew</strong>, a passionate Frontend
              Developer focused on building modern, responsive, and
              user-friendly web interfaces. I specialize in React, Next.js,
              Tailwind CSS, and TypeScript, with a strong emphasis on clean UI,
              performance, and accessibility.
            </p>

            <ul className="space-y-1">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <CheckCircle size={18} color={iconColor} className="mt-1" />
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>

            <p>
              Want to know more about me or collaborate on a project?{" "}
              <a
                href="#contact"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:underline"
              >
                Let’s connect!
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

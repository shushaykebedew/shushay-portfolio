import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Architecture",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 94 },
      { name: "shadcn/ui", level: 82 },
      { name: "i18n (next-intl / i18next)", level: 86 },
    ],
  },
  {
    title: "State & Data Handling",
    skills: [
      { name: "React Hook Form", level: 90 },
      { name: "Zustand", level: 85 },
      { name: "TanStack Query", level: 87 },
      { name: "TanStack Table", level: 85 },
      { name: "Axios", level: 90 },
    ],
  },

  {
    title: "Core Programming Skills",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 86 },
      { name: "Python", level: 80 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "UX, Performance & Design",
    skills: [
      { name: "Responsive Design", level: 92 },
      { name: "Accessibility (a11y)", level: 88 },
      { name: "Performance Optimization", level: 86 },
      { name: "Figma → UI Implementation", level: 95 },
    ],
  },
  {
    title: "Development Workflow",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "ESLint / Prettier", level: 90 },
      { name: "Vite / Next Build Tools", level: 88 },
    ],
  },
];

export default function Skills({ theme }) {
  const textColor = theme === "dark" ? "#f9fafb" : "#111827";
  const subTextColor = theme === "dark" ? "#d1d5db" : "#6b7280";
  const bgColor = theme === "dark" ? "#0f172a" : "#ffffff";
  const borderColor = theme === "dark" ? "#1e293b" : "#e5e7eb";

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p
            className="text-sm uppercase tracking-widest mb-2"
            style={{ color: subTextColor }}
          >
            My Skills
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: textColor }}
          >
            Tools & Technologies
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map(({ title, experience, skills }) => (
            <motion.div
              key={title}
              variants={item}
              className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
            >
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: textColor }}
              >
                {title}
              </h3>
              <div
                className="h-px w-full my-3"
                style={{ backgroundColor: borderColor }}
              />
              <div className="space-y-5 mt-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div
                      className="flex justify-between mb-1 text-sm font-medium"
                      style={{ color: textColor }}
                    >
                      <span>{name}</span>
                      <span>{level}%</span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full overflow-hidden"
                      style={{
                        backgroundColor:
                          theme === "dark" ? "#1f2937" : "#e5e7eb",
                      }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          width: `${level}%`,
                          background:
                            "linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)",
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

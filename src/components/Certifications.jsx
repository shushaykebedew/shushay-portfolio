import { Award, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    provider: "Udacity",
    courses: [
      {
        title: "Artificial Intelligence Fundamentals",
        year: "Nov, 2024",
        description: "Comprehensive introduction to artificial intelligence concepts and applications",
        link: "https://www.udacity.com/certificate/e/c5ebe0a0-a194-11ef-bf5c-f317fe67258c"
      },
      {
        title: "Android Developer Fundamentals",
        year: "Aug, 2024",
        description: "Mobile app development using Android SDK and modern development practices",
        link: "https://www.udacity.com/certificate/e/c7597966-5333-11ef-bc99-9ba0ba49434b"
      },
      {
        title: "Data Analysis Fundamentals",
        year: "Aug, 2024",
        description: "Data processing, visualization, and statistical analysis techniques",
        link: "https://www.udacity.com/certificate/e/d2dc9eca-555f-11ef-b96d-6b68703c85f4"
      },
      {
        title: "Programming Fundamentals",
        year: "Aug, 2024",
        description: "Core programming concepts and software development principles",
        link: "https://www.udacity.com/certificate/e/1f0334d2-4b81-11ef-b710-af2d0fec3e19"
      },
    ],
  },
  {
    provider: "Coursera",
    courses: [
      {
        title: "Machine Learning Specialization",
        year: "Feb, 2026",
        description: "an online course authorized by DeepLearning.AI and Stanford University and offered through Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/3KO9YDGTRD7G"
      },
       {
        title: "Advanced Learning Algorithms",
        year: "Mar, 2026",
        description: "an online course authorized by DeepLearning.AI and Stanford University and offered through Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/J0ZHPQHYFRJJ"
      }, {
        title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
        year: "Mar, 2026",
        description: "an online course authorized by DeepLearning.AI and Stanford University and offered through Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/JO3ILQ2WJ2XX"
      },
    ],
  },
];

export default function Certifications({ theme }) {
  const textColor = theme === "dark" ? "#f1f5f9" : "#0f172a";
  const subTextColor = theme === "dark" ? "#cbd5e1" : "#475569";
  const bgColor = theme === "dark" ? "#1e293b" : "#ffffff";
  const borderColor = theme === "dark" ? "#334155" : "#cbd5e1";
  const iconColor = theme === "dark" ? "#60a5fa" : "#1e40af";

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const courseVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="certifications" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm uppercase tracking-widest mb-3 font-semibold"
            style={{ color: subTextColor }}
          >
            Certifications
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: textColor }}
          >
            Professional Development
          </h2>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {certifications.map(({ provider, courses }, providerIndex) => (
            <motion.div
              key={provider}
              variants={itemVariants}
              className="p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
            >
              {/* Provider Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: theme === "dark" ? "#374151" : "#e0f2fe",
                  }}
                >
                  <Award size={24} color={iconColor} />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: textColor }}
                  >
                    {provider}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: subTextColor }}
                  >
                    {courses.length} {courses.length === 1 ? 'Course' : 'Courses'} Completed
                  </p>
                </div>
              </div>

              {/* Courses List */}
              <div className="space-y-4">
                {courses.map(({ title, year, description, link }, courseIndex) => (
                  <motion.div
                    key={title}
                    custom={courseIndex}
                    variants={courseVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-4 rounded-xl border hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-200"
                    style={{
                      backgroundColor: theme === "dark" ? "#111827" : "#f8fafc",
                      borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4
                        className="font-semibold text-base"
                        style={{ color: textColor }}
                      >
                        {title}
                      </h4>
                      {year && (
                        <div className="flex  items-center gap-1 text-xs">
                          <Calendar size={14} color={iconColor} />
                          <span style={{ color: subTextColor }} className="whitespace-nowrap">{year}</span>
                        </div>
                      )}
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: subTextColor }}
                    >
                      {description}
                    </p>
                    {link && (
                      <div className="flex justify-end">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:scale-105"
                          style={{
                            color: theme === "dark" ? "#60a5fa" : "#0c4a6e",
                            borderColor: theme === "dark" ? "#60a5fa" : "#0c4a6e",
                            backgroundColor: "transparent",
                            outline: "none",
                            boxShadow: "none",
                          }}
                          aria-label={`View ${title} certificate`}
                          onFocus={(e) => e.target.style.outline = 'none'}
                          onBlur={(e) => e.target.style.outline = 'none'}
                        >
                          <ExternalLink size={12} strokeWidth={2} />
                          View Certificate
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
}
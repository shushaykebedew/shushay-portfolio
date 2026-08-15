import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import LazyImage from "./LazyImage";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  demoUrl,
  githubUrl,
  index,
  projectVariants,
  isFeatured = false,
}) {
  const linkIconClass = "w-3.5 h-3.5 flex-shrink-0";
  const githubIconClass = "w-3.5 h-3.5 flex-shrink-0";

  return (
    <motion.article
      className={`group relative glass-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col h-full glow-hover ${
        isFeatured ? "md:col-span-2 lg:grid lg:grid-cols-12 lg:gap-6 items-stretch" : ""
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      custom={index}
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      {/* Index Number Badge */}
      <div className="absolute top-3 sm:top-4 2xl:top-5 left-3 sm:left-4 2xl:left-5 z-20 glass-card-strong px-2.5 sm:px-3 2xl:px-3.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] 2xl:text-xs font-mono font-extrabold text-indigo-600 dark:text-indigo-400 shadow-md">
        #{String(index + 1).padStart(2, "0")}
      </div>

      {/* Image Preview Container */}
      <div
        className={`relative overflow-hidden w-full ${
          isFeatured
            ? "lg:col-span-7 h-52 xs:h-64 sm:h-80 lg:h-auto min-h-[220px] sm:min-h-[280px] 2xl:min-h-[340px]"
            : "h-48 xs:h-56 sm:h-60 2xl:h-72"
        }`}
      >
        <LazyImage
          src={image}
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div
        className={`p-5 sm:p-6 lg:p-7 2xl:p-8 flex flex-col flex-1 ${
          isFeatured ? "lg:col-span-5 lg:flex lg:flex-col lg:justify-between" : ""
        }`}
      >
        <div>
          <div className="flex items-start justify-between gap-2 mb-2 2xl:mb-3">
            <h3 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold leading-snug text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {title}
            </h3>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-500 transition-colors p-1 flex-shrink-0"
                aria-label={`Open external link for ${title}`}
              >
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" />
              </a>
            )}
          </div>

          <p className="text-xs sm:text-sm 2xl:text-base mb-5 2xl:mb-6 leading-relaxed font-medium text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>

        <div>
          {/* Action Buttons */}
          {(demoUrl || githubUrl) && (
            <div className="flex flex-wrap gap-2 sm:gap-2.5 2xl:gap-3 mb-5 2xl:mb-6">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 2xl:gap-2 px-3.5 sm:px-4 2xl:px-5 py-1.5 sm:py-2 2xl:py-2.5 rounded-xl 2xl:rounded-2xl text-xs 2xl:text-sm font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 focus:outline-none flex-1 sm:flex-initial text-center"
                  aria-label={`View live demo for ${title}`}
                >
                  <ExternalLink className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" aria-hidden="true" />
                  <span>Live Demo</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 2xl:gap-2 px-3.5 sm:px-4 2xl:px-5 py-1.5 sm:py-2 2xl:py-2.5 rounded-xl 2xl:rounded-2xl text-xs 2xl:text-sm font-semibold glass-card text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105 focus:outline-none flex-1 sm:flex-initial text-center"
                  aria-label={`View GitHub repository for ${title}`}
                >
                  <Github className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 2xl:gap-2 pt-3.5 2xl:pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 sm:px-2.5 2xl:px-3 py-0.5 sm:py-1 2xl:py-1.5 text-[10px] sm:text-[11px] 2xl:text-xs font-medium rounded-lg 2xl:rounded-xl bg-slate-100/80 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

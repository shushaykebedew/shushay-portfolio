import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
}) {
  return (
    <motion.article
      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
      custom={index}
      variants={projectVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative overflow-hidden">
        <LazyImage
          src={image}
          alt={`${title} project screenshot`}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-3 leading-tight text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="text-sm mb-5 leading-relaxed font-medium flex-1 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        {(demoUrl || githubUrl) && (
          <div className="flex gap-3 mb-5">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-500 dark:hover:bg-blue-400"
                aria-label={`View live demo for ${title}`}
              >
                <FaExternalLinkAlt size={13} aria-hidden="true" /> Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600"
                aria-label={`View GitHub repository for ${title}`}
              >
                <FaGithub size={16} aria-hidden="true" /> GitHub
              </a>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-slate-100 dark:border-slate-700">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs rounded-full font-semibold border bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 transition-all duration-200 hover:scale-105"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

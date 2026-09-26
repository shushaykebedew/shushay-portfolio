import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Play, Lock } from "lucide-react";
import LazyImage from "./LazyImage";

export default function ProjectCard({
  title,
  description,
  image,
  videoUrl,
  tech,
  demoUrl,
  githubUrl,
  index,
  isFeatured = false,
}) {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current && videoReady) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      className={`group relative glass-card rounded-3xl overflow-hidden flex flex-col h-full glow-hover border border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 ${
        isFeatured ? "md:col-span-2 lg:grid lg:grid-cols-12 lg:gap-6 items-stretch" : ""
      }`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Index Number Badge */}
      <div className="absolute top-4 left-4 z-20 glass-card-strong px-3 py-1 rounded-full text-xs font-mono font-black text-cyan-700 dark:text-cyan-400 border border-slate-200 dark:border-cyan-500/30 shadow-md">
        #{String(index + 1).padStart(2, "0")}
      </div>

      {/* Video preview badge */}
      {videoUrl && (
        <AnimatePresence>
          {!hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 z-20 flex items-center gap-1.5 glass-card-strong px-3 py-1 rounded-full text-xs font-bold text-cyan-700 dark:text-cyan-400 border border-slate-200 dark:border-cyan-500/30 shadow-md pointer-events-none"
            >
              <Play className="w-3 h-3 fill-current text-cyan-600 dark:text-cyan-400" />
              <span>Preview</span>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Image / Video Preview Container */}
      <div
        className={`relative overflow-hidden w-full ${
          isFeatured
            ? "lg:col-span-7 h-56 xs:h-64 sm:h-80 lg:h-auto min-h-[240px] sm:min-h-[300px] 2xl:min-h-[360px]"
            : "h-52 xs:h-60 sm:h-64 2xl:h-76"
        }`}
      >
        {/* Static image */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: videoUrl && hovered && videoReady ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <LazyImage
            src={image}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>

        {/* Video element */}
        {videoUrl && (
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => {
              setVideoReady(true);
              if (hovered) {
                videoRef.current?.play().catch(() => {});
              }
            }}
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ opacity: hovered && videoReady ? 1 : 0, transition: "opacity 0.3s ease" }}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div
        className={`p-6 sm:p-7 2xl:p-8 flex flex-col flex-1 ${
          isFeatured ? "lg:col-span-5 lg:flex lg:flex-col lg:justify-between" : ""
        }`}
      >
        <div>
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black leading-snug text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors p-1 flex-shrink-0"
                aria-label={`Open external link for ${title}`}
              >
                <ArrowUpRight className="w-5 h-5 2xl:w-6 2xl:h-6" />
              </a>
            )}
          </div>

          <p className="text-xs sm:text-sm 2xl:text-base mb-6 leading-relaxed font-semibold text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>

        <div>
          {/* Action Buttons */}
          {(demoUrl || githubUrl) ? (
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:scale-105 focus:outline-none flex-1 sm:flex-initial text-center"
                  aria-label={`View live demo for ${title}`}
                >
                  <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>Live Demo</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold glass-card text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:scale-105 focus:outline-none flex-1 sm:flex-initial text-center"
                  aria-label={`View GitHub repository for ${title}`}
                >
                  <Github className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-6 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 w-fit">
              <Lock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 flex-shrink-0" aria-hidden="true" />
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap">
                Private / Enterprise Work
              </span>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] 2xl:text-xs font-extrabold rounded-lg bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-cyan-300 border border-slate-200 dark:border-cyan-500/20"
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

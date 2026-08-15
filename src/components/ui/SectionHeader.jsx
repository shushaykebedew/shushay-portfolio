import { motion } from "framer-motion";

export default function SectionHeader({ subtitle, title, description, align = "center" }) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      className={`${alignClass} mb-10 sm:mb-14 lg:mb-16 2xl:mb-20 max-w-3xl 2xl:max-w-4xl mx-auto px-2 sm:px-0`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {subtitle && (
        <p className="text-[11px] sm:text-xs 2xl:text-sm uppercase tracking-[0.2em] mb-2.5 sm:mb-3.5 font-bold text-indigo-500 dark:text-indigo-400">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mb-3 sm:mb-4 2xl:mb-5 text-slate-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg leading-relaxed font-medium text-slate-500 dark:text-slate-400 max-w-2xl 2xl:max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}

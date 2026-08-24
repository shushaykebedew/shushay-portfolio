import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border-t-2 border-r-2 border-transparent"
          style={{ borderTopColor: "var(--brand-primary)", borderRightColor: "var(--brand-accent)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner rotating ring (opposite direction) */}
        <motion.div
          className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-b-2 border-l-2 border-transparent"
          style={{ borderBottomColor: "var(--brand-secondary)", borderLeftColor: "var(--brand-primary)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Glowing backdrop */}
        <motion.div
          className="absolute w-12 h-12 bg-indigo-500/20 blur-xl rounded-full"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center Text */}
        <motion.span
          className="relative text-2xl sm:text-3xl font-black brand-gradient-text tracking-wider z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SK
        </motion.span>
      </div>

      {/* Loading Text */}
      <motion.div
        className="mt-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="text-xs sm:text-sm font-semibold text-slate-400 tracking-[0.2em] uppercase">
          Loading
        </div>

        {/* Progress dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-indigo-500"
              animate={{ y: [0, -6, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

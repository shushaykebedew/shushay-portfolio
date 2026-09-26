import { motion } from "framer-motion";

const DEFAULT_ORBS = [
  {
    color: "from-cyan-500/25 to-blue-600/20",
    darkColor: "dark:from-cyan-500/15 dark:to-blue-600/10",
    size: "w-[260px] xs:w-[340px] sm:w-[450px] lg:w-[550px] h-[260px] xs:h-[340px] sm:h-[450px] lg:h-[550px]",
    position: "-top-24 -left-24 sm:-top-36 sm:-left-36",
    delay: 0,
  },
  {
    color: "from-emerald-500/20 to-teal-500/15",
    darkColor: "dark:from-emerald-500/12 dark:to-teal-500/8",
    size: "w-[240px] xs:w-[300px] sm:w-[400px] lg:w-[450px] h-[240px] xs:h-[300px] sm:h-[400px] lg:h-[450px]",
    position: "-bottom-20 -right-20 sm:-bottom-32 sm:-right-32",
    delay: 5,
  },
  {
    color: "from-purple-500/15 to-cyan-500/10",
    darkColor: "dark:from-purple-500/8 dark:to-cyan-500/5",
    size: "w-[200px] sm:w-[300px] lg:w-[350px] h-[200px] sm:h-[300px] lg:h-[350px]",
    position: "top-1/3 right-1/4",
    delay: 10,
  },
];

export default function GradientOrbs({ orbs = DEFAULT_ORBS, className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none w-full max-w-[100vw] ${className}`} aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.size} ${orb.position} rounded-full bg-gradient-to-br ${orb.color} ${orb.darkColor} blur-2xl sm:blur-3xl`}
          animate={{
            x: [0, 25, -20, 15, 0],
            y: [0, -20, 15, 20, 0],
            scale: [1, 1.05, 0.95, 1.03, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}

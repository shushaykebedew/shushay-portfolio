import { motion } from "framer-motion";

const DEFAULT_ORBS = [
  {
    color: "from-indigo-500/20 to-violet-500/20",
    darkColor: "dark:from-indigo-500/10 dark:to-violet-500/10",
    size: "w-[260px] xs:w-[340px] sm:w-[450px] lg:w-[550px] h-[260px] xs:h-[340px] sm:h-[450px] lg:h-[550px]",
    position: "-top-24 -left-24 sm:-top-36 sm:-left-36",
    delay: 0,
  },
  {
    color: "from-violet-500/15 to-fuchsia-500/15",
    darkColor: "dark:from-violet-500/8 dark:to-fuchsia-500/8",
    size: "w-[240px] xs:w-[300px] sm:w-[400px] lg:w-[450px] h-[240px] xs:h-[300px] sm:h-[400px] lg:h-[450px]",
    position: "-bottom-20 -right-20 sm:-bottom-32 sm:-right-32",
    delay: 5,
  },
  {
    color: "from-fuchsia-500/10 to-pink-500/10",
    darkColor: "dark:from-fuchsia-500/5 dark:to-pink-500/5",
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
            x: [0, 20, -15, 10, 0],
            y: [0, -15, 10, 15, 0],
            scale: [1, 1.04, 0.96, 1.02, 1],
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

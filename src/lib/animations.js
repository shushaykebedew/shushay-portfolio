/**
 * Shared framer-motion animation variants used across section components.
 * Import from here instead of redefining locally.
 */

/** Staggered card entrance — used in Experience, Education, Contact, Footer, Projects */
export const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

/** Footer section entrance — slightly shorter y travel */
export const sectionVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
  }),
};

/** Stagger container wrapper */
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** Slide-in from left — used in About expertise list items */
export const slideInLeft = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

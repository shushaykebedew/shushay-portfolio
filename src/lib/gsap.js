import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/** Check if user prefers reduced motion */
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/** Reusable ScrollTrigger entrance animation for sections */
export const animateSectionHeading = (target, trigger) => {
  if (prefersReducedMotion() || !target) return;

  return gsap.fromTo(
    target,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger || target,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

/** Reusable ScrollTrigger stagger reveal for cards/elements */
export const animateStaggerCards = (elements, trigger, stagger = 0.1) => {
  if (prefersReducedMotion() || !elements || elements.length === 0) return;

  return gsap.fromTo(
    elements,
    { opacity: 0, y: 40, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.65,
      stagger: stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger || elements[0],
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

/** Number Count-Up Animation using GSAP */
export const animateCountUp = (element, targetValue, duration = 1.5) => {
  if (!element) return;
  if (prefersReducedMotion()) {
    element.textContent = targetValue;
    return;
  }

  const obj = { val: 0 };
  return gsap.to(obj, {
    val: targetValue,
    duration: duration,
    ease: "power2.out",
    onUpdate: () => {
      if (element) {
        element.textContent = Math.floor(obj.val);
      }
    },
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });
};

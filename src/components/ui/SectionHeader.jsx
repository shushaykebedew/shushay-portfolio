import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

export default function SectionHeader({ subtitle, title, description, align = "center" }) {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const lineRef = useRef(null);

  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 15, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.7)" }
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2"
        );
      }

      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { width: 0, opacity: 0 },
          { width: align === "center" ? "64px" : "48px", opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [align]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col ${alignClass} mb-12 sm:mb-16 lg:mb-20 2xl:mb-24 max-w-3xl 2xl:max-w-4xl mx-auto px-2 sm:px-0`}
    >
      {subtitle && (
        <div
          ref={subtitleRef}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] sm:text-xs 2xl:text-sm uppercase tracking-[0.18em] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 mb-4 border border-blue-200/70 dark:border-blue-900/70"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span>{subtitle}</span>
        </div>
      )}

      <h2
        ref={titleRef}
        className="text-2xl xs:text-3xl sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl font-extrabold text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]"
      >
        {title}
      </h2>

      {/* Glowing Divider Line */}
      <div
        ref={lineRef}
        className="h-0.5 w-12 rounded-full bg-blue-600 dark:bg-blue-400 my-4"
      />

      {description && (
        <p
          ref={descRef}
          className="text-sm sm:text-base 2xl:text-lg leading-relaxed font-normal text-slate-600 dark:text-slate-400 max-w-2xl 2xl:max-w-3xl"
        >
          {description}
        </p>
      )}
    </div>
  );
}

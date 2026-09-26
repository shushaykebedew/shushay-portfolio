import { useEffect, useRef } from "react";
import { Briefcase, CircleCheck, Calendar } from "lucide-react";
import { experience } from "./constants";
import SectionHeader from "../ui/SectionHeader";
import { gsap } from "../../lib/gsap";

export default function Experience() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      // Animate vertical timeline line height on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      // Animate experience cards entrance
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, x: -30, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" aria-label="Professional Experience" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8">
        <SectionHeader
          subtitle="Experience"
          title={
            <>
              Professional <span className="brand-gradient-text">Journey</span>
            </>
          }
          description="My career timeline delivering impactful solutions in fast-paced software engineering roles."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 xs:pl-8 sm:pl-10 2xl:pl-14 space-y-8 sm:space-y-12 2xl:space-y-16">
          {/* Base background line */}
          <div className="absolute left-2 xs:left-2.5 sm:left-3 2xl:left-4 top-4 bottom-4 w-1 bg-slate-200 dark:bg-slate-800/60 rounded-full" />

          {/* GSAP Scroll-Triggered Animated Fill Line */}
          <div
            ref={lineRef}
            className="absolute left-2 xs:left-2.5 sm:left-3 2xl:left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-emerald-500 rounded-full shadow-md shadow-cyan-500/50"
          />

          {experience.map(({ role, company, year, details }, index) => (
            <div
              key={role + company}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[29px] xs:-left-[31px] sm:-left-[37px] 2xl:-left-[47px] top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 shadow-lg shadow-cyan-500/30 group-hover:scale-125 group-hover:border-emerald-500 transition-all duration-300 flex items-center justify-center z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 group-hover:bg-emerald-500" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-5 sm:p-7 md:p-8 2xl:p-10 rounded-3xl 2xl:rounded-4xl glow-hover relative overflow-hidden border border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-6 pb-4 sm:pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 2xl:w-15 2xl:h-15 rounded-2xl flex items-center justify-center flex-shrink-0 bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 shadow-md">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-w-0">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                        {role}
                      </h3>
                      <p className="text-xs sm:text-sm 2xl:text-base font-extrabold text-cyan-700 dark:text-cyan-400 mt-1">
                        {company}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-cyan-950/60 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-cyan-500/30 self-start sm:self-center flex-shrink-0 shadow-sm">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      <span>{year}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {Array.isArray(details) ? (
                    details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-sm 2xl:text-base leading-relaxed font-semibold text-slate-700 dark:text-slate-300"
                      >
                        <CircleCheck
                          className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0 mt-0.5 text-cyan-600 dark:text-cyan-400"
                          aria-hidden="true"
                        />
                        <span>{detail}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start gap-3 text-xs sm:text-sm 2xl:text-base leading-relaxed font-semibold text-slate-700 dark:text-slate-300">
                      <CircleCheck
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0 mt-0.5 text-cyan-600 dark:text-cyan-400"
                        aria-hidden="true"
                      />
                      <span>{details}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

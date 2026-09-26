import { useEffect, useRef } from "react";
import { GraduationCap, Calendar, CircleCheck } from "lucide-react";
import { education } from "./constants";
import SectionHeader from "../ui/SectionHeader";
import { gsap } from "../../lib/gsap";

export default function Education() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            delay: idx * 0.15,
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
    <section ref={sectionRef} id="education" aria-label="Education and Academic Background" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8">
        <SectionHeader
          subtitle="Education"
          title={
            <>
              Academic <span className="brand-gradient-text">Background</span>
            </>
          }
          description="Formal foundation in Information Technology and Business Management."
        />

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 2xl:gap-10 items-stretch">
          {education.map(({ degree, institute, year, details }, index) => (
            <div
              key={degree}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass-card p-6 sm:p-8 rounded-3xl 2xl:rounded-4xl glow-hover flex flex-col justify-between border border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-start gap-4 sm:gap-5 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                      {degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-extrabold text-cyan-700 dark:text-cyan-400 mt-1">
                      {institute}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mt-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" aria-hidden="true" />
                      <span>{year}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <CircleCheck
                    className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-xs sm:text-sm leading-relaxed font-semibold text-slate-700 dark:text-slate-300">
                    {details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

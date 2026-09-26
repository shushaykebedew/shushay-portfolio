import { useEffect, useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { certifications } from "./constants";
import SectionHeader from "../ui/SectionHeader";
import { gsap } from "../../lib/gsap";

export default function Certifications() {
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
            delay: (idx % 3) * 0.12,
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
    <section ref={sectionRef} id="certifications" aria-label="Certifications and Credentials" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8">
        <SectionHeader
          subtitle="Certifications"
          title={
            <>
              Continuous <span className="brand-gradient-text">Learning</span>
            </>
          }
          description="Verified credentials in AI, machine learning, mobile development, cybersecurity, and software fundamentals."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10 items-stretch">
          {certifications.map(({ provider, courses }, index) => (
            <div
              key={provider}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass-card p-5 sm:p-6 lg:p-7 rounded-3xl 2xl:rounded-4xl glow-hover flex flex-col h-full border border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Provider Header */}
              <div className="flex items-center gap-3.5 2xl:gap-4 mb-5 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20 flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg 2xl:text-xl font-black text-slate-900 dark:text-white">
                    {provider}
                  </h3>
                  <p className="text-xs 2xl:text-sm font-bold text-cyan-700 dark:text-cyan-400">
                    {courses.length} {courses.length === 1 ? "Credential" : "Credentials"}
                  </p>
                </div>
              </div>

              {/* Courses List */}
              <div className="space-y-3.5 flex-1 flex flex-col">
                {courses.map(({ title, year, description, link }) => (
                  <div
                    key={title}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h4 className="font-bold text-xs sm:text-sm 2xl:text-base text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                          {title}
                        </h4>
                        {year && (
                          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-cyan-700 dark:text-cyan-400 flex-shrink-0">
                            <Calendar className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                            <span>{year}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-xs 2xl:text-sm leading-relaxed font-semibold text-slate-600 dark:text-slate-400 mb-3">
                        {description}
                      </p>
                    </div>

                    {link && (
                      <div className="flex justify-end pt-1">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-black text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors focus:outline-none"
                          aria-label={`View ${title} certificate`}
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

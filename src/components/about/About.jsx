import { useEffect, useRef } from "react";
import AboutImg from "../../assets/profile.jpg";
import { CircleCheck, Sparkles, Code, Briefcase, Award } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { gsap } from "../../lib/gsap";

const STATS = [
  { label: "Years Experience", value: 2, suffix: "+", icon: Briefcase },
  { label: "Projects Built", value: 20, suffix: "+", icon: Code },
  { label: "Certifications", value: 8, suffix: "+", icon: Award },
];

export default function About() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const statsContainerRef = useRef(null);
  const contentColRef = useRef(null);
  const statValRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      // Image & Left Column entrance
      gsap.fromTo(
        imageWrapperRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: "top 80%",
          },
        }
      );

      // Right Column Content Stagger
      gsap.fromTo(
        contentColRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentColRef.current,
            start: "top 80%",
          },
        }
      );

      // GSAP Count-Up for Stats
      statValRefs.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = STATS[index].value;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetValue,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            if (el) el.textContent = Math.floor(obj.val) + STATS[index].suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" aria-label="About Me" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8">
        <SectionHeader
          subtitle="About Me"
          title={
            <>
              Who I <span className="brand-gradient-text">Am</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 2xl:gap-24 items-center">
          {/* Image & Stats Column */}
          <div className="lg:col-span-5 2xl:col-span-5 flex flex-col items-center justify-center">
            <div ref={imageWrapperRef} className="relative group">
              {/* Animated decorative gradient glow backdrop */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-500 opacity-30 dark:opacity-50 blur-xl group-hover:opacity-75 transition duration-700 animate-glow-pulse" />

              <div className="relative w-52 h-52 xs:w-60 xs:h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 rounded-full p-2 sm:p-2.5 2xl:p-3 glass-card-strong flex items-center justify-center border-2 border-cyan-500/30">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 ring-4 ring-cyan-500/30">
                  <img
                    src={AboutImg}
                    alt="Shushay Kebedew – Full Stack Developer"
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition duration-500 group-hover:scale-105"
                    style={{ transform: "scale(1.15) translateY(-6%)" }}
                    loading="lazy"
                    fetchPriority="low"
                    width="320"
                    height="320"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 glass-card px-3.5 sm:px-4 py-2 rounded-2xl flex items-center gap-2 shadow-2xl border border-cyan-500/40 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-spin-slow flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-black text-cyan-700 dark:text-cyan-300 whitespace-nowrap">
                  Full Stack Engineer
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div ref={statsContainerRef} className="grid grid-cols-3 gap-3.5 sm:gap-4 2xl:gap-6 w-full mt-8 sm:mt-10 2xl:mt-12">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-card p-3 sm:p-4 2xl:p-6 rounded-2xl sm:rounded-3xl text-center flex flex-col items-center justify-center glow-hover border border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 text-cyan-600 dark:text-cyan-400 mb-1.5" />
                    <span
                      ref={(el) => (statValRefs.current[i] = el)}
                      className="text-lg sm:text-2xl 2xl:text-3xl font-black text-slate-900 dark:text-white font-mono"
                    >
                      0{stat.suffix}
                    </span>
                    <span className="text-[10px] sm:text-xs 2xl:text-sm text-slate-600 dark:text-slate-400 font-extrabold leading-tight mt-1">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Content */}
          <div ref={contentColRef} className="lg:col-span-7 2xl:col-span-7 space-y-5 sm:space-y-6 2xl:space-y-8">
            <div className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-300">
              <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl leading-relaxed font-semibold">
                I'm{" "}
                <strong className="text-slate-900 dark:text-white font-black text-cyan-700 dark:text-cyan-400">
                  Shushay Kebedew
                </strong>
                , a dedicated Full Stack Developer with deep expertise in crafting
                modern, responsive, and scalable web applications. I specialize in
                React, Next.js, Node.js, and database ecosystems, bringing ideas to
                life with clean architecture and exceptional attention to detail.
              </p>

              <p className="leading-relaxed text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-600 dark:text-slate-400 font-medium">
                My approach unites engineering precision with pragmatic business
                thinking. I thrive in translating complex technical requirements
                into frictionless digital products that are fast, accessible, and
                maintainable.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-6 pt-1">
              <div className="glass-card p-4.5 sm:p-6 2xl:p-7 rounded-2xl 2xl:rounded-3xl glow-hover border border-slate-200 dark:border-cyan-500/20">
                <h3 className="font-black mb-3 text-sm sm:text-base 2xl:text-lg text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-sm shadow-cyan-400/50" />
                  Frontend Architecture
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm 2xl:text-base font-bold text-slate-700 dark:text-slate-300">
                  {[
                    "React & Next.js Ecosystem",
                    "Pixel-Perfect Responsive UI/UX",
                    "TypeScript & Modern State Management",
                  ].map((skill, index) => (
                    <li key={index} className="flex items-center gap-2.5">
                      <CircleCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-4.5 sm:p-6 2xl:p-7 rounded-2xl 2xl:rounded-3xl glow-hover border border-slate-200 dark:border-emerald-500/20">
                <h3 className="font-black mb-3 text-sm sm:text-base 2xl:text-lg text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400/50" />
                  Backend & Cloud Data
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm 2xl:text-base font-bold text-slate-700 dark:text-slate-300">
                  {[
                    "Robust RESTful APIs & Microservices",
                    "Database Modeling (MongoDB, SQL)",
                    "Authentication, JWT & Cloud Deployment",
                  ].map((skill, index) => (
                    <li key={index} className="flex items-center gap-2.5">
                      <CircleCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mindset Banner */}
            <div className="glass-card p-4.5 sm:p-6 2xl:p-7 rounded-2xl 2xl:rounded-3xl border-l-4 border-l-cyan-600 dark:border-l-cyan-400 bg-slate-100/80 dark:bg-slate-900/40">
              <h4 className="font-black mb-2 text-xs sm:text-sm 2xl:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                Core Strengths & Mindset
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm 2xl:text-base text-slate-700 dark:text-slate-300 font-medium">
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-0.5 font-black">
                    Problem Solving
                  </strong>
                  Breaking down complex problems into modular, maintainable solutions.
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-0.5 font-black">
                    Agile Collaboration
                  </strong>
                  Clear communication, code reviews, and end-to-end ownership.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

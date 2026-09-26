import { useEffect, useRef, useState } from "react";
import { Globe, Github, Linkedin, FileText, ChevronDown, FolderKanban, Sparkles } from "lucide-react";
import TypingCode from "./TypingCode";
import GradientOrbs from "../ui/GradientOrbs";
import { gsap } from "../../lib/gsap";

const TECH_STACK = ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"];

const HERO_ORBS = [
  {
    color: "from-cyan-500/30 to-blue-600/20",
    darkColor: "dark:from-cyan-500/20 dark:to-blue-600/10",
    size: "w-[280px] xs:w-[360px] sm:w-[450px] lg:w-[550px] h-[280px] xs:h-[360px] sm:h-[450px] lg:h-[550px]",
    position: "-top-20 -left-20 sm:-top-32 sm:-left-32",
    delay: 0,
  },
  {
    color: "from-emerald-500/25 to-teal-500/15",
    darkColor: "dark:from-emerald-500/15 dark:to-teal-500/10",
    size: "w-[260px] xs:w-[320px] sm:w-[400px] lg:w-[500px] h-[260px] xs:h-[320px] sm:h-[400px] lg:h-[500px]",
    position: "-bottom-24 -right-16 sm:-bottom-48 sm:-right-24",
    delay: 6,
  },
  {
    color: "from-purple-500/20 to-cyan-500/10",
    darkColor: "dark:from-purple-500/10 dark:to-cyan-500/5",
    size: "w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    delay: 12,
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const terminalRef = useRef(null);
  const spotlightRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  // GSAP Entrance Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        leftColRef.current.children,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 }
      );

      tl.fromTo(
        terminalRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.4)" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Cursor spotlight tracking
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const handleEnter = () => setIsHoveringSection(true);
    const handleLeave = () => setIsHoveringSection(false);

    section.addEventListener("mousemove", handleMove, { passive: true });
    section.addEventListener("mouseenter", handleEnter);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseenter", handleEnter);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center scroll-mt-16 overflow-hidden py-12 sm:py-16 lg:py-24 2xl:py-32"
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ opacity: isHoveringSection ? 1 : 0 }}
        aria-hidden="true"
      >
        <div
          ref={spotlightRef}
          className="absolute rounded-full"
          style={{
            width: 550,
            height: 550,
            left: mousePos.x - 275,
            top: mousePos.y - 275,
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(16,185,129,0.05) 45%, transparent 70%)",
            transition: "left 0.08s ease-out, top 0.08s ease-out",
          }}
        />
      </div>

      {/* Background orbs */}
      <GradientOrbs orbs={HERO_ORBS} />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-8 grid lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 2xl:gap-20 items-center w-full">
        {/* Left Column */}
        <div ref={leftColRef} className="lg:col-span-7 2xl:col-span-7 flex flex-col justify-center">
          {/* Status badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 2xl:gap-4 mb-6 sm:mb-8 2xl:mb-10">
            <div className="glass-card inline-flex items-center gap-2 rounded-full px-3.5 sm:px-4.5 2xl:px-5 py-1.5 2xl:py-2 text-[10px] sm:text-xs 2xl:text-sm font-extrabold tracking-wider text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 shadow-md shadow-emerald-500/10">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>AVAILABLE FOR WORK</span>
            </div>

            <div className="glass-card inline-flex items-center gap-2 rounded-full px-3.5 sm:px-4.5 2xl:px-5 py-1.5 2xl:py-2 text-[10px] sm:text-xs 2xl:text-sm font-extrabold tracking-wider text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 shadow-md shadow-cyan-500/10">
              <Globe className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 flex-shrink-0" aria-hidden="true" />
              <span>FULL STACK DEVELOPER</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl font-black mb-4 sm:mb-6 2xl:mb-8 leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            Hi, I'm{" "}
            <span className="brand-gradient-text">Shushay</span>
          </h1>

          {/* Subtitle Tagline */}
          <div className="flex items-center gap-2 mb-4 text-cyan-700 dark:text-cyan-400 font-black text-sm sm:text-base 2xl:text-lg uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
            <span>Building Next-Gen Digital Products</span>
          </div>

          {/* Description */}
          <p className="text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 2xl:mb-10 max-w-xl 2xl:max-w-2xl text-sm sm:text-base lg:text-lg 2xl:text-xl font-medium leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-extrabold">Full Stack Engineer</strong>{" "}
            specializing in resilient frontend architectures, scalable backend services, and high-precision user interfaces. I build modern web applications with clean code and cutting-edge tech stacks.
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 2xl:gap-3 mb-8 sm:mb-10 2xl:mb-12">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="glass-card px-3 sm:px-3.5 2xl:px-4 py-1.5 2xl:py-2 rounded-xl text-xs 2xl:text-sm font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all duration-300 cursor-default shadow-sm hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 2xl:gap-4 w-full">
            {/* Primary CTA */}
            <a
              href="#projects"
              className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 2xl:px-8 2xl:py-4 rounded-2xl font-extrabold text-xs sm:text-sm 2xl:text-base bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 focus:outline-none overflow-hidden text-center"
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <FolderKanban className="relative z-10 w-4 h-4 2xl:w-5 2xl:h-5 flex-shrink-0" aria-hidden="true" />
              <span className="relative z-10">View Featured Work</span>
            </a>

            {/* Secondary CTAs */}
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 2xl:gap-4 w-full sm:w-auto">
              {[
                { href: "https://github.com/shushaykebedew", label: "GitHub", icon: Github, external: true },
                { href: "https://www.linkedin.com/in/shushay-kebedew/", label: "LinkedIn", icon: Linkedin, external: true },
                { href: "/SHUSHAY_KEBEDEW_CV.pdf", label: "Resume", icon: FileText, external: true },
              ].map(({ href, label, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group/sec relative inline-flex items-center justify-center gap-2 px-3 sm:px-5 2xl:px-6 py-3 2xl:py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm 2xl:text-base glass-card text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 focus:outline-none overflow-hidden text-center"
                >
                  <Icon className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 flex-shrink-0 text-slate-700 dark:text-slate-300" aria-hidden="true" />
                  <span className="relative z-10">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — Code Terminal */}
        <div ref={terminalRef} className="lg:col-span-5 relative w-full mt-4 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 to-emerald-500/25 dark:from-cyan-500/15 dark:to-emerald-500/15 rounded-3xl blur-2xl sm:blur-3xl animate-glow-pulse pointer-events-none" />
          <div className="relative glass-card-strong rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 glow-hover w-full overflow-hidden border border-slate-200 dark:border-cyan-500/20 shadow-2xl bg-slate-950 dark:bg-slate-950 text-slate-100">
            {/* Terminal header */}
            <div className="flex items-center justify-between mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-400/90 tracking-wide">
                shushay.config.js
              </span>
            </div>
            <TypingCode />
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors focus:outline-none group"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-black tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          SCROLL DOWN
        </span>
        <div className="animate-bounce mt-1">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" />
        </div>
      </a>
    </section>
  );
}

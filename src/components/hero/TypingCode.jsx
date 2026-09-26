import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SNIPPETS = [
  // Snippet 1 — Developer object
  {
    label: "shushay.config.js",
    lines: [
      {
        indent: false,
        segments: [
          { text: "const ", className: "text-cyan-400 font-semibold" },
          { text: "developer", className: "text-blue-400 font-semibold" },
          { text: " = ", className: "text-cyan-400" },
          { text: "{", className: "text-amber-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "name: ", className: "text-slate-300" },
          { text: "'Shushay Kebedew'", className: "text-emerald-400 font-semibold", nowrap: true },
          { text: ",", className: "text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "role: ", className: "text-slate-300" },
          { text: "'Full Stack Developer'", className: "text-emerald-400 font-semibold", nowrap: true },
          { text: ",", className: "text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "skills: ", className: "text-slate-300" },
          { text: "[", className: "text-purple-400" },
          { text: "'React'", className: "text-cyan-300" },
          { text: ", ", className: "text-slate-300" },
          { text: "'Next.js'", className: "text-cyan-300" },
          { text: ", ", className: "text-slate-300" },
          { text: "'Node.js'", className: "text-cyan-300" },
          { text: "]", className: "text-purple-400" },
          { text: ",", className: "text-slate-300" },
        ],
      },
      {
        indent: true,
        showPing: true,
        segments: [
          { text: "status: ", className: "text-slate-300" },
          { text: "'Available for Hire'", className: "text-emerald-400 font-bold", nowrap: true },
        ],
      },
      {
        indent: false,
        segments: [{ text: "}", className: "text-amber-300" }],
      },
    ],
  },
  // Snippet 2 — React component
  {
    label: "PortfolioHero.tsx",
    lines: [
      {
        indent: false,
        segments: [
          { text: "import ", className: "text-cyan-400 font-semibold" },
          { text: "{ gsap }", className: "text-blue-400" },
          { text: " from ", className: "text-cyan-400" },
          { text: "'gsap'", className: "text-emerald-400" },
          { text: ";", className: "text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [
          { text: "interface ", className: "text-cyan-400 font-semibold" },
          { text: "Developer", className: "text-blue-400 font-bold" },
          { text: " { ", className: "text-slate-300" },
          { text: "expertise", className: "text-purple-400" },
          { text: ": string[] }", className: "text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [
          { text: "export default ", className: "text-cyan-400 font-semibold" },
          { text: "function ", className: "text-blue-400 font-semibold" },
          { text: "Hero", className: "text-amber-300 font-bold" },
          { text: "() {", className: "text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "return ", className: "text-cyan-400 font-semibold" },
          { text: "(", className: "text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "  <", className: "text-slate-300" },
          { text: "FullStackPortfolio ", className: "text-cyan-300 font-semibold" },
          { text: "mode", className: "text-purple-400" },
          { text: "=", className: "text-slate-300" },
          { text: '"ObsidianCyber"', className: "text-emerald-400" },
          { text: " />", className: "text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: ");", className: "text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [{ text: "}", className: "text-amber-300" }],
      },
    ],
  },
  // Snippet 3 — Node.js API route
  {
    label: "api/fullstack.js",
    lines: [
      {
        indent: false,
        segments: [
          { text: "const ", className: "text-cyan-400 font-semibold" },
          { text: "app", className: "text-blue-400" },
          { text: " = ", className: "text-cyan-400" },
          { text: "express", className: "text-amber-300" },
          { text: "();", className: "text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [
          { text: "app", className: "text-blue-400" },
          { text: ".", className: "text-slate-300" },
          { text: "get", className: "text-amber-300 font-semibold" },
          { text: "(", className: "text-slate-300" },
          { text: "'/api/projects'", className: "text-emerald-400" },
          { text: ", async (", className: "text-slate-300" },
          { text: "req, res", className: "text-purple-400" },
          { text: ") => {", className: "text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "const ", className: "text-cyan-400 font-semibold" },
          { text: "projects", className: "text-blue-400" },
          { text: " = ", className: "text-cyan-400" },
          { text: "await ", className: "text-cyan-400 font-semibold" },
          { text: "getFeaturedWorks", className: "text-amber-300" },
          { text: "();", className: "text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "res", className: "text-purple-400" },
          { text: ".", className: "text-slate-300" },
          { text: "json", className: "text-blue-400" },
          { text: "({ ", className: "text-slate-300" },
          { text: "status: ", className: "text-slate-300" },
          { text: "200", className: "text-amber-400 font-bold" },
          { text: ", ", className: "text-slate-300" },
          { text: "projects", className: "text-blue-400" },
          { text: " });", className: "text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [{ text: "});", className: "text-amber-300" }],
      },
    ],
  },
];

function renderTypedSegments(segments, charCount) {
  let remaining = charCount;
  const nodes = [];
  for (let i = 0; i < segments.length; i++) {
    if (remaining <= 0) break;
    const seg = segments[i];
    nodes.push(
      <span key={i} className={`${seg.nowrap ? "whitespace-nowrap " : ""}${seg.className}`}>
        {seg.text.slice(0, remaining)}
      </span>
    );
    remaining -= seg.text.length;
  }
  return nodes;
}

export default function TypingCode() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const snippet = SNIPPETS[snippetIdx];
  const lines = snippet.lines;

  useEffect(() => {
    if (!visible) return;

    if (lineIdx >= lines.length) {
      const pauseTimer = setTimeout(() => {
        setVisible(false);
      }, 3200);
      return () => clearTimeout(pauseTimer);
    }

    const lineLength = lines[lineIdx].segments.reduce((sum, seg) => sum + seg.text.length, 0);

    if (charIdx < lineLength) {
      const typingTimer = setTimeout(
        () => setCharIdx((c) => c + 1),
        38 + Math.random() * 38
      );
      return () => clearTimeout(typingTimer);
    }

    const lineBreakTimer = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 380);
    return () => clearTimeout(lineBreakTimer);
  }, [lineIdx, charIdx, lines, visible]);

  const handleExitComplete = () => {
    setSnippetIdx((i) => (i + 1) % SNIPPETS.length);
    setLineIdx(0);
    setCharIdx(0);
    setVisible(true);
  };

  const isDone = lineIdx >= lines.length;

  return (
    <div className="font-mono text-xs sm:text-sm md:text-[15px] 2xl:text-base leading-relaxed 2xl:leading-loose overflow-x-auto w-full max-w-full pb-1 scrollbar-none min-h-[180px] sm:min-h-[220px]">
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {visible && (
          <motion.div
            key={snippetIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="space-y-2 sm:space-y-3 2xl:space-y-4"
          >
            {/* Snippet tab label */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-500/30 shadow-sm">
                {snippet.label}
              </span>
              <span className="flex gap-1">
                {SNIPPETS.map((_, i) => (
                  <span
                    key={i}
                    className={`inline-block h-1.5 rounded-full transition-all duration-300 ${
                      i === snippetIdx
                        ? "w-5 bg-cyan-400 shadow-sm shadow-cyan-400/50"
                        : "w-1.5 bg-slate-700"
                    }`}
                  />
                ))}
              </span>
            </div>

            {lines.map((line, i) => {
              if (i > lineIdx) return null;
              const isCurrent = i === lineIdx;
              const fullLength = line.segments.reduce((sum, seg) => sum + seg.text.length, 0);
              const count = isCurrent ? charIdx : fullLength;
              const showCursor = isCurrent || (isDone && i === lines.length - 1);
              const showPing = line.showPing && count >= fullLength;

              return (
                <div key={i} className={line.indent ? "pl-3 sm:pl-5 md:pl-6 2xl:pl-8" : ""}>
                  {renderTypedSegments(line.segments, count)}
                  {showCursor && (
                    <span className="inline-block align-middle w-[2px] 2xl:w-[3px] h-3.5 sm:h-4 2xl:h-5 ml-0.5 bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400" />
                  )}
                  {showPing && (
                    <span className="inline-block align-middle ml-2 animate-ping h-1.5 sm:h-2 2xl:h-2.5 w-1.5 sm:w-2 2xl:w-2.5 rounded-full bg-emerald-400" />
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

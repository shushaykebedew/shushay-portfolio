import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SNIPPETS = [
  // Snippet 1 — Developer object (original)
  {
    label: "shushay.config.js",
    lines: [
      {
        indent: false,
        segments: [
          { text: "const ", className: "text-pink-500 dark:text-pink-400" },
          { text: "developer", className: "text-blue-500 dark:text-blue-400" },
          { text: " = ", className: "text-pink-500 dark:text-pink-400" },
          { text: "{", className: "text-yellow-500 dark:text-yellow-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "name: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "'Shushay Kebedew'", className: "text-emerald-500 dark:text-emerald-400", nowrap: true },
          { text: ",", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "role: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "'Full Stack Developer'", className: "text-emerald-500 dark:text-emerald-400", nowrap: true },
          { text: ",", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "skills: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "[", className: "text-violet-500 dark:text-violet-400" },
          { text: "'React'", className: "text-emerald-500 dark:text-emerald-400" },
          { text: ", ", className: "text-slate-700 dark:text-slate-300" },
          { text: "'Next.js'", className: "text-emerald-500 dark:text-emerald-400" },
          { text: ", ", className: "text-slate-700 dark:text-slate-300" },
          { text: "'Node.js'", className: "text-emerald-500 dark:text-emerald-400" },
          { text: "]", className: "text-violet-500 dark:text-violet-400" },
          { text: ",", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        showPing: true,
        segments: [
          { text: "status: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "'Open to Work'", className: "text-emerald-500 dark:text-emerald-400", nowrap: true },
        ],
      },
      {
        indent: false,
        segments: [{ text: "}", className: "text-yellow-500 dark:text-yellow-300" }],
      },
    ],
  },
  // Snippet 2 — React component
  {
    label: "UserCard.tsx",
    lines: [
      {
        indent: false,
        segments: [
          { text: "import ", className: "text-pink-500 dark:text-pink-400" },
          { text: "React", className: "text-blue-500 dark:text-blue-400" },
          { text: " from ", className: "text-pink-500 dark:text-pink-400" },
          { text: "'react'", className: "text-emerald-500 dark:text-emerald-400" },
          { text: ";", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [
          { text: "interface ", className: "text-pink-500 dark:text-pink-400" },
          { text: "Props", className: "text-blue-500 dark:text-blue-400" },
          { text: " { ", className: "text-slate-700 dark:text-slate-300" },
          { text: "name", className: "text-violet-500 dark:text-violet-400" },
          { text: ": string }", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [
          { text: "export default ", className: "text-pink-500 dark:text-pink-400" },
          { text: "function ", className: "text-blue-500 dark:text-blue-400" },
          { text: "UserCard", className: "text-yellow-500 dark:text-yellow-300" },
          { text: "({ ", className: "text-slate-700 dark:text-slate-300" },
          { text: "name", className: "text-violet-500 dark:text-violet-400" },
          { text: " }) {", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "return ", className: "text-pink-500 dark:text-pink-400" },
          { text: "(", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "  <", className: "text-slate-700 dark:text-slate-300" },
          { text: "div ", className: "text-blue-500 dark:text-blue-400" },
          { text: "className", className: "text-violet-500 dark:text-violet-400" },
          { text: "=", className: "text-slate-700 dark:text-slate-300" },
          { text: '"card"', className: "text-emerald-500 dark:text-emerald-400" },
          { text: ">", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "    <", className: "text-slate-700 dark:text-slate-300" },
          { text: "h2", className: "text-blue-500 dark:text-blue-400" },
          { text: ">{ ", className: "text-slate-700 dark:text-slate-300" },
          { text: "name", className: "text-violet-500 dark:text-violet-400" },
          { text: " }</", className: "text-slate-700 dark:text-slate-300" },
          { text: "h2", className: "text-blue-500 dark:text-blue-400" },
          { text: ">", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "  </", className: "text-slate-700 dark:text-slate-300" },
          { text: "div", className: "text-blue-500 dark:text-blue-400" },
          { text: ">);", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [{ text: "}", className: "text-yellow-500 dark:text-yellow-300" }],
      },
    ],
  },
  // Snippet 3 — Node.js API route
  {
    label: "api/users.js",
    lines: [
      {
        indent: false,
        segments: [
          { text: "const ", className: "text-pink-500 dark:text-pink-400" },
          { text: "router", className: "text-blue-500 dark:text-blue-400" },
          { text: " = ", className: "text-pink-500 dark:text-pink-400" },
          { text: "express", className: "text-yellow-500 dark:text-yellow-300" },
          { text: ".Router();", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [
          { text: "router", className: "text-blue-500 dark:text-blue-400" },
          { text: ".", className: "text-slate-700 dark:text-slate-300" },
          { text: "get", className: "text-yellow-500 dark:text-yellow-300" },
          { text: "(", className: "text-slate-700 dark:text-slate-300" },
          { text: "'/:id'", className: "text-emerald-500 dark:text-emerald-400" },
          { text: ", async (", className: "text-slate-700 dark:text-slate-300" },
          { text: "req, res", className: "text-violet-500 dark:text-violet-400" },
          { text: ") => {", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "const ", className: "text-pink-500 dark:text-pink-400" },
          { text: "user", className: "text-blue-500 dark:text-blue-400" },
          { text: " = ", className: "text-pink-500 dark:text-pink-400" },
          { text: "await ", className: "text-pink-500 dark:text-pink-400" },
          { text: "User", className: "text-yellow-500 dark:text-yellow-300" },
          { text: ".", className: "text-slate-700 dark:text-slate-300" },
          { text: "findById", className: "text-blue-500 dark:text-blue-400" },
          { text: "(", className: "text-slate-700 dark:text-slate-300" },
          { text: "req.params.id", className: "text-violet-500 dark:text-violet-400", nowrap: true },
          { text: ");", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "if ", className: "text-pink-500 dark:text-pink-400" },
          { text: "(!", className: "text-slate-700 dark:text-slate-300" },
          { text: "user", className: "text-blue-500 dark:text-blue-400" },
          { text: ") ", className: "text-slate-700 dark:text-slate-300" },
          { text: "return ", className: "text-pink-500 dark:text-pink-400" },
          { text: "res", className: "text-violet-500 dark:text-violet-400" },
          { text: ".", className: "text-slate-700 dark:text-slate-300" },
          { text: "status", className: "text-blue-500 dark:text-blue-400" },
          { text: "(", className: "text-slate-700 dark:text-slate-300" },
          { text: "404", className: "text-orange-400 dark:text-orange-300" },
          { text: ").json({", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "  error: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "'User not found'", className: "text-emerald-500 dark:text-emerald-400", nowrap: true },
          { text: " });", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "res", className: "text-violet-500 dark:text-violet-400" },
          { text: ".", className: "text-slate-700 dark:text-slate-300" },
          { text: "json", className: "text-blue-500 dark:text-blue-400" },
          { text: "({ ", className: "text-slate-700 dark:text-slate-300" },
          { text: "user", className: "text-violet-500 dark:text-violet-400" },
          { text: " });", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: false,
        segments: [{ text: "});", className: "text-yellow-500 dark:text-yellow-300" }],
      },
    ],
  },
  // Snippet 4 — DB query
  {
    label: "queries/analytics.ts",
    lines: [
      {
        indent: false,
        segments: [
          { text: "const ", className: "text-pink-500 dark:text-pink-400" },
          { text: "stats", className: "text-blue-500 dark:text-blue-400" },
          { text: " = ", className: "text-pink-500 dark:text-pink-400" },
          { text: "await ", className: "text-pink-500 dark:text-pink-400" },
          { text: "prisma", className: "text-yellow-500 dark:text-yellow-300" },
          { text: ".", className: "text-slate-700 dark:text-slate-300" },
          { text: "order", className: "text-blue-500 dark:text-blue-400" },
          { text: ".", className: "text-slate-700 dark:text-slate-300" },
          { text: "aggregate", className: "text-blue-500 dark:text-blue-400" },
          { text: "({", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "_sum: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "{ ", className: "text-violet-500 dark:text-violet-400" },
          { text: "amount: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "true", className: "text-orange-400 dark:text-orange-300" },
          { text: " },", className: "text-violet-500 dark:text-violet-400" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "_count: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "{ ", className: "text-violet-500 dark:text-violet-400" },
          { text: "id: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "true", className: "text-orange-400 dark:text-orange-300" },
          { text: " },", className: "text-violet-500 dark:text-violet-400" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "where: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "{", className: "text-violet-500 dark:text-violet-400" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "  status: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "'completed'", className: "text-emerald-500 dark:text-emerald-400", nowrap: true },
          { text: ",", className: "text-slate-700 dark:text-slate-300" },
        ],
      },
      {
        indent: true,
        segments: [
          { text: "  createdAt: ", className: "text-slate-700 dark:text-slate-300" },
          { text: "{ gte: ", className: "text-violet-500 dark:text-violet-400" },
          { text: "startDate", className: "text-blue-500 dark:text-blue-400" },
          { text: " }", className: "text-violet-500 dark:text-violet-400" },
        ],
      },
      {
        indent: true,
        segments: [{ text: "}", className: "text-violet-500 dark:text-violet-400" }],
      },
      {
        indent: false,
        segments: [{ text: "});", className: "text-yellow-500 dark:text-yellow-300" }],
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
      // Finished typing this snippet — pause, then fade out and switch
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

  // When fade-out completes, switch snippet and restart
  const handleExitComplete = () => {
    setSnippetIdx((i) => (i + 1) % SNIPPETS.length);
    setLineIdx(0);
    setCharIdx(0);
    setVisible(true);
  };

  const isDone = lineIdx >= lines.length;

  return (
    <div className="font-mono text-xs sm:text-sm md:text-[15px] 2xl:text-base leading-relaxed 2xl:leading-loose overflow-x-auto w-full max-w-full pb-1 scrollbar-none min-h-[180px] sm:min-h-[220px]">
      {/* Filename label */}
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
            <div className="flex items-center gap-1.5 mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                {snippet.label}
              </span>
              <span className="flex gap-0.5">
                {SNIPPETS.map((_, i) => (
                  <span
                    key={i}
                    className={`inline-block h-1 rounded-full transition-all duration-300 ${
                      i === snippetIdx
                        ? "w-4 bg-indigo-500"
                        : "w-1 bg-slate-300 dark:bg-slate-600"
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
                    <span className="inline-block align-middle w-[2px] 2xl:w-[3px] h-3.5 sm:h-4 2xl:h-5 ml-0.5 bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
                  )}
                  {showPing && (
                    <span className="inline-block align-middle ml-2 animate-ping h-1.5 sm:h-2 2xl:h-2.5 w-1.5 sm:w-2 2xl:w-2.5 rounded-full bg-emerald-500" />
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

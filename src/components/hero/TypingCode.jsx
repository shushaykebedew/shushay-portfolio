"use client";

import { useState, useEffect } from "react";

const CODE_LINES = [
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
      {
        text: "'Shushay Kebedew'",
        className: "text-emerald-500 dark:text-emerald-400",
        nowrap: true,
      },
      { text: ",", className: "text-slate-700 dark:text-slate-300" },
    ],
  },
  {
    indent: true,
    segments: [
      { text: "role: ", className: "text-slate-700 dark:text-slate-300" },
      {
        text: "'Full Stack Developer'",
        className: "text-emerald-500 dark:text-emerald-400",
        nowrap: true,
      },
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
      {
        text: "'Next.js'",
        className: "text-emerald-500 dark:text-emerald-400",
      },
      { text: ", ", className: "text-slate-700 dark:text-slate-300" },
      {
        text: "'Node.js'",
        className: "text-emerald-500 dark:text-emerald-400",
      },
      { text: ", ", className: "text-slate-700 dark:text-slate-300" },
      {
        text: "'Tailwind CSS'",
        className: "text-emerald-500 dark:text-emerald-400",
        nowrap: true,
      },
      { text: "]", className: "text-violet-500 dark:text-violet-400" },
      { text: ",", className: "text-slate-700 dark:text-slate-300" },
    ],
  },
  {
    indent: true,
    showPing: true,
    segments: [
      { text: "status: ", className: "text-slate-700 dark:text-slate-300" },
      {
        text: "'Open to Work'",
        className: "text-emerald-500 dark:text-emerald-400",
        nowrap: true,
      },
    ],
  },
  {
    indent: false,
    segments: [{ text: "}", className: "text-yellow-500 dark:text-yellow-300" }],
  },
];

function renderTypedSegments(segments, charCount) {
  let remaining = charCount;
  const nodes = [];

  for (let i = 0; i < segments.length; i++) {
    if (remaining <= 0) break;
    const seg = segments[i];
    nodes.push(
      <span
        key={i}
        className={`${seg.nowrap ? "whitespace-nowrap " : ""}${seg.className}`}
      >
        {seg.text.slice(0, remaining)}
      </span>
    );
    remaining -= seg.text.length;
  }

  return nodes;
}

export default function TypingCode() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= CODE_LINES.length) {
      const resetTimer = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
      }, 3200);
      return () => clearTimeout(resetTimer);
    }

    const lineLength = CODE_LINES[lineIdx].segments.reduce(
      (sum, seg) => sum + seg.text.length,
      0
    );

    if (charIdx < lineLength) {
      const typingTimer = setTimeout(
        () => setCharIdx((c) => c + 1),
        45 + Math.random() * 45
      );
      return () => clearTimeout(typingTimer);
    }

    const lineBreakTimer = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 450);
    return () => clearTimeout(lineBreakTimer);
  }, [lineIdx, charIdx]);

  const isDone = lineIdx >= CODE_LINES.length;

  return (
    <div className="font-mono text-xs sm:text-sm md:text-[15px] 2xl:text-base leading-relaxed 2xl:leading-loose space-y-2 sm:space-y-3 2xl:space-y-4 overflow-x-auto w-full max-w-full pb-1 scrollbar-none">
      {CODE_LINES.map((line, i) => {
        if (i > lineIdx) return null;

        const isCurrent = i === lineIdx;
        const fullLength = line.segments.reduce(
          (sum, seg) => sum + seg.text.length,
          0
        );
        const count = isCurrent ? charIdx : fullLength;
        const showCursor = isCurrent || (isDone && i === CODE_LINES.length - 1);
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
    </div>
  );
}

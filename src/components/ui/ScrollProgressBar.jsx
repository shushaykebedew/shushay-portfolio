import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left rounded-r-full shadow-sm shadow-cyan-500/50"
        style={{
          background: "linear-gradient(to right, #06b6d4, #3b82f6, #10b981)",
          transformOrigin: "0% 50%",
        }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.08, ease: "linear" }}
      />
    </div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck, AlertCircle } from "lucide-react";

export default function FeedbackMessage({ feedback }) {
  return (
    <AnimatePresence>
      {feedback && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.96 }}
          className={`mt-3 p-4 rounded-2xl border text-sm backdrop-blur-md ${
            feedback.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
              : "bg-red-500/10 border-red-500/30 text-red-800 dark:text-red-300"
          }`}
        >
          <div className="flex items-start gap-3">
            {feedback.type === "success" ? (
              <CircleCheck
                className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500"
                aria-hidden="true"
              />
            ) : (
              <AlertCircle
                className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500"
                aria-hidden="true"
              />
            )}
            <div>
              <p className="font-bold text-sm sm:text-base">
                {feedback.type === "success"
                  ? "Message Sent Successfully!"
                  : "Something went wrong"}
              </p>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed opacity-90">
                {feedback.message}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

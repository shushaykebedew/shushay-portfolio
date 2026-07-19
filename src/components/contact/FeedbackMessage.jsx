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
          className={`mt-2 p-4 rounded-2xl border-2 text-sm ${
            feedback.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-300"
              : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
          }`}
        >
          <div className="flex items-start gap-3">
            {feedback.type === "success" ? (
              <CircleCheck
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
            ) : (
              <AlertCircle
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
            )}
            <div>
              <p className="font-bold">
                {feedback.type === "success"
                  ? "Message Sent!"
                  : "Something went wrong"}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed">
                {feedback.message}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

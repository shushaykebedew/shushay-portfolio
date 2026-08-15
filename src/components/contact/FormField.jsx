import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

const errorIconClass = "w-3.5 h-3.5 flex-shrink-0";

export default function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  disabled,
  required = true,
  rows,
}) {
  // text-sm on mobile and larger screens, 2xl:text-base on 2xl
  const inputClass = `w-full rounded-xl sm:rounded-2xl px-4 sm:px-4 2xl:px-5 py-3 sm:py-3 2xl:py-3.5 text-sm sm:text-sm 2xl:text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 border ${
    error
      ? "border-red-400/80 dark:border-red-500/80 focus:border-red-500"
      : "border-slate-200/80 dark:border-slate-800 focus:border-indigo-500"
  } ${rows ? "resize-none" : ""}`;

  const InputComponent = rows ? "textarea" : "input";

  return (
    <div>
      <label
        className="block text-xs sm:text-xs 2xl:text-sm font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-300"
        htmlFor={id}
      >
        {label}{" "}
        {required && (
          <span className="text-pink-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <InputComponent
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        disabled={disabled}
        className={inputClass}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={rows}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 text-xs sm:text-xs 2xl:text-sm text-red-500 dark:text-red-400 flex items-center gap-1.5 font-medium"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />{" "}
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

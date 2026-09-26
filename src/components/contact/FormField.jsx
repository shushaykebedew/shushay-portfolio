import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

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
  const inputClass = `w-full rounded-2xl px-4.5 py-3.5 text-sm sm:text-base font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 border ${
    error
      ? "border-red-500 focus:border-red-500"
      : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400"
  } ${rows ? "resize-none" : ""}`;

  const InputComponent = rows ? "textarea" : "input";

  return (
    <div>
      <label
        className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-300"
        htmlFor={id}
      >
        {label}{" "}
        {required && (
          <span className="text-cyan-600 dark:text-cyan-400" aria-hidden="true">
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
            className="mt-1.5 text-xs sm:text-sm text-red-500 dark:text-red-400 flex items-center gap-1.5 font-bold"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />{" "}
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

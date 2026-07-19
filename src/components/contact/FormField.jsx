import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

const errorIconClass = "w-3 h-3 sm:w-3.5 sm:h-3.5";

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
  const inputClass = `w-full rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
    error
      ? "border-red-400 dark:border-red-600"
      : "border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400"
  } ${rows ? "resize-none" : ""}`;

  const InputComponent = rows ? "textarea" : "input";

  return (
    <div>
      <label
        className="block text-sm font-semibold mb-1.5 text-slate-700 dark:text-slate-300"
        htmlFor={id}
      >
        {label}{" "}
        {required && (
          <span className="text-red-500" aria-hidden="true">
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
          >
            <AlertCircle className={errorIconClass} aria-hidden="true" />{" "}
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

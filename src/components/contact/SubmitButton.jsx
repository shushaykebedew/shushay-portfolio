import { Loader, Mail } from "lucide-react";

export default function SubmitButton({ loading, disabled, onClick }) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      onClick={onClick}
      className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 ${
        loading || disabled
          ? "opacity-50 cursor-not-allowed bg-slate-400 dark:bg-slate-600"
          : "cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:scale-[1.02]"
      }`}
      aria-label={
        loading ? "Sending your message, please wait" : "Send message"
      }
    >
      {loading ? (
        <>
          <Loader className="w-4 h-4 animate-spin" aria-hidden="true" />
          Sending...
        </>
      ) : (
        <>
          <Mail className="w-4 h-4" aria-hidden="true" />
          Send Message
        </>
      )}
    </button>
  );
}

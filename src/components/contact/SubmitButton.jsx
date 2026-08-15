import { Loader, Send } from "lucide-react";

export default function SubmitButton({ loading, disabled, onClick }) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      onClick={onClick}
      className={`w-full inline-flex items-center justify-center gap-2 2xl:gap-3 rounded-xl sm:rounded-2xl px-6 py-3.5 sm:py-4 text-base font-bold text-white shadow-lg transition-all duration-300 focus:outline-none ${
        loading || disabled
          ? "opacity-50 cursor-not-allowed bg-slate-400 dark:bg-slate-700"
          : "cursor-pointer bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02]"
      }`}
      aria-label={
        loading ? "Sending your message, please wait" : "Send message"
      }
    >
      {loading ? (
        <>
          <Loader className="w-5 h-5 animate-spin" aria-hidden="true" />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <Send className="w-5 h-5" aria-hidden="true" />
          <span>Send Message</span>
        </>
      )}
    </button>
  );
}

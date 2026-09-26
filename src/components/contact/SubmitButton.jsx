import { Loader, Send } from "lucide-react";

export default function SubmitButton({ loading, disabled, onClick }) {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      onClick={onClick}
      className={`w-full inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-base font-black text-white shadow-lg transition-all duration-300 focus:outline-none ${
        loading || disabled
          ? "opacity-50 cursor-not-allowed bg-slate-800 border border-slate-700 text-slate-500"
          : "cursor-pointer bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02]"
      }`}
      aria-label={
        loading ? "Sending your message, please wait" : "Send message"
      }
    >
      {loading ? (
        <>
          <Loader className="w-5 h-5 animate-spin" aria-hidden="true" />
          <span>Sending Message...</span>
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

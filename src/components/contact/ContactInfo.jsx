import { MapPin, Phone, Mail, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";

const EMAIL = "shushaykebedew12@gmail.com";

export default function ContactInfo({ cardVariants }) {
  const [copied, copy] = useCopyToClipboard();
  return (
    <motion.div
      custom={0}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="h-full"
    >
      <div className="glass-card p-6 sm:p-8 rounded-3xl 2xl:rounded-4xl glow-hover h-full flex flex-col justify-between border border-slate-200 dark:border-cyan-500/20">

        {/* Contact Details */}
        <div>
          <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-black mb-6 sm:mb-8 text-slate-900 dark:text-white">
            Contact Details
          </h3>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                <MapPin className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider font-extrabold text-slate-500 dark:text-slate-400 mb-1">
                  Location
                </p>
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider font-extrabold text-slate-500 dark:text-slate-400 mb-1">
                  Phone
                </p>
                <a
                  href="tel:+251943668796"
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors focus:outline-none"
                  aria-label="Call +251 943 668 796"
                >
                  +251 943 668 796
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider font-extrabold text-slate-500 dark:text-slate-400 mb-1">
                  Email
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all focus:outline-none"
                    aria-label={`Send email to ${EMAIL}`}
                  >
                    {EMAIL}
                  </a>
                  <button
                    onClick={() => copy(EMAIL)}
                    aria-label={copied ? "Copied!" : "Copy email address"}
                    className="flex-shrink-0 cursor-pointer p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-200 border border-slate-200 dark:border-cyan-500/20"
                  >
                    {copied
                      ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      : <Copy className="w-4 h-4" aria-hidden="true" />
                    }
                  </button>
                </div>
                {copied && (
                  <AnimatePresence>
                    <motion.p
                      key="copied-toast"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1"
                    >
                      Copied to clipboard!
                    </motion.p>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative w-full aspect-[16/9] min-h-[160px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner mt-6">
          <iframe
            title="Map of Addis Ababa, Ethiopia"
            src="https://www.openstreetmap.org/export/embed.html?bbox=38.70%2C8.95%2C38.80%2C9.05&layer=mapnik&marker=9.03%2C38.74"
            allowFullScreen
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </motion.div>
  );
}

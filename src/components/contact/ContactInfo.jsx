import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo({ cardVariants }) {
  const iconClass = "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0";

  return (
    <motion.div
      custom={0}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="h-full"
    >
      <div className="glass-card p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl glow-hover h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold mb-5 sm:mb-6 2xl:mb-8 text-slate-900 dark:text-white">
            Contact Details
          </h3>

          <div className="space-y-4 sm:space-y-6 2xl:space-y-7">
            {/* Address */}
            <div className="flex items-start gap-3.5 sm:gap-4 2xl:gap-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-xl sm:rounded-2xl 2xl:rounded-3xl flex items-center justify-center flex-shrink-0 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <MapPin className="w-5 h-5 2xl:w-6 2xl:h-6 flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-xs 2xl:text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1">
                  Location
                </p>
                <p className="text-sm sm:text-base 2xl:text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5 sm:gap-4 2xl:gap-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-xl sm:rounded-2xl 2xl:rounded-3xl flex items-center justify-center flex-shrink-0 bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Phone className="w-5 h-5 2xl:w-6 2xl:h-6 flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-xs 2xl:text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1">
                  Phone
                </p>
                <a
                  href="tel:+251943668796"
                  className="text-sm sm:text-base 2xl:text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none"
                  aria-label="Call +251 943 668 796"
                >
                  +251 943 668 796
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 sm:gap-4 2xl:gap-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-xl sm:rounded-2xl 2xl:rounded-3xl flex items-center justify-center flex-shrink-0 bg-pink-500/10 text-pink-600 dark:text-pink-400">
                <Mail className="w-5 h-5 2xl:w-6 2xl:h-6 flex-shrink-0" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-xs 2xl:text-sm uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1">
                  Email
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shusaykebedew12@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base 2xl:text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all focus:outline-none"
                  aria-label="Send email to shusaykebedew12@gmail.com"
                >
                  shusaykebedew12@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative w-full aspect-[16/9] min-h-[160px] rounded-xl sm:rounded-2xl overflow-hidden mt-6 sm:mt-8 border border-slate-200/50 dark:border-slate-800 shadow-inner">
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

import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo({ cardVariants }) {
  const iconClass = "w-4 h-4 sm:w-5 sm:h-5";

  return (
    <motion.div
      custom={0}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="h-full"
    >
      <div className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-5 text-slate-900 dark:text-white">
          Contact Details
        </h3>
        <div className="space-y-5">
          {/* Address */}
          <div className="flex items-start gap-4">
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-indigo-50 dark:bg-indigo-950/50"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin
                className={`${iconClass} text-indigo-600 dark:text-indigo-400`}
                aria-hidden="true"
              />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                Location
              </p>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-indigo-50 dark:bg-indigo-950/50"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Phone
                className={`${iconClass} text-indigo-600 dark:text-indigo-400`}
                aria-hidden="true"
              />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                Phone
              </p>
              <a
                href="tel:+251943668796"
                className="font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm"
                aria-label="Call +251 943 668 796"
              >
                +251 943 668 796
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-indigo-50 dark:bg-indigo-950/50"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Mail
                className={`${iconClass} text-indigo-600 dark:text-indigo-400`}
                aria-hidden="true"
              />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                Email
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shusaykebedew12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm"
                aria-label="Send email to shusaykebedew12@gmail.com"
              >
                shusaykebedew12@gmail.com
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden mt-4 border border-slate-200 dark:border-slate-700">
            <iframe
              title="Map of Addis Ababa, Ethiopia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.70%2C8.95%2C38.80%2C9.05&layer=mapnik&marker=9.03%2C38.74"
              allowFullScreen
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

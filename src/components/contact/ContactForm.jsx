import { useState, useEffect } from "react";
import { CircleCheck, AlertCircle, Loader, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm({ cardVariants }) {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

  const errorIconClass = "w-3 h-3 sm:w-3.5 sm:h-3.5";

  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    else if (formData.subject.trim().length < 5)
      newErrors.subject = "Subject must be at least 5 characters";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setFeedback(null);

    const templateParams = {
      to_name: "Shushay Kebedew",
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setFeedback({
          type: "success",
          message:
            "Thank you! Your message was sent successfully. I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFeedback(null), 8000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS error:", error);
        setFeedback({
          type: "error",
          message:
            "Sorry, there was an error sending your message. Please try again or reach out directly.",
        });
        setTimeout(() => setFeedback(null), 8000);
      });
  };

  const hasErrors = Object.values(errors).some((e) => e !== "");
  const isFormFilled =
    formData.name && formData.email && formData.subject && formData.message;
  const shouldBtnActive = !hasErrors && isFormFilled;

  const inputClass = (field) =>
    `w-full rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
      errors[field]
        ? "border-red-400 dark:border-red-600"
        : "border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400"
    }`;

  return (
    <motion.div
      custom={1}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="h-full"
    >
      <div className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-5 text-slate-900 dark:text-white">
          Send a Message
        </h3>
        <form className="space-y-4" onSubmit={sendEmail} noValidate>
          {/* Name */}
          <div>
            <label
              className="block text-sm font-semibold mb-1.5 text-slate-700 dark:text-slate-300"
              htmlFor="name"
            >
              Your Name{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              required
              disabled={loading}
              className={inputClass("name")}
              placeholder="Enter your full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  id="name-error"
                  role="alert"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className={errorIconClass} aria-hidden="true" />{" "}
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-sm font-semibold mb-1.5 text-slate-700 dark:text-slate-300"
              htmlFor="email"
            >
              Your Email{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              required
              disabled={loading}
              className={inputClass("email")}
              placeholder="your.email@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  id="email-error"
                  role="alert"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className={errorIconClass} aria-hidden="true" />{" "}
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Subject */}
          <div>
            <label
              className="block text-sm font-semibold mb-1.5 text-slate-700 dark:text-slate-300"
              htmlFor="subject"
            >
              Subject{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              type="text"
              required
              disabled={loading}
              className={inputClass("subject")}
              placeholder="Project inquiry, collaboration, etc."
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            <AnimatePresence>
              {errors.subject && (
                <motion.p
                  id="subject-error"
                  role="alert"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className={errorIconClass} aria-hidden="true" />{" "}
                  {errors.subject}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Message */}
          <div>
            <label
              className="block text-sm font-semibold mb-1.5 text-slate-700 dark:text-slate-300"
              htmlFor="message"
            >
              Message{" "}
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
              disabled={loading}
              className={`resize-none ${inputClass("message")}`}
              placeholder="Tell me about your project, timeline, and any specific requirements..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  id="message-error"
                  role="alert"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className={errorIconClass} aria-hidden="true" />{" "}
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            disabled={loading || !shouldBtnActive}
            className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 ${
              loading || !shouldBtnActive
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
        </form>
      </div>
    </motion.div>
  );
}

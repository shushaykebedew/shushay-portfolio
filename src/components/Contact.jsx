import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact({ theme }) {
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

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    } else {
      console.error("EmailJS Public Key is missing!");
    }
  }, [PUBLIC_KEY]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFeedback({ type: "error", message: "Please fix the errors below." });
      setTimeout(() => setFeedback(null), 5000);
      return;
    }

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
          message: "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours." 
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFeedback(null), 8000);
      })
      .catch((error) => {
        setLoading(false);
        setFeedback({ 
          type: "error", 
          message: "Sorry, there was an error sending your message. Please try again or contact me directly." 
        });
        setTimeout(() => setFeedback(null), 8000);
      });
  };

  const textColor = theme === "dark" ? "#f1f5f9" : "#0f172a";
  const subTextColor = theme === "dark" ? "#cbd5e1" : "#475569";
  const bgColor = theme === "dark" ? "#1e293b" : "#ffffff";
  const borderColor = theme === "dark" ? "#334155" : "#cbd5e1";
  const iconColor = theme === "dark" ? "#60a5fa" : "#1e40af";
  const inputBg = theme === "dark" ? "#0f172a" : "#f8fafc";

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const shouldBtnActive = Object.keys(errors).length === 0 && 
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm uppercase tracking-widest mb-3 font-semibold"
            style={{ color: subTextColor }}
          >
            Get In Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: textColor }}
          >
            Let's Work Together
          </h2>
          <p
            className="max-w-2xl mx-auto leading-relaxed text-lg font-medium mb-4"
            style={{ color: subTextColor }}
          >
            Ready to bring your ideas to life? I'm available for full-stack development projects, 
            consulting, and collaboration opportunities.
          </p>
          
          {/* Enhanced CTA */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#f1f5f9",
              border: `1px solid ${borderColor}`
            }}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span style={{ color: textColor }} className="font-medium">Available for opportunities</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{
              backgroundColor: theme === "dark" ? "#1e293b" : "#f1f5f9",
              border: `1px solid ${borderColor}`
            }}>
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span style={{ color: textColor }} className="font-medium">Response within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Equal height grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Contact Details + Map */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="h-full"
          >
            <div
              className="rounded-2xl p-6 shadow-sm hover:shadow-md transition h-full"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
            >
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    // className={
                    //   theme === "dark" ? "text-gray-300" : "text-gray-700"
                    // }
                    color={iconColor}
                  />
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider"
                      style={{ color: subTextColor }}
                    >
                      Address
                    </p>
                    <p className="font-semibold" style={{ color: textColor }}>
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone size={18} color={iconColor} />
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider"
                      style={{ color: subTextColor }}
                    >
                      Call
                    </p>
                    <a
                      href="tel:+251943668796"
                      className={`${textColor} font-semibold cursor-pointer hover:underline`}
                      aria-label="Call +251 943 668 796"
                    >
                      +251 943 668 796
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail size={18} color={iconColor} />
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider"
                      style={{ color: subTextColor }}
                    >
                      Email
                    </p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=shusaykebedew12@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${textColor} font-semibold cursor-pointer hover:underline`}
                      aria-label="Send email to shusaykebedew12@gmail.com"
                    >
                      shusaykebedew12@gmail.com
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div
                  className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden mt-4"
                  style={{ border: `1px solid ${borderColor}` }}
                >
                  <iframe
                    title="Map of Addis Ababa"
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

          {/* Right: Contact Form */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="h-full"
          >
            <div
              className="rounded-2xl p-6 shadow-sm hover:shadow-md transition h-full"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
            >
              <form className="space-y-4" onSubmit={sendEmail}>
                <div>
                  <label
                    className="mb-2 block text-sm font-semibold"
                    htmlFor="name"
                    style={{ color: textColor }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    required
                    className={`w-full rounded-2xl border-2 px-4 py-3 text-base font-medium transition-all duration-300 focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 focus:border-indigo-500 ${
                      errors.name ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    style={{
                      borderColor: errors.name ? '#ef4444' : borderColor,
                      backgroundColor: inputBg,
                      color: textColor,
                    }}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle size={12} />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-semibold"
                    htmlFor="email"
                    style={{ color: textColor }}
                  >
                    Your Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    required
                    className={`w-full rounded-2xl border-2 px-4 py-3 text-base font-medium transition-all duration-300 focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 focus:border-indigo-500 ${
                      errors.email ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    style={{
                      borderColor: errors.email ? '#ef4444' : borderColor,
                      backgroundColor: inputBg,
                      color: textColor,
                    }}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle size={12} />
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    className="mb-2 block text-sm font-semibold"
                    htmlFor="subject"
                    style={{ color: textColor }}
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    type="text"
                    required
                    className={`w-full rounded-2xl border-2 px-4 py-3 text-base font-medium transition-all duration-300 focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 focus:border-indigo-500 ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    style={{
                      borderColor: errors.subject ? '#ef4444' : borderColor,
                      backgroundColor: inputBg,
                      color: textColor,
                    }}
                    placeholder="Project inquiry, collaboration, etc."
                  />
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle size={12} />
                      {errors.subject}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-semibold"
                    htmlFor="message"
                    style={{ color: textColor }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className={`w-full resize-none rounded-2xl border-2 px-4 py-3 text-base font-medium transition-all duration-300 focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-800 focus:border-indigo-500 ${
                      errors.message ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    style={{
                      borderColor: errors.message ? '#ef4444' : borderColor,
                      backgroundColor: inputBg,
                      color: textColor,
                    }}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-500 flex items-center gap-1"
                    >
                      <AlertCircle size={12} />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading || !shouldBtnActive}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 ${
                    loading || !shouldBtnActive
                      ? "opacity-60 cursor-not-allowed bg-gray-400"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:scale-105 hover:shadow-xl"
                  }`}
                  aria-label={loading ? "Sending message" : "Send message"}
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Enhanced Success/Error message */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      className={`mt-4 p-4 rounded-2xl border-2 ${
                        feedback.type === "success"
                          ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300"
                          : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {feedback.type === "success" ? (
                          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <p className="font-semibold text-sm">
                            {feedback.type === "success" ? "Message Sent!" : "Error"}
                          </p>
                          <p className="text-sm mt-1">{feedback.message}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact({ theme }) {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
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
  };

  const validateForm = () =>
    formData.name && formData.email && formData.subject && formData.message;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFeedback("Please fill out all fields.");
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
        setFeedback("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFeedback(null), 5000);
      })
      .catch((error) => {
        setLoading(false);
        setFeedback("An error occurred: " + error.text);
        setTimeout(() => setFeedback(null), 5000);
      });
  };

  const textColor = theme === "dark" ? "#f9fafb" : "#111827";
  const subTextColor = theme === "dark" ? "#d1d5db" : "#4b5563";
  const bgColor = theme === "dark" ? "#1f2937" : "#ffffff";
  const borderColor = theme === "dark" ? "#374151" : "#e5e7eb";

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const shouldBtnActive =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm uppercase tracking-widest mb-2"
            style={{ color: subTextColor }}
          >
            Contact Me
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ color: textColor }}
          >
            Let's Build Something Great
          </h2>
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
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
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
                  <Phone
                    size={18}
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  />
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
                    >
                      +251 943 668 796
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  />
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
                    className="mb-1 block text-sm font-medium"
                    htmlFor="name"
                    style={{ color: textColor }}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    required
                    className="w-full rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-200"
                    style={{
                      borderColor,
                      backgroundColor: bgColor,
                      color: textColor,
                    }}
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor="email"
                    style={{ color: textColor }}
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    required
                    className="w-full rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-200"
                    style={{
                      borderColor,
                      backgroundColor: bgColor,
                      color: textColor,
                    }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor="subject"
                    style={{ color: textColor }}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    type="text"
                    required
                    className="w-full rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-200"
                    style={{
                      borderColor,
                      backgroundColor: bgColor,
                      color: textColor,
                    }}
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor="message"
                    style={{ color: textColor }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-indigo-200"
                    style={{
                      borderColor,
                      backgroundColor: bgColor,
                      color: textColor,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !shouldBtnActive}
                  className={`w-full inline-flex items-center bg-indigo-600 justify-center gap-2 rounded-2xl px-4 py-2 font-semibold text-white shadow 
                    ${
                      loading || !shouldBtnActive
                        ? "opacity-60"
                        : "opacity-100  hover:bg-indigo-700 hover:cursor-pointer"
                    }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Success/Error message */}
                {feedback && (
                  <div
                    className={`mt-3 p-3 rounded-lg text-center ${
                      feedback.includes("successfully")
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {feedback}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

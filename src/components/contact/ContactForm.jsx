import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import FeedbackMessage from "./FeedbackMessage";

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

  return (
    <motion.div
      custom={1}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="h-full"
    >
      <div className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold mb-5 text-slate-900 dark:text-white">
          Send a Message
        </h3>
        <form className="space-y-4" onSubmit={sendEmail} noValidate>
          <FormField
            id="name"
            label="Your Name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            placeholder="Enter your full name"
            disabled={loading}
          />

          <FormField
            id="email"
            label="Your Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="your.email@example.com"
            disabled={loading}
          />

          <FormField
            id="subject"
            label="Subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
            error={errors.subject}
            placeholder="Project inquiry, collaboration, etc."
            disabled={loading}
          />

          <FormField
            id="message"
            label="Message"
            value={formData.message}
            onChange={handleInputChange}
            error={errors.message}
            placeholder="Tell me about your project, timeline, and any specific requirements..."
            disabled={loading}
            rows={4}
          />

          <SubmitButton
            loading={loading}
            disabled={!shouldBtnActive}
          />

          <FeedbackMessage feedback={feedback} />
        </form>
      </div>
    </motion.div>
  );
}

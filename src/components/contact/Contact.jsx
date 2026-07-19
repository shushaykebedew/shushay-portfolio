import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest mb-3 font-semibold text-slate-500 dark:text-slate-400">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed text-lg font-medium mb-8 text-slate-600 dark:text-slate-300">
            Ready to bring your ideas to life? I'm available for full-stack
            development projects, consulting, and collaboration opportunities.
          </p>


        </div>

        {/* Equal height grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <ContactInfo cardVariants={cardVariants} />
          <ContactForm cardVariants={cardVariants} />
        </div>
      </div>
    </section>
  );
}

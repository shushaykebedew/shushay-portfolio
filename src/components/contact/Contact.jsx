import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
    }),
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <SectionHeader
          subtitle="Get In Touch"
          title={
            <>
              Let's Build Something <span className="brand-gradient-text">Great</span>
            </>
          }
          description="Ready to bring your ideas to life? I'm available for full-stack engineering roles, freelance builds, consulting, and ambitious collaborations."
        />

        {/* Equal height grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 2xl:gap-10 items-stretch">
          <ContactInfo cardVariants={cardVariants} />
          <ContactForm cardVariants={cardVariants} />
        </div>
      </div>
    </section>
  );
}

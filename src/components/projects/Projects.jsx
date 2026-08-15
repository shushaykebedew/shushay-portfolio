import { projects } from "./constants";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../ui/SectionHeader";

export default function Projects() {
  const projectVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: (i % 4) * 0.07, duration: 0.45, ease: "easeOut" },
    }),
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <SectionHeader
          subtitle="My Projects"
          title={
            <>
              Featured <span className="brand-gradient-text">Works</span>
            </>
          }
          description="A curated selection of client projects, full-stack web applications, and technical platforms built for real-world impact."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 2xl:gap-10 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              projectVariants={projectVariants}
              isFeatured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

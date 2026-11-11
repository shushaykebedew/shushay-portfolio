import { Code2, Server, Database, Brain, Wrench } from "lucide-react";

export const TABS = [
  {
    id: "frontend",
    label: "Frontend",
    title: "Frontend Engineering",
    icon: Code2,
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Svelte", "SvelteKit", "Zustand", "TanStack Query", "React Hook Form", "GSAP"],
  },
  {
    id: "backend",
    label: "Backend",
    title: "Backend Engineering",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "OAuth", "OpenAPI", "API Integration"],
  },
  {
    id: "database",
    label: "Data",
    title: "Databases & Data",
    icon: Database,
    skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "SQL", "Data Modeling"],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    title: "Development Workflow & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Vitest", "Postman", "Vercel", "Render", "Figma"],
  },
  {
    id: "ai",
    label: "AI / ML",
    title: "Artificial Intelligence & Machine Learning",
    icon: Brain,
    skills: ["Python", "Machine Learning", "Scikit-learn", "TensorFlow", "XGBoost", "SHAP", "Data Analysis"],
  },
];

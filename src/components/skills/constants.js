import {
  Code2,
  Server,
  Database,
  Brain,
  Star,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export const TABS = [
  {
    id: "frontend",
    label: "Frontend",
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-400 to-cyan-400",
    iconBg: { light: "#E6F1FB", dark: "#0C447C33" },
    iconColor: { light: "#185FA5", dark: "#85B7EB" },
    skills: [
      { name: "HTML5 & CSS3", level: 92, proficiency: "Expert" },
      { name: "JavaScript", level: 88, proficiency: "Expert" },
      { name: "React.js", level: 90, proficiency: "Expert" },
      { name: "Next.js", level: 88, proficiency: "Expert" },
      { name: "TypeScript", level: 86, proficiency: "Advanced" },
      { name: "Tailwind CSS", level: 94, proficiency: "Expert" },
      { name: "Svelte", level: 85, proficiency: "Advanced" },
      { name: "SvelteKit", level: 85, proficiency: "Advanced" },

    ],
  },
  {
    id: "backend",
    label: "Backend",
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    darkColor: "from-emerald-400 to-teal-400",
    iconBg: { light: "#E1F5EE", dark: "#08504133" },
    iconColor: { light: "#0F6E56", dark: "#5DCAA5" },
    skills: [
      { name: "Node.js", level: 85, proficiency: "Advanced" },
      { name: "Express.js", level: 83, proficiency: "Advanced" },
      { name: "REST APIs", level: 87, proficiency: "Advanced" },
      { name: "Authentication (JWT)", level: 82, proficiency: "Advanced" },
    ],
  },
  {
    id: "databases",
    label: "Data & Tools",
    title: "Databases & Tools",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-400 to-pink-400",
    iconBg: { light: "#EEEDFE", dark: "#3C348933" },
    iconColor: { light: "#534AB7", dark: "#AFA9EC" },
    skills: [
      { name: "MongoDB", level: 82, proficiency: "Advanced" },
      { name: "PostgreSQL", level: 80, proficiency: "Advanced" },
      { name: "Git & GitHub", level: 88, proficiency: "Expert" },
      { name: "Docker", level: 75, proficiency: "Intermediate" },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    title: "AI/ML & Python",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    darkColor: "from-orange-400 to-red-400",
    iconBg: { light: "#FAECE7", dark: "#71281333" },
    iconColor: { light: "#993C1D", dark: "#F0997B" },
    skills: [
      { name: "Python", level: 85, proficiency: "Advanced" },
      { name: "Machine Learning", level: 84, proficiency: "Advanced" },
      { name: "TensorFlow & PyTorch", level: 83, proficiency: "Advanced" },
      { name: "OpenAI APIs", level: 85, proficiency: "Advanced" },
    ],
  },
];

export const PROFICIENCY_CONFIG = {
  Expert: {
    icon: Star,
    light: { bg: "#FAEEDA", text: "#854F0B" },
    dark: { bg: "#41240244", text: "#FAC775" },
    dot: "#BA7517",
  },
  Advanced: {
    icon: TrendingUp,
    light: { bg: "#E1F5EE", text: "#0F6E56" },
    dark: { bg: "#04342C44", text: "#9FE1CB" },
    dot: "#1D9E75",
  },
  Intermediate: {
    icon: CheckCircle2,
    light: { bg: "#E6F1FB", text: "#185FA5" },
    dark: { bg: "#042C5344", text: "#85B7EB" },
    dot: "#378ADD",
  },
};
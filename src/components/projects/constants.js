import sheqleeDashboard from "../../assets/sheqlee-dashboard.png";
import qrCodeScan from "../../assets/qr-code-scan.png";
import machaImg from "../../assets/macha.png";
import glitchImg from "../../assets/glitch.png";
import katechImg from "../../assets/katech.png";
import bellboy from "../../assets/bellboy.png";
import xCafe from "../../assets/x-cafe.png";
import AI_Powered_Fraud_Detection from "../../assets/AI_Powered_Fraud_Detection.png";

export const projects = [
  {
    title: "Katech Driver Data Platform",
    description:
      "Data management platform for collecting, validating, and processing driving videos and related metadata. Built to help AI and automotive companies access high-quality human–vehicle interaction datasets for machine learning, autonomous driving research, and analytics.",
    image: katechImg,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "clsx",
      "next-intl",
      "date-fns",
      "Axios",
      "Zustand",
      "TanStack Table",
      "React Hook Form",
    ],
    demoUrl: "https://katech-local.vercel.app/",
  },
  {
    title: "Macha Taximeter Platform",
    description:
      "Modern taxi fare calculation system with GPS tracking and dynamic pricing. Built with server-side rendering for optimal performance and real-time location updates.",
    image: machaImg,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Geolocation API",
      "react-hook-form",
      "react-datepicker",
      "ck-editor",
    ],
    demoUrl: "https://macha-taximeter.vercel.app/",
  },
  {
    title: "Sheqlee Admin Dashboard",
    description:
      "Full-stack admin platform for freelancer marketplace management. Includes user management, project tracking, payment processing, and analytics dashboard with real-time data synchronization.",
    image: sheqleeDashboard,
    tech: [
      "React",
      "CSS Module",
      "Node.js",
      "MongoDB",
      "REST API",
      "react-datetime",
      "quill",
    ],
    demoUrl: " https://sheqlee-admin-panel.vercel.app/",
  },
  {
    title: "Glitch Multilingual Platform",
    description:
      "Internationalized web platform with English and Korean support. Features server-side rendering, dynamic content management, and optimized SEO performance.",
    image: glitchImg,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "clsx",
      "next-intl",
      "nodemailer",
    ],
    demoUrl: "https://glitch-ui.vercel.app/",
  },
  {
    title: "Bellboy Delivery",
    description:
      "Built delivery system with smooth, interactive animations that visually track each step of the delivery process—from request to pickup, transit, and drop-off—providing real-time status updates and a clear, engaging user experience.",
    image: bellboy,
    tech: ["Svelte", "SvelteKit", "TypeScript", "Tailwind CSS", "gsap", "clsx"],
    demoUrl: "https://bellboy-delivery.vercel.app/",
  },
  {
    title: "X Cafe",
    description:
      "Built an admin dashboard for a QR-based café ordering system with real-time order updates, menu management, and order tracking. Enabled customers to place orders via QR scan while staff manage and monitor incoming orders efficiently. Focused on real-time sync and streamlined café operations.",
    image: xCafe,
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "date-fns",
      "framer-motion",
      "i18next",
      "recharts",
      "zustand",
    ],
    demoUrl: "https://x-cafe-system.vercel.app/",
  },
  {
    title: "Automated ID Verification System",
    description:
      "Enterprise-grade identity verification platform with QR code scanning. Features secure user authentication, real-time verification status, and comprehensive admin dashboard.",
    image: qrCodeScan,
    tech: [
      "React",
      "CSS",
      "Bootstrap",
      "Node.js",
      "MySQL",
      "Axios",
      "html5-qrcode",
      "joi-browser",
      "sweetalert2",
    ],
    demoUrl: "",
  },
  {
    title: "AI-Powered Fraud Detection",
    description:
      "Advanced fraud detection platform for Ethiopian banking and mobile payment systems. Utilizes AI and machine learning to identify suspicious transactions in real-time, ensure secure payments, and provide actionable analytics through an intuitive admin dashboard.",
    image: AI_Powered_Fraud_Detection,
    tech: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Node.js",
      "Next.js",
      "REST API",
    ],
    demoUrl: "",
  },
];

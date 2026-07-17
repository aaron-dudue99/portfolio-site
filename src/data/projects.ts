import fairstayContent from "./content/fairstay.md?raw";
import talaContent from "./content/tala.md?raw";

export interface Project {
  title: string;
  shortDesc: string;
  techStack: string;
  image: string;
  websiteLink?: string;
  githubLink: string;
  completed: boolean;
  slug: string;
  content?: React.ReactNode;
}

export const projects: Project[] = [
  {
    title: "Fairstay",
    shortDesc:
      "A web-based platform designed to manage records and communication between landlords and tenants. The application enables users to generate, send, and track lease agreements; manage landlord properties and individual units; track rent payments and receive notifications for upcoming dues; and raise, manage, and resolve disputes through a structured, transparent workflow.",
    techStack: "Angular, Spring Boot, PostgreSql",
    image: "/images/fairstay.png",
    githubLink: "https://github.com/aaron-dudue99/fairstay-frontend",
    websiteLink: "",
    completed: false,
    slug: "fairstay",
    content: fairstayContent,
  },
  {
    title: "TALA",
    shortDesc:
      "A private, clinical-grade pelvic floor training and wellness platform for men. TALA guides users through a structured 12-week program with an animated ring-timer trainer, daily progress tracking, and a curated wellness article library — all wrapped in a calm, editorial-style interface designed to feel like a private utility rather than a gamified fitness app.",
    techStack: "React Native, Expo, Supabase",
    image: "/images/tala.png",
    githubLink: "https://github.com/aaron-dudue99/apaex-fitness",
    websiteLink: "",
    completed: false,
    slug: "tala",
    content: talaContent,
  },
];

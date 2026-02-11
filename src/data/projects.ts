import fairstayContent from "./content/fairstay.md?raw";

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
    githubLink: 'https://github.com/aaron-dudue99/fairstay-frontend',
    websiteLink: "",
    completed: false,
    slug: "fairstay",
    content: fairstayContent,
  },
];

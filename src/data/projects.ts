export interface Project {
    title: string;
    subtitle: string;
    techStack: string;
    image: string;
    websiteLink?: string;
    completed: boolean;
    slug: string;
    content?: React.ReactNode;
}

export const projects: Project[] = [
    {
        title: "RideChecka",
        subtitle: "A platform to check a ride's history",
        techStack: "Next.js, Framer Motion, MySql, Node",
        image: "/images/project1.jfif",
        websiteLink: "",
        completed: false,
        slug: "ridechecka",
        content: "Detailed case study content for RideChecka will go here.",
    },
    {
        title: "Portfolio V1",
        subtitle: "My first portfolio website",
        techStack: "React, Tailwind, Motion",
        image: "/images/project1alt.jfif",
        websiteLink: "https://example.com",
        completed: true,
        slug: "portfolio-v1",
        content: "Detailed case study content for Portfolio V1 will go here.",
    }
];

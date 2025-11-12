import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col   py-24">
      <Heading title="My Projects" emoji="💼" />
      <p
        style={{ color: "var(--color-text-muted)" }}
        className="py-6  leading-relaxed"
      >
        Some of the projects I've worked on
      </p>
      <ProjectCard
        image="/images/project1.jfif"
        title="RideChecka"
        subtitle="A platform to check a ride's history"
        techStack="Next.js • Framer Motion • MySql • Node"
        websiteLink=""
        completed={false}
      />
    </section>
  );
};

export default ProjectsSection;

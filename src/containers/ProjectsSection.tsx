import React from "react";
import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col  gap-20 py-24">
      <Heading title="My Projects" emoji="💼" />
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

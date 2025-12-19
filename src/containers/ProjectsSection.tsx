import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import Button from "../components/Button";

const ProjectsSection = () => {
  // Display only the first 2 projects as a preview
  const previewProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="flex flex-col py-24 w-full">
      <Heading title="My Projects" emoji="💼" />
      <p
        style={{ color: "var(--color-text-muted)" }}
        className="mt-6 mb-12 leading-relaxed"
      >
        Some of the projects I've worked on.
      </p>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {previewProjects.map((project) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 w-full flex justify-center">
        <Button href="/projects" variant="outline">
          View All Projects
        </Button>
      </div>

    </section>
  );
};

export default ProjectsSection;

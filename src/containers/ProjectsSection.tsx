import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "motion/react";

const ProjectsSection = () => {
  const displayProjects = projects;

  return (
    <section id="projects" className=" scroll-mt-16 md:mb-24  lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-text-main lg:sr-only">
          Projects
        </h2>
      </div>

      <motion.div
        className="flex flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {displayProjects.map((project) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 w-full flex justify-start">
        <a
          className="inline-flex items-center font-medium leading-tight text-text-main hover:text-primary focus-visible:text-primary group/link text-base border-b border-transparent hover:border-primary transition-colors pb-0.5"
          href="/projects"
        >
          <span>
            View Full Project Archive
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none ml-1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;

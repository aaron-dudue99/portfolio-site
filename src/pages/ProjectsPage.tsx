import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-32 pb-20 w-full min-h-screen px-6">
      <div className="w-full max-w-[800px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <a href="/" className="group flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:-translate-x-1">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-bold uppercase tracking-widest">Back</span>
          </a>
          <h1 className="text-4xl font-bold tracking-tight text-text-main">
            All Projects
          </h1>
        </div>

        {loading ? (
          <div className="flex flex-col gap-12">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="w-full h-[200px] rounded-lg bg-[rgba(255,255,255,0.02)] border border-white/5 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="flex flex-col gap-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {projects.map((project) => (
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
        )}
      </div>
    </div>
  );
}

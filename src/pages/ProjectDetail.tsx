import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h3 className="text-xl font-bold text-text-main">Project Not Found</h3>
        <p className="mt-2 text-text-muted">
          The project you are looking for does not exist.
        </p>
      </div>
    );
  }

  const techStackItems = project.techStack
    .split(",")
    .map((item) => item.trim());

  return (
    <article className="w-full px-6 lg:px-0">
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-2xl relative group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          {techStackItems.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-xs uppercase tracking-wider text-primary-200 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white leading-tight mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-[var(--color-text-muted)] mb-8">
          {project.shortDesc}
        </p>

        <div className="flex gap-4 mb-12">
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
            >
              <FaExternalLinkAlt /> Visit Website
            </a>
          )}
          {/* Placeholder for GitHub link if added to data later */}
          {/* <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                  <FaGithub /> View Code
              </a> */}
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-[var(--color-text-muted)] leading-relaxed">
          {typeof project.content === "string" ? (
            <p>{project.content}</p>
          ) : (
            project.content
          )}

          {!project.content && (
            <div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-white/5 text-center">
              <p>Detailed case study content coming soon.</p>
            </div>
          )}
        </div>
      </motion.div>
    </article>
  );
}

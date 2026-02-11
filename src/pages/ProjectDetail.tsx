import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import ReactMarkdown from "react-markdown";
import ScrollIndicator from "../components/ScrollIndicator";

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

         <ul className="flex flex-wrap gap-4 items-center mb-8" aria-label="Technologies used">
          {techStackItems.map((item, index) => (
            <li key={`${item}-${index}`} className="mr-1.5">
              <div className="flex items-center rounded-full bg-[rgba(195,59,59,0.1)] px-3 py-1 text-small font-medium leading-5 text-primary tag-hover">
                {item}
              </div>
            </li>
          ))}
        </ul>

        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white leading-tight mb-4">
          {project.title}
        </h1>
       

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
       
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                  <FaGithub /> View Code
              </a>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-[var(--color-text-muted)] leading-relaxed prose-headings:text-white prose-a:text-primary-400 prose-strong:text-white prose-code:text-primary-200">
          {typeof project.content === "string" ? (
            <div className="markdown-content">
               <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
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
      <ScrollIndicator />
    </article>
  );
}

import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";
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
                <Heading title="My Projects" emoji="💼" />
                <p className="mt-6 mb-12 text-[var(--color-text-muted)] leading-relaxed">
                    A selection of projects I've worked on, ranging from web applications to design systems.
                </p>

                {loading ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="w-full h-[500px] rounded-[2rem] p-8 bg-[rgba(255,255,255,0.02)] border border-white/5">
                                <Skeleton height="300px" className="mb-6 rounded-2xl" />
                                <div className="space-y-4">
                                    <Skeleton variant="text" width="60%" className="h-8" />
                                    <Skeleton variant="text" width="40%" />
                                    <div className="flex gap-2 mt-4">
                                        <Skeleton width={80} height={20} />
                                        <Skeleton width={80} height={20} />
                                        <Skeleton width={80} height={20} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
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
                                    hidden: { opacity: 0, y: 40 },
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

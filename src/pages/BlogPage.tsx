import Heading from "../components/Heading";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";
import { motion } from "motion/react";

const allBlogPosts = [
    {
        title: "The Art of Minimalist UI Design",
        excerpt: "Why less is more when it comes to user interfaces, and how to achieve balance in your designs.",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        image: "/images/project1.jfif",
        slug: "minimalist-ui-design",
    },
    {
        title: "React Server Components Explained",
        excerpt: "A deep dive into RFCs and how they are changing the way we build Next.js applications.",
        date: "Nov 28, 2024",
        readTime: "8 min read",
        image: "/images/project1alt.jfif",
        slug: "react-server-components",
    },
    {
        title: "Mastering Tailwind CSS Grid",
        excerpt: "Stop fighting with CSS Grid. Here is a practical guide to building complex layouts with Tailwind utilities.",
        date: "Nov 15, 2024",
        readTime: "6 min read",
        image: "/images/project1.jfif",
        slug: "mastering-tailwind-grid",
    },
    {
        title: "Accessibility is Not Optional",
        excerpt: "Building for everyone means checking your contrast ratios, semantic HTML, and keyboard navigation.",
        date: "Oct 22, 2024",
        readTime: "4 min read",
        image: "/images/project1alt.jfif",
        slug: "accessibility-is-not-optional",
    },
];

export default function BlogPage() {
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
                <Heading title="My Thoughts and Experiences" emoji="📰" />
                <p className="mt-6 mb-12 text-[var(--color-text-muted)] leading-relaxed">
                    Thoughts, tutorials, and musings on the world of software development.
                </p>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="h-[400px] rounded-[2rem] p-6 bg-[rgba(255,255,255,0.02)] border border-white/5 flex flex-col gap-4">
                                <Skeleton height="200px" className="rounded-2xl" />
                                <Skeleton variant="text" width="80%" className="h-6 mt-2" />
                                <Skeleton variant="text" width="60%" />
                                <div className="mt-auto flex justify-between">
                                    <Skeleton width={60} height={16} />
                                    <Skeleton width={40} height={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        {allBlogPosts.map((post) => (
                            <motion.div
                                key={post.slug}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            >
                                <BlogCard {...post} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}

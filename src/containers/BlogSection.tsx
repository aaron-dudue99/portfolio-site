import Heading from "../components/Heading";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const blogPosts = [
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
        image: "/images/project1.jfif", // Reusing image for now
        slug: "mastering-tailwind-grid",
    },
];

const BlogSection = () => {
    return (
        <section id="blog" className="py-24 w-full">
            <Heading title="My Thoughts and Experiences" emoji="✍🏽" />
            <p
                style={{ color: "var(--color-text-muted)" }}
                className="mt-6 mb-12 leading-relaxed"
            >
                Insights on design, development, and the tech industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <BlogCard key={post.slug} {...post} />
                ))}
            </div>

            <div className="mt-12 w-full flex justify-center">
                <Link to="/blog">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-white font-medium hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                    >
                        View All Posts
                    </motion.button>
                </Link>
            </div>
        </section>
    );
};

export default BlogSection;

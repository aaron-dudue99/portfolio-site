import Heading from "../components/Heading";
import BlogCard from "../components/BlogCard";
import { motion } from "motion/react";
import Button from "../components/Button";

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

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
            >
                {blogPosts.map((post) => (
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

            <div className="mt-12 w-full flex justify-center">
                <Button href="/blog" variant="outline">
                    View All Posts
                </Button>
            </div>
        </section>
    );
};

export default BlogSection;

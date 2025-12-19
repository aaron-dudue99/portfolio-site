import Heading from "../components/Heading";
import BlogCard from "../components/BlogCard";
import { useEffect } from "react";

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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 w-full min-h-screen px-6">
            <div className="w-full max-w-[800px] mx-auto">
                <Heading title="My Thoughts and Experiences" emoji="📰" />
                <p className="mt-6 mb-12 text-[var(--color-text-muted)] leading-relaxed">
                    Thoughts, tutorials, and musings on the world of software development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allBlogPosts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            </div>
        </div>
    );
}

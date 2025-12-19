import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";
import { FaCalendar, FaClock, FaArrowLeft } from "react-icons/fa";
import Heading from "../components/Heading";

const allBlogPosts = {
    "minimalist-ui-design": {
        title: "The Art of Minimalist UI Design",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        image: "/images/project1.jfif",
        content: (
            <>
                <p className="mb-6">Minimalism isn't just about using less color or white space—it's about removing the unnecessary so the necessary may speak. In user interface design, this principle is paramount.</p>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Focus on Content</h3>
                <p className="mb-6">When you strip away shadow effects, complex borders, and noisy textures, the user's attention naturally drifts to what matters: the content. This is why content-first design often goes hand-in-hand with minimalism.</p>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Typography is Key</h3>
                <p className="mb-6">In a minimalist interface, typography carries the weight of the structure. Good font choices, hierarchy, and readable line heights become the primary design elements.</p>
            </>
        )
    },
    "react-server-components": {
        title: "React Server Components Explained",
        date: "Nov 28, 2024",
        readTime: "8 min read",
        image: "/images/project1alt.jfif",
        content: (
            <>
                <p className="mb-6">React Server Components (RSC) represent a major shift in how we think about building React applications. By moving component rendering to the server, we can reduce bundle sizes and access backend resources directly.</p>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Zero Bundle Size</h3>
                <p className="mb-6">Server components are not included in the client-side JavaScript bundle. This means you can use heavy libraries (like markdown parsers or date formatters) without impacting the user's download time.</p>
            </>
        )
    },
};

export default function BlogPost() {
    const { slug } = useParams();
    const post = allBlogPosts[slug as keyof typeof allBlogPosts];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
                <Heading title="Post Not Found" emoji="😕" />
                <Link to="/blog" className="mt-8 text-primary underline">Return to Thoughts</Link>
            </div>
        );
    }

    return (
        <article className="pt-32 pb-20 w-full min-h-screen px-6">
            <div className="w-full max-w-[800px] mx-auto">
                <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest font-bold">
                    <FaArrowLeft /> Back to Thoughts
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-2xl">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)] uppercase tracking-wider font-medium mb-6">
                        <div className="flex items-center gap-2">
                            <FaCalendar />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-[var(--color-text-muted)] leading-relaxed">
                        {post.content || <p>Content coming soon...</p>}
                    </div>
                </motion.div>
            </div>
        </article>
    );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaCalendar, FaClock } from "react-icons/fa";

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    slug: string;
}

export default function BlogCard({
    title,
    excerpt,
    date,
    readTime,
    image,
    slug,
}: BlogCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="relative w-full max-w-sm mx-auto rounded-[2rem] p-6 flex flex-col gap-4 bg-[rgba(255,255,255,0.05)] backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.4)] overflow-hidden h-full"
        >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 text-white flex-grow">
                <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-medium">
                    <div className="flex items-center gap-1">
                        <FaCalendar size={12} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaClock size={12} />
                        <span>{readTime}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold font-heading leading-tight line-clamp-2 text-primary-50">
                    <Link to={`/blog/${slug}`} className="hover:text-primary-300 transition-colors">
                        {title}
                    </Link>
                </h3>

                <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 leading-relaxed">
                    {excerpt}
                </p>
            </div>

            {/* Footer / Link */}
            <div className="mt-auto pt-2">
                <Link
                    to={`/blog/${slug}`}
                    className="inline-flex items-center text-primary-300 hover:text-primary-200 text-sm font-bold uppercase tracking-widest transition-colors group"
                >
                    Read Article
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
        </motion.div>
    );
}

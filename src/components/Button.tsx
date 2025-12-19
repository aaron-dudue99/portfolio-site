import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    onClick?: () => void;
    href?: string;
    className?: string;
    icon?: ReactNode;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    variant = "primary",
    onClick,
    href,
    className = "",
    icon,
    type = "button",
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-colors uppercase text-sm tracking-widest";

    const variants = {
        primary:
            "bg-primary text-white hover:bg-primary-500 shadow-[0_4px_14px_0_rgba(195,59,59,0.39)]",
        secondary: "bg-white text-black hover:bg-gray-200 shadow-lg",
        outline:
            "border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-white hover:bg-[rgba(255,255,255,0.1)]",
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        if (href.startsWith("/")) {
            return (
                <Link to={href}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles}
                    >
                        {icon && <span>{icon}</span>}
                        {children}
                    </motion.div>
                </Link>
            );
        }
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles}
            >
                {icon && <span>{icon}</span>}
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={styles}
        >
            {icon && <span>{icon}</span>}
            {children}
        </motion.button>
    );
}

interface SkeletonProps {
    className?: string;
    variant?: "text" | "rect" | "circle";
    height?: string | number;
    width?: string | number;
}

export default function Skeleton({
    className = "",
    variant = "rect",
    height,
    width,
}: SkeletonProps) {
    const baseStyles = "animate-pulse bg-white/10 rounded";

    const variants = {
        text: "h-4 w-full rounded",
        rect: "h-full w-full rounded-2xl",
        circle: "rounded-full",
    };

    // Allow explicit height/width overrides
    const style = {
        height: height,
        width: width,
    };

    return (
        <div
            className={`${baseStyles} ${variants[variant]} ${className}`}
            style={style}
        />
    );
}

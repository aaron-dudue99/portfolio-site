import { motion } from "motion/react";

const Heading = ({ title, emoji }: { title: string; emoji: string }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight w-full"
    >
      <span
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--color-primary-400), var(--color-primary-50))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        {title}
      </span>{" "}
      {" " + emoji}
    </motion.h2>
  );
};

export default Heading;

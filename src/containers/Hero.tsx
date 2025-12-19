import { motion } from "motion/react";

export default function Hero() {
  const heroText =
    "    Hi there 👋🏽, my name is Duduzile, a frontend developer who loves turning clicks and scrolls into tiny moments of joy. My goal? Making every interface feel intuitive, lively, and a touch magical \u2014 so using apps feels like a treat, not a task.";
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-vignette px-6 sm:px-10  text-left relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-20"
    >
      {/* Floating hand emojis (outside max-width container) */}
      <motion.span
        className="absolute top-24 sm:top-16 left-2 sm:left-4 text-4xl sm:text-6xl select-none z-0 pointer-events-none"
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ maxWidth: "100px", overflow: "hidden" }}
      >
        ✌🏽
      </motion.span>

      <motion.span
        className="absolute bottom-12 sm:bottom-16 right-2 sm:right-4 text-4xl sm:text-6xl select-none z-0 pointer-events-none"
        animate={{ rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ maxWidth: "100px", overflow: "hidden" }}
      >
        🖖🏽
      </motion.span>

      <div className="w-full max-w-[800px] flex flex-col justify-center items-start relative z-10 mx-auto">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight w-full"
          style={{ willChange: "opacity, transform" }}
        >
          <span className="inline-block">building</span>{" "}
          <motion.span
            animate={{
              backgroundPosition: [
                "0% 50%",
                "50% 50%",
                "100% 50%",
                "50% 50%",
                "0% 50%",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="gradient-text"
            style={{
              backgroundImage:
                "linear-gradient(-45deg, #C33B3B, #E78282, #FAE6E6, #C33B3B)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              willChange: "background-position",
            }}
          >
            elegant interfaces
          </motion.span>{" "}
          <span className="inline-block">that feel as good as they look.</span>
        </motion.h1>

        <p
          style={{ color: "var(--color-text-muted)" }}
          className="mt-6  max-w-lg leading-relaxed"
        >
          {heroText}
        </p>

        <motion.div
          className="relative mt-8 cursor-pointer select-none"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <a href="#projects" className="relative inline-block">
            <motion.span
              className="text-white font-semibold uppercase tracking-widest"
              variants={{
                rest: { color: "#fff" },
                hover: { color: "#FAE6E6" },
              }}
              transition={{ duration: 0.3 }}
            >
              View Projects
            </motion.span>

            <motion.div
              className="absolute left-0 bottom-[-4px] h-[2px] bg-[#FAE6E6] rounded-full mt-4"
              variants={{
                rest: { width: "60%" },
                hover: { width: "100%" },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { FaReact, FaNodeJs, FaFigma, FaGithub, FaLaptop } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiAngular } from "react-icons/si";
import Heading from "../components/Heading";

const tools = [
  {
    icon: <FaLaptop size={36} />,
    title: "VS Code",
    reason: "Fast, customizable, and my trusty editor.",
  },
  {
    icon: <SiAngular size={36} />,
    title: "Angular",
    reason: "Love its structure and scalability.",
  },
  {
    icon: <FaReact size={36} />,
    title: "React",
    reason: "Component-driven thinking just makes sense.",
  },
  {
    icon: <SiTypescript size={36} />,
    title: "TypeScript",
    reason: "Type safety = fewer runtime errors.",
  },
  {
    icon: <SiTailwindcss size={36} />,
    title: "Tailwind CSS",
    reason: "Fast styling that keeps creativity flowing.",
  },
  {
    icon: <FaFigma size={36} />,
    title: "Figma",
    reason: "Visualize ideas before coding.",
  },
  {
    icon: <FaGithub size={36} />,
    title: "GitHub",
    reason: "Version control and collaboration made simple.",
  },
  {
    icon: <FaNodeJs size={36} />,
    title: "Node.js",
    reason: "Backend simplicity with JavaScript.",
  },
];

export default function Tools() {
  return (
    <section id="tools" className="w-full py-20 text-white">
      <div className="w-full flex flex-col">
        <Heading title="My Setup & Favorite Tools" emoji="🛠️" />
        <p className=" text-[var(--color-text-muted)] mb-14  mt-6">
          A few tools I can’t live without — they keep my workflow smooth and
          creative.
        </p>

        {/* Tool Cards */}
        <motion.div
          className="w-full flex flex-wrap justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="flex flex-col items-center justify-center text-center w-[170px] h-[170px] rounded-[1.5rem] p-6 bg-[rgba(255,255,255,0.05)] backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            >
              <div className="text-primary-400 mb-3">{tool.icon}</div>
              <h4 className="text-base font-semibold">{tool.title}</h4>
              <p className="text-[var(--color-text-muted)] text-xs italic mt-1">
                {tool.reason}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

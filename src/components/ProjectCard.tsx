import { motion } from "motion/react";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  techStack: string;
  websiteLink?: string;
  completed: boolean;
}

export default function ProjectCard({
  image,
  title,
  subtitle,
  techStack,
  websiteLink,
  completed,
}: ProjectCardProps) {
  const techStackItems = techStack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="relative w-full max-w-4xl mx-auto rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-6 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.4)] overflow-visible"
    >
      {/* Image */}
      <div className="relative w-full md:w-[45%] flex justify-center items-center overflow-visible">
        <img
          src={image}
          alt={title}
          className="rounded-2xl object-cover w-full h-[300px] md:h-[400px]"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-start w-full md:w-[55%] text-white">
        <h3 className="text-2xl sm:text-3xl font-bold font-[Poppins]">
          {title}
        </h3>
        <p className="mt-2 text-[#B3A9A9] text-sm">{subtitle}</p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-3 text-[#E6DADA] text-[11px] tracking-[0.28em] uppercase  font-semibold">
          {(techStackItems.length ? techStackItems : [techStack]).map(
            (item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            )
          )}
        </div>

        {websiteLink && (
          <motion.a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 relative inline-block uppercase text-sm tracking-widest"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.span
              className="text-[#E78282] font-medium"
              variants={{
                rest: { color: "#E78282" },
                hover: { color: "#FAE6E6" },
              }}
              transition={{ duration: 0.3 }}
            >
              Visit the Website
            </motion.span>
            <motion.div
              className="absolute left-0 bottom-[-4px] h-[2px] bg-[#E78282] rounded-full"
              variants={{ rest: { width: "40%" }, hover: { width: "100%" } }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.a>
        )}

        {/* Coming Soon */}
        {!completed && (
          <motion.div
            className="mt-8 relative inline-block uppercase text-sm tracking-widest"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.span
              className="text-[#E78282] font-medium"
              variants={{
                rest: { color: "#E78282" },
                hover: { color: "#FAE6E6" },
              }}
              transition={{ duration: 0.3 }}
            >
              COMING SOON!!
            </motion.span>
            <motion.div
              className="absolute left-0 bottom-[-4px] h-[2px] bg-[#E78282] rounded-full"
              variants={{ rest: { width: "40%" }, hover: { width: "100%" } }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

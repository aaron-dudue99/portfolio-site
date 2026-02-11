import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator if user scrolls down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0 z-50 pointer-events-none"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2 box-border">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-white mb-1"
          />
        </div>
        <span className="text-xs uppercase tracking-widest text-white/50 font-medium">
          Scroll
        </span>
      </div>
    </motion.div>
  );
}

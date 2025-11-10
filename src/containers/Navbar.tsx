"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MdMenu, MdClose } from "react-icons/md";

/** Inline SVG logo */
function LogoSVG({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Hexagon Outline */}
      <polygon
        points="60,10 105,35 105,85 60,110 15,85 15,35"
        fill="none"
        stroke="#c9bfc0"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      {/* Text */}
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="34"
        fill="#c9bfc0"
      >
        DS
      </text>
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const containerBg = scrolled
    ? "bg-[rgba(255,255,255,0.03)]"
    : "bg-[rgba(255,255,255,0.05)]";
  const borderOpacity = scrolled
    ? "border-[rgba(255,255,255,0.06)]"
    : "border-[rgba(255,255,255,0.1)]";
  const blurLevel = scrolled ? "backdrop-blur-sm" : "backdrop-blur-md";

  return (
    <>
      <nav className="fixed top-4 left-0 w-full z-50 pointer-events-auto">
        <div className="mx-auto w-[90%] max-w-[800px]">
          {/* Top navbar */}
          <motion.div
            animate={{
              boxShadow: scrolled
                ? "0 12px 30px rgba(0,0,0,0.45)"
                : "0 0 25px rgba(0,0,0,0.35)",
            }}
            transition={{ duration: 0.22 }}
            className={`${containerBg} ${borderOpacity} ${blurLevel} rounded-2xl px-5 py-3 flex items-center justify-between`}
            style={{ borderStyle: "solid" }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 select-none"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-transparent">
                <LogoSVG size={36} />
              </div>

              <div className="text-sm tracking-wide text-white font-semibold">
                Duduzile Sibanda
              </div>
            </motion.div>

            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((s) => !s)}
              className="text-white p-2 rounded-lg hover:bg-white/6 transition-all"
            >
              {isOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
            </button>
          </motion.div>

          {/* Frosted glass slide-out menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 6 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className={`${containerBg} ${borderOpacity} ${blurLevel} rounded-2xl mt-4 py-5 flex flex-col items-center gap-3`}
                style={{
                  borderStyle: "solid",
                  backgroundColor: "rgba(255, 255, 255, 0.12)", // increased from 0.05 to 0.12
                  backdropFilter: "blur(12px)", // slightly stronger blur for readability
                }}
              >
                {["Home", "Projects", "Work", "Tools", "Contact"].map(
                  (item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="relative text-white text-base py-2 px-6 w-[90%] text-center"
                    >
                      <span className="relative z-10">{item}</span>
                      <motion.span
                        layout
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-0 bottom-0 h-[2px] bg-white rounded-full z-0"
                      />
                    </motion.a>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Backdrop behind the menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[4px]"
          />
        )}
      </AnimatePresence>
    </>
  );
}

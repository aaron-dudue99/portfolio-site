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

  const containerBg = isOpen
    ? "bg-transparent"
    : scrolled
      ? "bg-[rgba(255,255,255,0.03)]"
      : "bg-[rgba(255,255,255,0.05)]";
  const borderOpacity = isOpen
    ? "border-transparent"
    : scrolled
      ? "border-[rgba(255,255,255,0.06)]"
      : "border-[rgba(255,255,255,0.1)]";
  const blurLevel = isOpen
    ? "backdrop-blur-none"
    : scrolled
      ? "backdrop-blur-sm"
      : "backdrop-blur-md";

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 w-full z-50 pointer-events-auto px-4 sm:px-6">
        <div className="mx-auto w-full max-w-[800px]">
          {/* Top navbar */}
          <motion.div
            animate={{
              boxShadow: isOpen
                ? "none"
                : scrolled
                  ? "0 12px 30px rgba(0,0,0,0.45)"
                  : "0 0 25px rgba(0,0,0,0.35)",
            }}
            transition={{ duration: 0.22 }}
            className={`${containerBg} ${borderOpacity} ${blurLevel} rounded-2xl px-5 py-3 flex items-center justify-between relative z-50`}
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-[#121212] backdrop-blur-xl"
              >
                {/* Close button aligned with the navbar's hamburger position */}
                <div className="absolute top-4 left-0 right-0 w-full px-4 sm:px-6 z-50 pointer-events-none">
                  <div className="mx-auto w-full max-w-[800px] flex justify-end">
                    <div className="px-5 py-3">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text-white p-2 rounded-lg hover:bg-white/6 transition-all pointer-events-auto"
                        aria-label="Close menu"
                      >
                        <MdClose size={20} />
                      </button>
                    </div>
                  </div>
                </div>




                {["Home", "Projects", "Work", "Tools", "Blog", "Contact"].map(
                  (item) => (
                    <motion.a
                      key={item}
                      href={item === "Blog" ? "#blog" : `#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl font-bold tracking-tight hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.a>
                  )
                )}

                <motion.a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-8 py-3 rounded-full bg-primary text-white text-lg font-medium hover:bg-primary-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>


    </>
  );
}

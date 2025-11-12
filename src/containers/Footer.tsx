import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

export default function Footer() {
  return (
    <footer className="w-full mt-20">
      <div className="w-full border-t border-[rgba(255,255,255,0.1)]"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-row justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8  rounded flex items-center justify-center text-white text-xs font-bold">
              <LogoSVG size={36} />
            </div>
            <span className="text-white text-sm tracking-wide">
              DESIGN & DEVELOPMENT
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aaron-dudue99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://twitter.com/aarondudue99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

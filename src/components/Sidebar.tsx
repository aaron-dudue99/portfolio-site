import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          // Offset for header/buffer
          currentSection = section.getAttribute("id") || "";
        }
      });

      if (window.scrollY < 100) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#work" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="relative lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <motion.span
        className="absolute top-12 left-4 text-4xl sm:text-6xl select-none z-0 pointer-events-none lg:top-12 lg:left-0"
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ maxWidth: "100px", overflow: "hidden" }}
      >
        ✌🏽
      </motion.span>

      <motion.span
        className="absolute bottom-12 right-4 text-4xl sm:text-6xl select-none z-0 pointer-events-none lg:bottom-12 lg:right-10"
        animate={{ rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ maxWidth: "100px", overflow: "hidden" }}
      >
        🖖🏽
      </motion.span>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-text-main sm:text-5xl">
          <Link to="/">Duduzile Sibanda</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-text-main sm:text-xl">
          FullStack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-text-muted">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.name}>
                  <a
                    className={`group flex items-center py-3 ${isActive ? "active" : ""}`}
                    href={item.href}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-text-main motion-reduce:transition-none ${isActive ? "w-16 bg-text-main" : "bg-text-muted"}`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-text-main group-focus-visible:text-text-main ${isActive ? "text-text-main" : "text-text-muted"}`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-text-main text-text-muted transition-colors"
            href="https://github.com/aaron-dudue99"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub size={24} />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-text-main text-text-muted transition-colors"
            href="https://linkedin.com/in/duduzile-aaron-sibanda"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={24} />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-text-main text-text-muted transition-colors"
            href="mailto:duduzilesibanda99@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Email"
          >
            <span className="sr-only">Email</span>
            <MdEmail size={24} />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-text-main text-text-muted transition-colors"
            href="https://twitter.com/aarondudue99"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter (opens in a new tab)"
          >
            <span className="sr-only">Twitter</span>
            <FaXTwitter size={24} />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-text-main text-text-muted transition-colors"
            href="https://wa.me/263776712092"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp (opens in a new tab)"
          >
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp size={24} />
          </a>
        </li>
      </ul>
    </header>
  );
}

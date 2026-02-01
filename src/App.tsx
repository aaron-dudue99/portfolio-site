import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./containers/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";

function ScrollToAnchor() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return null;
}

function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(231, 130, 130, .1), transparent 70%)`,
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-text-main font-body w-full min-h-screen flex flex-col relative selection:bg-primary-300 selection:text-primary-900">
        <ScrollToAnchor />
        <MouseSpotlight />
        <Navbar />

        <main className="flex-grow z-10 w-full">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

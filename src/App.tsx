import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
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

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-text-main font-body mx-auto w-full max-w-full overflow-x-hidden min-h-screen flex flex-col">
        <ScrollToAnchor />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

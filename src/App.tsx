import Navbar from "./containers/Navbar";
import Hero from "./containers/Hero";
import ProjectsSection from "./containers/ProjectsSection";
import Work from "./containers/Work";
import Contact from "./containers/Contact";
import Tools from "./containers/Tools";
import Footer from "./containers/Footer";

export default function App() {
  return (
    <div className="bg-background text-text-main font-body mx-auto">
      <Navbar />
      <Hero />

      <div className="w-full max-w-[800px] mx-auto flex flex-col justify-center items-start">
        <Tools />
        <ProjectsSection />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

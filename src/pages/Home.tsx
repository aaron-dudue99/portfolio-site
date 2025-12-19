import Hero from "../containers/Hero";
import ProjectsSection from "../containers/ProjectsSection";
import Work from "../containers/Work";
import Contact from "../containers/Contact";
import Tools from "../containers/Tools";
import BlogSection from "../containers/BlogSection";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="w-full max-w-[800px] mx-auto flex flex-col justify-center items-start px-6">
                <Tools />
                <ProjectsSection />
                <BlogSection />
                <Work />
                <Contact />
            </div>
        </>
    );
}

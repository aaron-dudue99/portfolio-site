import Sidebar from "../components/Sidebar";
import SplitLayout from "../components/SplitLayout";
import ProjectsSection from "../containers/ProjectsSection";
import Work from "../containers/Work";
// import Footer from "../containers/Footer";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-text-main lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 leading-relaxed text-text-muted">
          I’m Duduzile Sibanda, a full-stack developer with a strong frontend
          focus, working primarily with Angular and Spring Boot. I specialize in
          building pixel-perfect, intuitive user interfaces with a deep emphasis
          on web accessibility, creating experiences that are both inclusive and
          delightful to use.
        </p>
        <p className="mb-4 leading-relaxed text-text-muted">
          My main focus these days is building accessible, inclusive products
          and digital experiences. Currently working on{" "}
          <span className="text-primary-500 font-medium">Fairstay</span>, a
          digital soulution that is bridging the communications gap between
          landlords and tenants, makes keeping records digitized and raising and
          resolving of disputes transparent.
        </p>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <SplitLayout
      leftContent={<Sidebar />}
      rightContent={
        <div className="flex flex-col">
          <About />
          <Work />
          <ProjectsSection />
          {/* <Tools /> */}
          {/* <BlogSection /> */}
          {/* <Footer /> */}
        </div>
      }
    />
  );
}

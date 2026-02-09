import { Link, NavLink, Outlet } from "react-router-dom";
import SplitLayout from "../components/SplitLayout";
import { projects } from "../data/projects";
import { FaArrowLeft } from "react-icons/fa";

const ProjectsSidebar = () => {
  return (
    <header className="relative px-6 md:px-12 lg:px-0 lg:flex lg:flex-col lg:justify-between overflow-hidden lg:h-full w-full">
      <div className="relative">
        <div className="mt-24 mb-12">
          <Link
            to="/"
            className="group flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-text-main sm:text-5xl mb-8">
          Projects
        </h1>

        <nav className="nav hidden lg:block" aria-label="Project list">
          <div className="mt-8 flex flex-col gap-3">
            {projects.map((project) => (
              <NavLink
                key={project.slug}
                to={`/projects/${project.slug}`}
                className={({ isActive }) =>
                  `group relative flex items-center gap-4 rounded-xl p-3 transition-all duration-300 border glass-card ${
                    isActive
                      ? "bg-white/5 border-white/20 shadow-lg"
                      : "hover:bg-white/5 hover:border-white/10"
                  }`
                }
              >
                <div className="glass-glow-orb"></div>
                <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md bg-white/5">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col relative z-10">
                  <span className="font-bold text-text-main group-hover:text-primary transition-colors">
                    {project.title}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default function ProjectsPage() {
  return (
    <SplitLayout
      leftContent={<ProjectsSidebar />}
      rightContent={<Outlet />}
    />
  );
}

import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  title: string;
  shortDesc: string;
  techStack: string;
  websiteLink?: string;
  // completed: boolean;
  slug: string;
}

export default function ProjectCard({
  image,
  title,
  shortDesc,
  techStack,
  // websiteLink,
  slug,
}: ProjectCardProps) {
  const techStackItems = techStack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

      {/* Thumbnail */}
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <Link
            to={`/projects/${slug}`}
            className="inline-flex items-baseline font-medium leading-tight text-text-main hover:text-primary focus-visible:text-primary group/link text-base"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-normal text-text-muted">
          {shortDesc}
        </p>

        {/* Tech Chips */}
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {techStackItems.map((item, index) => (
            <li key={`${item}-${index}`} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-[rgba(195,59,59,0.1)] px-3 py-1 text-xs font-medium leading-5 text-primary">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Image (Small on left for desktop) */}
      <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
        <img
          alt={title}
          loading="lazy"
          decoding="async"
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: "transparent" }}
          src={image}
        />
      </div>
    </div>
  );
}

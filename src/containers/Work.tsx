interface Job {
  company: string;
  link: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

const jobs: Job[] = [
  {
    company: "Equals Solutions",
    link: "https://equals.co.zw",
    role: "Junior Systems Engineer",
    period: "2024 — 2025",
    description:
      "I maintained and enhanced Angular-based components across internal applications, collaborating closely with backend teams to integrate RESTful APIs and deliver seamless frontend functionality. I identified and resolved UI bugs, optimized performance and user experience across browsers, and implemented responsive designs to ensure mobile compatibility. I refactored legacy codebases to improve readability, maintainability, and performance, while keeping technical documentation up to date to support efficient frontend workflows. I actively participated in code reviews using Git best practices and worked closely with QA teams to validate and verify bug fixes and new features before release. ",
    tags: ["TypeScript", "Angular", "Nx Monorepo", "Redux", "Bootstrap"],
  },
  {
    company: "Equals Solutions",
    link: "https://equals.co.zw",
    role: "Systems Engineer Graduate Intern",
    period: "2023 — 2024",
    description:
      "I maintained and enhanced Angular components within internal applications, collaborating with backend teams to integrate RESTful APIs into frontend systems. I identified and resolved UI bugs, improving user experience across multiple browsers, and implemented responsive designs to support mobile compatibility. I worked on refactoring legacy codebases to improve readability, maintainability, and performance, and updated technical documentation to support frontend workflows and features. I participated in code reviews, followed Git version control best practices, and worked closely with QA teams to validate and verify bug fixes and new functionality.",
    tags: ["TypeScript", "Angular", "Nx Monorepo", "Redux", "Bootstrap"],
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-text-main lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {jobs.map((job, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted sm:col-span-2"
                  aria-label={job.period}
                >
                  {job.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-text-main">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text-main hover:text-primary focus-visible:text-primary group/link text-base"
                        href={job.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${job.role} at ${job.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {job.role} ·{" "}
                          <span className="inline-block">
                            {job.company}
                            {/* Arrow Icon */}
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
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-text-muted">
                    {job.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {job.tags.map((tag) => (
                      <li key={tag} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-[rgba(195,59,59,0.1)] px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tag}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12">
        <a
          className="inline-flex items-baseline font-medium leading-tight text-text-main hover:text-primary focus-visible:text-primary group/link text-base border-b border-transparent hover:border-primary transition-colors pb-0.5"
          href="/docs/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            View Resumé (PDF)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none ml-1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Work;

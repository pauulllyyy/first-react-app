import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return <ProjectsSection />;
}

const projects = [
  {
    image: "/assets/Port.PNG",
    title: "My Portfolio",
    description:
      "A personal portfolio website built with React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },

  {
    image: "/assets/first.PNG",
    title: "My First App",
    description:
      "A responsive web application created while learning modern frontend development.",
    tech: ["React", "Vite", "Tailwind CSS"],
  },
];

export function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            My Portfolio
          </p>

          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            My{" "}
            <span
              className="
            inline-block
            bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
            bg-clip-text text-transparent
            animate-pulse
            "
            >
              Works
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
            Here are some of the projects I've created while learning and
            improving my web development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
              group
              w-full
              max-w-[420px]
              min-h-[500px]
              overflow-hidden
              rounded-3xl
              border border-gray-100
              bg-white
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-xl
             "
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-center text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-violet-500">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    className="
                      group/btn
                      flex flex-1 items-center justify-center gap-2
                      rounded-xl
                      bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
                      px-4 py-3
                      text-sm font-medium text-white
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    View Project
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>

                  <button className="flex items-center justify-center rounded-xl border border-gray-200 px-4 text-gray-500 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

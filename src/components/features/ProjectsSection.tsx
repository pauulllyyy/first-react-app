import { ArrowRight } from "lucide-react";
import portImage from "@/assets/portfolio.png";
import firstImage from "@/assets/gwapo.png";

export default function ProjectsPage() {
  return <ProjectsSection />;
}

const projects = [
  {
    image: portImage,
    title: "My Portfolio",
    description:
      "A personal portfolio showcasing my creativity, projects, and journey as an aspiring architect.",
    tech: ["AutoCAD", "SketchUp", "Architectural Design"],
  },
  {
    image: firstImage,
    title: "My First Architectural Design",
    description:
      "A conceptual architectural design created as part of my journey in learning space planning, design principles, and architectural visualization.",
    tech: ["AutoCAD", "SketchUp", "Architectural Design"],
  },
];

export function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5EBDD] py-20 md:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            My Portfolio
          </p>

          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700" />

          <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 md:text-6xl">
            My{" "}
            <span
              className="
                inline-block
                bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                bg-clip-text text-transparent
              "
            >
              Works
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
            Here are some of the projects and designs I've created while
            developing my skills and exploring architecture.
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
                border border-amber-100
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-amber-900/10
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
                <h2 className="text-center text-xl font-bold text-stone-900 transition-colors duration-300 group-hover:text-amber-700">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        bg-amber-50
                        px-3 py-1
                        text-xs
                        font-medium
                        text-amber-800
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-6 flex gap-3">
                  <button
                    className="
                      group/btn
                      flex flex-1 items-center justify-center gap-2
                      rounded-xl
                      bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                      px-4 py-3
                      text-sm font-medium text-white
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                      hover:shadow-amber-600/20
                    "
                  >
                    View Project

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import { NavLink } from "react-router";
import { ArrowRight, Code2, Palette, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Get to know me
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
              About{" "}
              <span
                className="
                inline-block
                bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
                bg-clip-text text-transparent
                animate-pulse
                "
              >
                Me
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl">
              I'm an aspiring web developer who enjoys building clean,
              responsive, and creative websites.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="border-t border-gray-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          {/* Picture */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-200 via-violet-200 to-pink-200 blur-2xl opacity-60" />

              <img
                src="/assets/me.jpg"
                alt="My profile"
                className="
                relative z-10
                h-[450px] w-[350px]
                rounded-[50%]
                object-cover
                transition-transform duration-500
                hover:scale-105
  "
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-500">
              Who I Am
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Creating things that are{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                simple & meaningful
              </span>
            </h2>

            <p className="mt-6 leading-relaxed text-gray-500">
              Hello! I'm a student and aspiring web developer interested in
              creating modern and user-friendly websites. I enjoy learning new
              technologies and improving my skills through different projects.
            </p>

            <p className="mt-4 leading-relaxed text-gray-500">
              My goal is to continue developing my skills in frontend
              development and create websites that are both visually appealing
              and easy to use.
            </p>

            <NavLink to="/contact">
              <Button
                className="
                  group mt-8 rounded-full
                  bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
                  px-6 text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Get In Touch
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Skills / Interests */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              What I{" "}
              <span
                className="
                inline-block
                bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
                bg-clip-text text-transparent
                animate-pulse
                "
              >
                Enjoy
              </span>
            </h2>

            <p className="mt-3 text-gray-500">
              Some areas that I'm passionate about.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <Code2 size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Web Development
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Building responsive and functional websites using modern web
                technologies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-500">
                <Palette size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                UI & Design
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Creating clean interfaces with a focus on usability and visual
                design.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
                <Laptop size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">Learning</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Continuously learning new tools, frameworks, and development
                techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

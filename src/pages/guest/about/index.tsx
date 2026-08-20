import { NavLink } from "react-router";
import { ArrowRight, Ruler, Palette, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import meImage from "../../../assets/me.jpg";

export default function AboutPage() {
  return (
    <main className="bg-[#F5EBDD]">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Get to know me
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 md:text-6xl">
              About{" "}
              <span
                className="
                  inline-block
                  bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                  bg-clip-text text-transparent
                "
              >
                Me
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-stone-600 md:text-xl">
              I dream of becoming an architect and designing spaces that are
              both functional and inspiring.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="border-t border-amber-900/10 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          {/* Picture */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Amber Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-300 via-orange-200 to-stone-300 blur-2xl opacity-60" />

              <img
                src={meImage}
                alt="John Wendill M. Gianan"
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700">
              Who I Am
            </p>

            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
              Creating spaces that are{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700 bg-clip-text text-transparent">
                simple & meaningful
              </span>
            </h2>

            <p className="mt-6 leading-relaxed text-stone-600">
              Hello! I'm a BS Information Technology student with a passion for architectural design. I
              enjoy exploring architectural concepts, design ideas, and
              different ways of transforming creative ideas into practical
              spaces.
            </p>

            <p className="mt-4 leading-relaxed text-stone-600">
              My goal is to continue developing my skills in architectural
              design, planning, and visualization while creating spaces that
              are visually appealing, functional, and purposeful.
            </p>

            <NavLink to="/contact">
              <Button
                className="
                  group mt-8 rounded-full
                  bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                  px-6 text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-amber-600/20
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
      <section className="bg-[#EFE3D0] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
              What I{" "}
              <span
                className="
                  inline-block
                  bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                  bg-clip-text text-transparent
                "
              >
                Enjoy
              </span>
            </h2>

            <p className="mt-3 text-stone-600">
              Some areas that I'm passionate about.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div
              className="
                rounded-2xl border border-amber-100
                bg-white p-8 text-center shadow-sm
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Ruler size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-stone-900">
                Architectural Design
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                Exploring creative concepts and developing functional
                architectural designs.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                rounded-2xl border border-amber-100
                bg-white p-8 text-center shadow-sm
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Palette size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-stone-900">
                Creative Design
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                Combining creativity, aesthetics, and design principles to
                create meaningful spaces.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                rounded-2xl border border-amber-100
                bg-white p-8 text-center shadow-sm
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                <Building2 size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-stone-900">
                Architecture & Planning
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                Learning about space planning, functionality, and the
                relationship between people and the built environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
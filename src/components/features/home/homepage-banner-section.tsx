import { NavLink } from "react-router";
import { ArrowRight, Mail } from "lucide-react";
import jpImage from "../../../assets/jp.png";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

export function HomePageBannerSection() {
  return (
    <Section className="relative overflow-hidden bg-[#F3EDE2] py-20 md:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          {/* Small Text */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Welcome to my portfolio
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-stone-900 md:text-6xl">
            Hi, I'm{" "}
            <span
              className="
                inline-block
                bg-gradient-to-r from-amber-700 via-orange-700 to-stone-700
                bg-clip-text text-transparent
              "
            >
              John Wendill M. Gianan
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl">
            I aspire to become an architect, combining creativity, design, and
            innovation to create functional and inspiring spaces.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            {/* View My Work */}
            <NavLink to="/projects">
              <Button
                className="
                  group h-12 w-full rounded-full px-7 text-base text-white
                  bg-gradient-to-r from-amber-700 via-orange-700 to-stone-700
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-amber-700/20
                  sm:w-auto
                "
              >
                View My Work

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </NavLink>

            {/* Contact Me */}
            <NavLink to="/contact">
              <Button
                className="
                  group h-12 w-full rounded-full
                  border border-stone-300
                  bg-white px-7 text-base text-stone-700
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-amber-400
                  hover:bg-amber-50
                  hover:text-amber-700
                  sm:w-auto
                "
              >
                <Mail
                  size={18}
                  className="mr-2 transition-transform duration-300 group-hover:scale-110"
                />

                Contact Me
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="relative flex flex-1 justify-center">
          {/* Decorative Circle */}
          <div
            className="
              absolute h-72 w-72 rounded-full
              bg-gradient-to-br from-amber-200 via-orange-200 to-stone-300
              opacity-60 blur-2xl
            "
          />

          {/* Profile Image */}
          <img
            src={jpImage}
            alt="John Wendill M. Gianan"
            className="
              relative z-10
              max-h-[450px]
              w-auto
              object-contain
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>
      </div>
    </Section>
  );
}
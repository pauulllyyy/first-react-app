import { NavLink } from "react-router";
import { ArrowRight, Mail } from "lucide-react";
import jpImage from "../../../assets/jp.png";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

export function HomePageBannerSection() {
  return (
    <Section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          {/* Small Text */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            Welcome to my portfolio
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Hi, I'm{" "}
            <span
              className="
            inline-block
            bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
            bg-clip-text text-transparent
            animate-pulse
            "
            >
              John Paul
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500 md:text-xl">
            I'm an aspiring web developer who enjoys creating clean, responsive,
            and user-friendly websites using modern web technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <NavLink to="/projects">
              <Button
                className="
                  group h-12 w-full rounded-full px-7 text-base text-white
                  bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-violet-500/20
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

            <NavLink to="/contact">
              <Button
                className="
                  group h-12 w-full rounded-full border-gray-200
                  bg-white px-7 text-base text-gray-700
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-300
                  hover:bg-violet-50
                  hover:text-violet-600
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
          {/* Decorative Gradient Circle */}
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-blue-200 via-violet-200 to-pink-200 opacity-60 blur-2xl" />

          {/* Your Image */}
          <img
            src={jpImage}
            alt="My profile"
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

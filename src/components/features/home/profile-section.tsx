import { Mail, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import meImage from "../../../assets/me.jpg";

import { Button } from "@/components/ui/button";

export function ProfileSection() {
  const profile = {
    name: "John Wendill M. Gianan",
    email: "giananjohnwendill@gmail.com",
  };

  return (
    <section className="relative overflow-hidden bg-[#F5EBDD] py-20 md:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-3 flex flex-col items-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            My Profile
          </p>

          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700" />

          <h2 className="text-4xl font-extrabold tracking-tight text-stone-900 md:text-5xl">
            Get to know{" "}
            <span
              className="
                inline-block
                bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                bg-clip-text text-transparent
              "
            >
              Me
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-stone-600">
            A little information about me and how you can get in touch.
          </p>
        </div>

        {/* Profile Card */}
        <div className="mx-auto max-w-3xl">
          <div
            className="
              group relative overflow-hidden rounded-3xl
              border border-amber-100
              bg-white p-8 shadow-sm
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-xl
              md:p-10
            "
          >
            {/* Gradient Line */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700" />

            <div className="flex flex-col items-center gap-8 md:flex-row">
              {/* Profile Image */}
              <div className="h-28 w-28 shrink-0 rounded-full bg-gradient-to-br from-amber-500 via-orange-500 to-stone-700 p-1">
                <img
                  src={meImage}
                  alt={profile.name}
                  className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Profile Information */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm font-medium text-stone-400">
                  Hello, I'm
                </p>

                <h3 className="mt-1 text-2xl font-bold text-stone-900">
                  {profile.name}
                </h3>

                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-stone-500 md:justify-start">
                  <Mail size={16} className="text-amber-600" />
                  <span>{profile.email}</span>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone-500">
                  I aspire to pursue a career in architecture, combining
                  creativity, design, and innovation.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 flex justify-center md:justify-end">
              <NavLink to="/contact">
                <Button
                  className="
                    group/btn rounded-full px-6
                    bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                    text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-amber-600/20
                  "
                >
                  Contact Me

                  <ArrowRight
                    size={17}
                    className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
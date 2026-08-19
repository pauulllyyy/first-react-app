import { Mail, User, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import meImage from "../../../assets/me.jpg";

import { Button } from "@/components/ui/button";

export function ProfileSection() {
  const profile = {
    name: "John Paul M. Gianan",
    email: "test@gmail.com",
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-3 flex flex-col items-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
            My Profile
          </p>

          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Get to know{" "}
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
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            A little information about me and how you can get in touch.
          </p>
        </div>

        {/* Profile Card */}
        <div className="mx-auto max-w-3xl">
          <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-10">
            {/* Gradient Line */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

            <div className="flex flex-col items-center gap-8 md:flex-row">
              {/* Profile Icon */}
              <div className="h-28 w-28 shrink-0 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 p-1">
                <img
                  src={meImage}
                  alt={profile.name}
                  className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Profile Information */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm font-medium text-gray-400">Hello, I'm</p>

                <h3 className="mt-1 text-2xl font-bold text-gray-900">
                  {profile.name}
                </h3>

                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500 md:justify-start">
                  <Mail size={16} className="text-violet-500" />
                  <span>{profile.email}</span>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
                  I'm an aspiring web developer who enjoys creating clean,
                  responsive, and user-friendly websites.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 flex justify-center md:justify-end">
              <NavLink to="/contact">
                <Button
                  className="
                    group/btn rounded-full px-6
                    bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
                    text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-violet-500/20
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

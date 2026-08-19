import { NavLink } from "react-router";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto bg-white text-gray-900">
      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              My
              <span
                className="
                inline-block
                bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
                bg-clip-text text-transparent
                animate-pulse
               "
              >
                Portfolio
              </span>
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Building creative and modern web experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <NavLink
              to="/"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-500"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-violet-500"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-pink-500"
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Divider Line */}
        <div className="my-8 h-px w-full bg-gray-200" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 text-xs text-gray-400 transition-colors duration-300 hover:text-violet-500"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </footer>
  );
}

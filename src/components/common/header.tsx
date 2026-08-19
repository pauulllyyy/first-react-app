import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/section";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if (isActive) {
      return "text-gray-900 after:w-full";
    }

    return "text-gray-500 after:w-0 hover:text-gray-900 hover:after:w-full";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      {/* Gradient Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

      {/* Mobile Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={toggleMenu}
      />

      <Section
        className="py-0"
        containerClassName="relative z-50 bg-transparent"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex h-25 w-25 items-center justify-center rounded-xl b">
                <img
                  src="/assets/images.png"
                  alt="MyPortfolio logo"
                  className="h-full w-full object-contain"
                />
              </div>

             
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    "after:absolute after:-bottom-2 after:left-0 after:h-0.5",
                    "after:bg-gradient-to-r after:from-blue-500 after:via-violet-500 after:to-pink-500",
                    "after:transition-all after:duration-300",
                    getLinkClass(isActive),
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Contact */}
            <NavLink to="/contact">
              <Button
                className="
                  rounded-full
                  bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
                  px-6
                  text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                Contact
              </Button>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="
              inline-flex items-center justify-center
              rounded-lg p-2
              text-gray-500
              transition-colors
              hover:bg-gray-100
              hover:text-gray-900
              md:hidden
            "
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Section>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-full z-50 overflow-hidden border-b border-gray-200 bg-white shadow-lg transition-all duration-300 md:hidden",
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="space-y-2 px-6 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-violet-50 text-violet-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="border-t border-gray-100 pt-3">
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="
                  w-full rounded-full
                  bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
                  text-white
                "
              >
                Contact
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

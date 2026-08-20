import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/section";
import logoImage from "../../assets/images.png";

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
      return "text-stone-900 after:w-full";
    }

    return "text-stone-600 after:w-0 hover:text-amber-700 hover:after:w-full";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-900/10 bg-[#F5EBDD]/95 backdrop-blur-md">
      {/* Amber Gradient Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700" />

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
              <div className="flex h-25 w-25 items-center justify-center rounded-xl">
                <img
                  src={logoImage}
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
                    "after:bg-gradient-to-r after:from-amber-600 after:via-orange-500 after:to-stone-700",
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
                  bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                  px-6
                  text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-md
                  hover:shadow-amber-600/20
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
              text-stone-600
              transition-colors
              hover:bg-amber-100
              hover:text-amber-700
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
          "absolute left-0 right-0 top-full z-50 overflow-hidden border-b border-amber-900/10 bg-[#F5EBDD] shadow-lg transition-all duration-300 md:hidden",
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
                    ? "bg-amber-100 text-amber-700"
                    : "text-stone-600 hover:bg-amber-50 hover:text-amber-700",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="border-t border-amber-900/10 pt-3">
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="
                  w-full rounded-full
                  bg-gradient-to-r from-amber-600 via-orange-500 to-stone-700
                  text-white
                  transition-all duration-300
                  hover:shadow-md
                  hover:shadow-amber-600/20
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
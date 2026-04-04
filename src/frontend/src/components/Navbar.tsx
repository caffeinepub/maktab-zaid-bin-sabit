import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Star, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Admission", to: "/admission" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-islamic-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-full bg-islamic-green flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-islamic-green text-sm block leading-none">
                Maktab Zaid
              </span>
              <span className="text-[10px] text-islamic-body block leading-none mt-0.5">
                Bin Sabit
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-islamic-green text-white"
                    : "text-islamic-body hover:text-islamic-green hover:bg-islamic-mint"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/admission">
              <Button
                data-ocid="nav.primary_button"
                className="bg-islamic-green text-white hover:bg-islamic-green/90 rounded-full px-5 text-sm font-semibold"
              >
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-islamic-body hover:bg-islamic-mint"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-islamic-border px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? "bg-islamic-green text-white"
                  : "text-islamic-body hover:bg-islamic-mint hover:text-islamic-green"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/admission" onClick={() => setMobileOpen(false)}>
            <Button
              data-ocid="nav.primary_button"
              className="w-full mt-2 bg-islamic-green text-white hover:bg-islamic-green/90 rounded-full font-semibold"
            >
              Enroll Now
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}

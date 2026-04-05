import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  Home,
  LogIn,
  Menu,
  Phone,
  Video,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/", icon: Home },
  { label: "Courses", to: "/courses", icon: BookOpen },
  { label: "Admission", to: "/admission", icon: GraduationCap },
  { label: "Videos", to: "/online-classes", icon: Video },
  { label: "Contact", to: "/contact", icon: Phone },
  { label: "Login", to: "/login", icon: LogIn },
];

function CrescentIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="#D4AF37"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="5" r="1.2" fill="#D4AF37" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-islamic-green/95 backdrop-blur-md border-b border-white/10 shadow-sm"
      data-ocid="nav.panel"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16 gap-3">
          {/* Hamburger — LEFT */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
                aria-label="Open menu"
                data-ocid="nav.toggle"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-72 bg-islamic-dark border-r border-white/10 p-0 islamic-pattern"
            >
              {/* Drawer header */}
              <div className="px-6 pt-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <CrescentIcon />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">
                      Maktab Zaid Bin Sabit
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">Deeni Taleem</p>
                  </div>
                </div>
              </div>

              {/* Drawer links */}
              <nav
                className="px-4 py-5 space-y-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      data-ocid="nav.link"
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        active
                          ? "bg-islamic-gold text-islamic-dark shadow-sm"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <link.icon className="w-4 h-4 flex-shrink-0" />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="px-6 pt-4 border-t border-white/10">
                <Link to="/admission" onClick={() => setOpen(false)}>
                  <button
                    type="button"
                    data-ocid="nav.primary_button"
                    className="w-full py-3 rounded-full bg-islamic-gold text-islamic-dark font-bold text-sm hover:bg-islamic-gold-light transition-colors"
                  >
                    Apply for Admission
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 flex-1 md:flex-none group"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
              <CrescentIcon />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-white text-sm block leading-none">
                Maktab Zaid Bin Sabit
              </span>
              <span className="text-islamic-gold text-[10px] block leading-none mt-0.5">
                Deeni Taleem for Every Child
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1 ml-auto"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive(link.to)
                    ? "bg-islamic-gold text-islamic-dark font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block ml-2">
            <Link to="/admission" data-ocid="nav.primary_button">
              <button
                type="button"
                className="px-5 py-2 rounded-full bg-islamic-gold text-islamic-dark font-bold text-sm hover:bg-islamic-gold-light transition-colors shadow-sm"
              >
                Apply Now
              </button>
            </Link>
          </div>

          {/* Mobile Apply CTA */}
          <div className="md:hidden flex-shrink-0">
            <Link to="/admission">
              <button
                type="button"
                data-ocid="nav.primary_button"
                className="px-4 py-1.5 rounded-full bg-islamic-gold text-islamic-dark font-bold text-xs hover:bg-islamic-gold-light transition-colors"
              >
                Apply
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

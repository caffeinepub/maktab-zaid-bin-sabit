import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Home, Phone, ShoppingBag } from "lucide-react";

const tabs = [
  { label: "Home", icon: Home, to: "/" },
  { label: "Courses", icon: BookOpen, to: "/courses" },
  { label: "Store", icon: ShoppingBag, to: "/store" },
  { label: "Contact", icon: Phone, to: "/contact" },
];

export function BottomNav() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-bottom-nav"
      aria-label="Bottom navigation"
      data-ocid="bottom-nav.panel"
    >
      <div className="flex items-center justify-around h-16 pb-1">
        {tabs.map((tab) => {
          const active = isActive(tab.to);
          return (
            <Link
              key={tab.to}
              to={tab.to}
              data-ocid={`bottom-nav.${tab.label.toLowerCase()}.link`}
              className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all"
            >
              <div
                className={`flex items-center justify-center w-10 h-7 rounded-full transition-all ${
                  active ? "bg-islamic-green/10" : ""
                }`}
              >
                <tab.icon
                  className={`w-5 h-5 transition-colors ${
                    active ? "text-islamic-green" : "text-gray-400"
                  }`}
                  strokeWidth={active ? 2.5 : 1.8}
                />
              </div>
              <span
                className={`text-[10px] font-semibold leading-none transition-colors ${
                  active ? "text-islamic-green" : "text-gray-400"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

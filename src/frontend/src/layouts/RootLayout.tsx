import { Outlet } from "@tanstack/react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

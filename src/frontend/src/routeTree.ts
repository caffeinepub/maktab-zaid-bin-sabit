import { createRootRoute, createRoute } from "@tanstack/react-router";
import { AdminLayout } from "./layouts/AdminLayout";
import { RootLayout } from "./layouts/RootLayout";
import { AdminPage } from "./pages/AdminPage";
import { AdmissionPage } from "./pages/AdmissionPage";
import { ContactPage } from "./pages/ContactPage";
import { CoursesPage } from "./pages/CoursesPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { OnlineClassesPage } from "./pages/OnlineClassesPage";
import { StorePage } from "./pages/StorePage";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: CoursesPage,
});

const admissionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admission",
  component: AdmissionPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const storeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/store",
  component: StorePage,
});

const onlineClassesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/online-classes",
  component: OnlineClassesPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

// Admin uses its own isolated root (no site navbar/footer)
const adminRootRoute = createRootRoute({
  component: AdminLayout,
});

const adminRoute = createRoute({
  getParentRoute: () => adminRootRoute,
  path: "/admin",
  component: AdminPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  coursesRoute,
  admissionRoute,
  contactRoute,
  storeRoute,
  onlineClassesRoute,
  loginRoute,
]);

export const adminRouteTree = adminRootRoute.addChildren([adminRoute]);

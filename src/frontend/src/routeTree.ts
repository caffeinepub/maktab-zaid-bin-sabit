import { createRootRoute, createRoute } from "@tanstack/react-router";
import { RootLayout } from "./layouts/RootLayout";
import { AdmissionPage } from "./pages/AdmissionPage";
import { ContactPage } from "./pages/ContactPage";
import { CoursesPage } from "./pages/CoursesPage";
import { HomePage } from "./pages/HomePage";

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

export const routeTree = rootRoute.addChildren([
  indexRoute,
  coursesRoute,
  admissionRoute,
  contactRoute,
]);

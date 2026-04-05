import { RouterProvider, createRouter } from "@tanstack/react-router";
import { adminRouteTree, routeTree } from "./routeTree";

const router = createRouter({ routeTree });
const adminRouter = createRouter({ routeTree: adminRouteTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const isAdmin = window.location.pathname.startsWith("/admin");
  if (isAdmin) {
    return <RouterProvider router={adminRouter} />;
  }
  return <RouterProvider router={router} />;
}

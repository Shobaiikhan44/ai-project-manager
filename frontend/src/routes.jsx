import { createBrowserRouter } from "react-router";
import App from "./App";
import CreateProject from "./routes/CreateProject";
import LoginPage from "./routes/LoginPage";
import ProjectsPage from "./routes/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <ProjectsPage />,
          },
          {
            path: "new",
            element: <CreateProject />,
          },
        ],
      },
    ],
  },
]);

export default router;

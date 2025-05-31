import { createBrowserRouter } from "react-router";
import ProjectsPage from "./routes/ProjectsPage";
import App from "./App";
import LoginPage from "./routes/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

export default router;

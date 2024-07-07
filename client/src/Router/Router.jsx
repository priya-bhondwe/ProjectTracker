import { createBrowserRouter } from "react-router-dom";
import Frontend from "../components/Layouts/frontendLayout/Frontend";
import SignIn from "../components/Auth/SignIn";
import PrivateRoutes from "./PrivateRoutes";
import Backend from "../components/Layouts/backendLayout/Backend";
import Dashboard from "../components/dashboard/Dashboard";
import ProjectList from "../components/project/ProjectList";
import CreateProject from "../components/project/CreateProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/secured",
    element: (
      // <PrivateRoutes>
        <Backend />
      // </PrivateRoutes>
    ),
    children: [
      {
        path: "/secured/dashboard",
        element: (
          // <PrivateRoutes>
            <Dashboard />
          // </PrivateRoutes>
        ),
      },
      {
        path: "/secured/dashboard",
        element: (
          // <PrivateRoutes>
            <Dashboard />
          // </PrivateRoutes>
        ),
      },
      {
        path: "/secured/project-list",
        element: (
          // <PrivateRoutes>
            <ProjectList />
          // </PrivateRoutes>
        ),
      },
      {
        path: "/secured/create-project",
        element: (
          // <PrivateRoutes>
            <CreateProject />
          // </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;

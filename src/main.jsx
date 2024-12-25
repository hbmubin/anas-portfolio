import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dashboard from "./admin-dashboard/Dashboard.jsx";
import AuthProvider from "./private/AuthProvider.jsx";
import PrivateRoute from "./private/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin-login",
    element: <Login></Login>,
  },
  {
    path: "/admin-dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

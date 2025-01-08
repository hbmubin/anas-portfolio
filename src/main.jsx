import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dashboard from "./admin-dashboard/Dashboard.jsx";
import AuthProvider from "./private/AuthProvider.jsx";
import PrivateRoute from "./private/PrivateRoute.jsx";
import Error from "./Error.jsx";
import DashboardProfile from "./admin-dashboard/DashboardProfile.jsx";
import DashboardWorks from "./admin-dashboard/DashboardWorks.jsx";
import WorkDetails from "./admin-dashboard/WorkDetails.jsx";
import AddWork from "./admin-dashboard/AddWork.jsx";
import DashboardReviews from "./admin-dashboard/DashboardReviews.jsx";
import AddReview from "./admin-dashboard/AddReview.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import ReviewDetails from "./admin-dashboard/ReviewDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>
  },
  {
    path: "/admin-login",
    element: <Login></Login>,
  },
  {
    path: "/admin-dashboard/",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: "",
        element: <Navigate to="/admin-dashboard/profile" replace />
      },
      {
        path:'profile',
        element: <PrivateRoute><DashboardProfile></DashboardProfile></PrivateRoute>
      },
      {
        path:'works',
        element: <PrivateRoute><DashboardWorks></DashboardWorks></PrivateRoute>,
      },
      {
        path:'works/add-work',
        element: <PrivateRoute><AddWork></AddWork></PrivateRoute>,
      },
      {
        path:'works/:id',
        element: <PrivateRoute><WorkDetails></WorkDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://anas-portfolio-server.vercel.app/works/${params.id}`)
      },
      {
        path: 'reviews',
        element:<PrivateRoute><DashboardReviews></DashboardReviews></PrivateRoute>
      },
      {
        path:'reviews/add-review',
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
      },
      {
        path:'reviews/:name',
        element: <PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://anas-portfolio-server.vercel.app/reviews/${params.name}`)
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>
);

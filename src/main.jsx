import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./i18n/i18n.js";
import "./index.css";

import MainLayout from "./layouts/mainLayout.jsx";
import LogIn from "./pages/auth/log in/LogIn.jsx";
import SignUp from "./pages/auth/sign up/SignUp.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Home from "./pages/home/Home.jsx";
import Loading from "./pages/loading/Loading.jsx";
import ProductDetails from "./pages/product details/ProductDetails.jsx";
import Profile from "./pages/profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      { path: "profile", element: <Profile /> },
    ],
  },
  {
    path: "loading",
    element: <Loading />,
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

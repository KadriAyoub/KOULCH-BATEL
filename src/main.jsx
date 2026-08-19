import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import "./i18n/i18n.js";
import MainLayout from "./layouts/mainLayout.jsx";
import ProductDetails from "./pages/product details/ProductDetails.jsx";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

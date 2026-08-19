import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import MainLayout from "./layouts/mainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import ProductDetails from "./pages/product details/ProductDetails.jsx";
import AddProduct from "./pages/addProduct/AddProduct.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

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
        path: "/Product_details",
        element: <ProductDetails />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/products",
    Component: ProductsPage,
  },
  {
    path: "/products/:slug",
    Component: ProductDetailsPage,
  },
]);

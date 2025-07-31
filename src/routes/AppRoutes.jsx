import ABoutPage from "../pages/ABoutPage";
import { HomePage } from "@pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "../pages/ProductDetails";
import { NotFoundPage } from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<ABoutPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

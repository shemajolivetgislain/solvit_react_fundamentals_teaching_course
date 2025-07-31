import React from "react";
useProducts;
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export const HomePage = () => {
  const { products } = useProducts();

  return (
    <div className="min-h-dvh bg-blue-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page - Product List</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow-sm">
            <h2 className="text-xl">{product.name}</h2>
            <p>{product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="text-blue-500 underline mt-2 inline-block"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

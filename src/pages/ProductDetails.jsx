import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();

  // Find product that matches the id
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold mt-2">{product.price}</p>
    </div>
  );
};

import React, { createContext } from "react";

// Sample product data
const products = [
  { id: "1", name: "Laptop", price: "$999", description: "A powerful laptop." },
  { id: "2", name: "Phone", price: "$699", description: "A smart phone." },
  {
    id: "3",
    name: "Headphones",
    price: "$199",
    description: "Wireless headphones.",
  },
  {
    id: "4",
    name: "Smartwatch",
    price: "$299",
    description: "A wearable smartwatch.",
  },
];

// Create context
// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();

// Context provider component
export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

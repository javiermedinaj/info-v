import React from "react";
import data from "../data/Products.json";

const Products = () => {
  const products = data.products;

  return (
    <div className="bg-black">
    <p className="text-center text-6xl text-neutral-400 py-8">Nuestros Productos</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 py-8 bg-black">
      {products.map((product) => (
        <div key={product.id} className="text-center bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">{product.name}</h2>
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-48 w-auto"
          />
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart 
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;

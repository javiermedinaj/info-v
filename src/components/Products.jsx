import React from "react";
import data from "../data/Products.json";
import { forwardRef } from "react";

const Products = forwardRef((props, ref) => {
  const products = data.products;

  return (
    <div ref={ref} className="bg-black">
      <p className="flex justify-center text-m-2 uppercase tracking-[8px] py-8 text-gray-500 text-6x1">
        Nuestros Productos
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 py-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-white">
                {product.name}
              </h2>
              <p className="text-gray-300">{product.description}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a
                  href="https://wa.link/vzf064"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Products;

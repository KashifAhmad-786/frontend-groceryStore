import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-4 flex-1 flex flex-col">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="font-semibold text-lg text-gray-800 truncate">
          <Link to={`/product/${product.id}`} className="hover:text-green-600 transition-colors">
            {product.name}
          </Link>
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <div className="font-bold text-xl text-gray-900">Rs {product.price}</div>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <FiShoppingCart />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

export default function CartPage() {
  const { cart, updateQty, removeItem, total } = useCart();

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-xl mb-4">Your cart is empty.</p>
            <Link to="/products" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-3 border-b py-4 last:border-b-0">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600">Rs {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-md">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} disabled={item.qty <= 1} className="p-2 disabled:opacity-50">
                        <FiMinus />
                      </button>
                      <span className="px-4 font-semibold">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-2">
                        <FiPlus />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 p-1">
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rs {total.toFixed(2)}</span>
                </div>
              </div>
              <Link to="/checkout" className="block w-full text-center mt-6 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors">
                Proceed to Checkout
              </Link>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-32 px-4" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/c5/c9/4e/c5c94e59aa8fd075e78c640c6e5e1533.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">Fresh Groceries, Delivered to Your Door</h1>
          <p className="text-xl mb-8">The best quality products from local farms and suppliers, available for online ordering.</p>
          <Link to="/products" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p>We source the freshest produce and highest quality goods for your family.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Convenient Shopping</h3>
              <p>Order online anytime and get your groceries delivered when you want them.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Support Local</h3>
              <p>By shopping with us, you support local farmers and businesses in your community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-6 bg-gray-100 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
                <span className="text-4xl">🍎</span>
              </div>
              <h3 className="mt-4 font-semibold">Fruits</h3>
            </div>
            <div className="text-center">
              <div className="p-6 bg-gray-100 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
                <span className="text-4xl">🥦</span>
              </div>
              <h3 className="mt-4 font-semibold">Vegetables</h3>
            </div>
            <div className="text-center">
              <div className="p-6 bg-gray-100 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
                <span className="text-4xl">🥖</span>
              </div>
              <h3 className="mt-4 font-semibold">Bakery</h3>
            </div>
            <div className="text-center">
              <div className="p-6 bg-gray-100 rounded-full w-32 h-32 mx-auto flex items-center justify-center">
                <span className="text-4xl">🥛</span>
              </div>
              <h3 className="mt-4 font-semibold">Dairy</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-xl italic">"This is the best grocery delivery service! The produce is always fresh, and the delivery is so convenient. I can't imagine my life without it."</p>
            <p className="mt-4 font-semibold">- Happy Customer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

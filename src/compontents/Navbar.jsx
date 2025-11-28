import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, product) => total + product.qty, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `py-2 px-4 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-green-100 text-green-700'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
              <span className="text-xl font-bold text-gray-800">GreenGrocery</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
            <NavLink to="/products" className={navLinkClasses}>Products</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/cart" aria-label="Cart" className="relative p-2 rounded-full hover:bg-gray-100">
              <FiShoppingCart size={24} className="text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/login" className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition-colors">
              Login
            </Link>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={navLinkClasses} onClick={() => setIsMenuOpen(false)} end>Home</NavLink>
            <NavLink to="/products" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>Products</NavLink>
            <NavLink to="/about" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <Link to="/login" className="block w-full text-left bg-green-500 text-white font-semibold px-4 py-2 rounded-md mt-2" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './compontents/Navbar';
import Footer from './compontents/Footer';
import ProductGrid from './compontents/ProductGrid';
import ProductDetail from './compontents/ProductDetail';
import CartPage from './compontents/CartPage';
import Checkout from './compontents/Checkout';
import Login from './compontents/Auth/Login';
import About from './pages/About';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
import React from "react";
import "../App.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Grocery Store</h1>
        <p>Your one-stop shop for fresh groceries delivered fast!</p>
        <a href="/home" className="landing-btn">Shop Now</a>
      </header>
      <section className="landing-features">
        <div>
          <h2>Fresh Products</h2>
          <p>Handpicked daily from local farms.</p>
        </div>
        <div>
          <h2>Fast Delivery</h2>
          <p>Get your groceries delivered in under an hour.</p>
        </div>
        <div>
          <h2>Best Prices</h2>
          <p>Unbeatable deals every day.</p>
        </div>
      </section>
      <footer className="landing-footer">
        <p>&copy; 2025 Grocery Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

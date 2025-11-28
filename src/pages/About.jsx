import React from 'react';
import { FaLeaf, FaUsers, FaTruck } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <header className="bg-green-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">About GreenGrocery</h1>
        <p className="text-xl mt-4">Your trusted partner for fresh and local food.</p>
      </header>

      {/* Our Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To bring the freshest, highest-quality groceries from local farms and producers directly to your table. We are committed to sustainability, community support, and providing an exceptional shopping experience for our customers.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-6 rounded-full mb-4">
                <FaLeaf className="text-green-600 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality & Freshness</h3>
              <p className="text-gray-600">We are dedicated to sourcing the best products, ensuring that every item you receive is fresh and of the highest quality.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-6 rounded-full mb-4">
                <FaUsers className="text-green-600 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
              <p className="text-gray-600">We believe in supporting our local community by partnering with local farmers and producers, fostering a sustainable food ecosystem.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-6 rounded-full mb-4">
                <FaTruck className="text-green-600 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Convenient Delivery</h3>
              <p className="text-gray-600">Our seamless online platform and reliable delivery service make it easy for you to get the groceries you need, right when you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2023, GreenGrocery started with a simple idea: to make fresh, locally-sourced food more accessible to everyone. What began as a small stall at a local farmer's market has grown into a thriving online grocery store, but our commitment to quality and community has never wavered.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are passionate about food and believe that everyone deserves to eat well. We are proud to connect our customers with the amazing farmers and artisans who make our region's food so special.
            </p>
          </div>
          <div>
            <img src="https://i.pinimg.com/1200x/22/e6/4a/22e64a7e1f5a380652b93cac892208bc.jpg" alt="Our Story" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}


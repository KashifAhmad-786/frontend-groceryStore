import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h5 className="text-xl font-bold mb-4">Green Grocery</h5>
            <p className="text-gray-400">
              Your one-stop shop for the freshest produce, pantry staples, and gourmet treats. Quality and convenience delivered right to your doorstep.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <p className="text-gray-400">123 Grocery Lane, Foodie City, 12345</p>
            <p className="text-gray-400">Email: support@greengrocery.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-green-400 transition-colors"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-green-400 transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-green-400 transition-colors"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-green-400 transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Green Grocery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
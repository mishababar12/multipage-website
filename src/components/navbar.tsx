import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link 
            href="/" 
            className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-orange-600 hover:shadow-lg hover:scale-105"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-orange-600 hover:shadow-lg hover:scale-105"
          >
            About
          </Link>
        </li>
     
        <li>
          <Link 
            href="/shop" 
            className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-orange-600 hover:shadow-lg hover:scale-105"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-orange-600 hover:shadow-lg hover:scale-105"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}



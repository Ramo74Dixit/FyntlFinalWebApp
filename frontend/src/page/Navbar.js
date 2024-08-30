import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center px-6 py-4 bg-transparent h-[10vh]">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Fyntl-AI Logo" className="h-8 w-8" />
        <span className="text-lg font-semibold pr-14 text-white">Fyntl-AI</span>
      </div>

      <ul className="flex items-center space-x-6 mx-8">
        <li>
          <Link to="/" className="hover:font-bold text-white">Home</Link>
        </li>
        <li>
          <Link to="/services" className="hover:font-bold text-white">Services</Link>
        </li>
        <li>
          <Link to="/pricing-plans" className="hover:font-bold text-white">Pricing Plans</Link>
        </li>
        <li>
          <Link to="/blogs" className="hover:font-bold text-white">Blogs</Link>
        </li>
        <li>
          <Link to="/reach-us" className="hover:font-bold text-white">Reach Us</Link>
        </li>
      </ul>

      <div className='ml-24'>
        <Link to="/get-started">
          <button className="bg-white text-black border border-gray-300 rounded-lg shadow-lg font-semibold px-4 py-2 hover:bg-gray-100">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

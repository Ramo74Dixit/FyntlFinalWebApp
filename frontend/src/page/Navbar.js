import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent h-[10vh] px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Fyntl-AI Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold pr-14 text-white">Fyntl-AI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 mx-8">
          <ul className="flex items-center space-x-6">
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
        </div>

        <div className="hidden md:block">
          <Link to="/get-started">
            <button className="bg-white text-black border border-gray-300 rounded-lg shadow-lg font-semibold px-4 py-2 hover:bg-gray-100">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            style={{
              color: 'white', // Ensures the icon stays white
              fill: 'currentColor', // Ensures the SVG color matches the current text color
              stroke: 'currentColor', // Same as above
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } md:hidden overflow-hidden transition-max-height duration-700 ease-in-out fixed top-0 left-5 right-5 bg-white shadow-lg rounded-lg`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <div className="flex items-center justify-between">
            {/* Logo and Site Name Inside Card */}
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="Fyntl-AI Logo" className="h-8 w-8" />
              <span className="text-lg font-semibold text-black">Fyntl-AI</span>
            </div>

            {/* Close (Toggle) Button */}
            <button 
              onClick={toggleMenu} 
              className="text-black focus:outline-none"
              style={{
                color: 'black', // Ensure the icon is black when the menu is open
                fill: 'currentColor', 
                stroke: 'currentColor',
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <ul className="space-y-4 w-full">
            <li>
              <Link to="/" className="hover:font-bold text-black block">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:font-bold text-black block">Services</Link>
            </li>
            <li>
              <Link to="/pricing-plans" className="hover:font-bold text-black block">Pricing Plans</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:font-bold text-black block">Blogs</Link>
            </li>
            <li>
              <Link to="/reach-us" className="hover:font-bold text-black block">Reach Us</Link>
            </li>
            <li>
              <Link to="/get-started" className="block">
                <button className="bg-black text-white border border-gray-300 rounded-lg shadow-lg font-semibold px-4 py-2 w-full hover:bg-gray-900">
                  Get Started
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import OurServicesCardSection from './OurServicesCardSection'
import FableLogoTansparent from '../assets/FabLogo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#E1F2F7] dark:bg-gray-900 w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={FableLogoTansparent} className="h-14" alt="Fables Logo" />
        </a>
        {/* Regular Navbar for Larger Screens */}
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul className="flex flex-col md:flex-row md:space-x-8">
          <li>
            <a href="/Home" className="block text-xl text-customBlue py-2 px-5 rounded md:bg-transparent md:hover:text-customGreen" aria-current="page">Home</a>
          </li>
          <li>
            <a href="/OurServicesCardSection" className="block text-xl text-customBlue py-2 px-5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customGreen">Our Journey</a>
          </li>
          <li>
            <a href="/AboutUs" className="block text-xl text-customBlue py-2 px-5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customGreen">About Us</a>
          </li>
          <li>
            <a href="/ProductsAndServices" className="block text-xl text-customBlue py-2 px-5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customGreen">Products & Services</a>
          </li>
          <li>
            <a href="/Footer" className="block text-xl text-customBlue py-2 px-5 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customGreen">Contact Us</a>
          </li>
        </ul>
        
      </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="bg-customTeal text-l text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden md:block"
          >
            Our Menu &#x2615;
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-overlay"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-Screen Overlay Menu for Mobile */}
      <div className={`fixed inset-0 bg-customTeal bg-opacity-100 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`} onClick={toggleMenu}>
        <div className={`fixed left-0 top-0 w-64 bg-[#E1F2F7] h-full p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="/Home" className="block text-xl text-customBlue" onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="/OurServicesCardSection" className="block text-xl text-customBlue" onClick={toggleMenu}>Our Journey</a>
            </li>
            <li>
              <a href="/AboutUs" className="block text-xl text-customBlue" onClick={toggleMenu}>About Us</a>
            </li>
            <li>
              <a href="/ProductsAndServices" className="block text-xl text-customBlue" onClick={toggleMenu}>Products & Services</a>
            </li>
            <li>
              <a href="/Footer" className="block text-xl text-customBlue" onClick={toggleMenu}>Contact Us</a>
            </li>
            <li>
              <a href="#" className="block text-xl text-customBlue" onClick={toggleMenu}>Our Menu &#x2615;</a>
            </li>
          </ul>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;

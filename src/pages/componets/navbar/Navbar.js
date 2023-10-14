import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../../../assets/img/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-20 backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="md:block">
          <Link to="/" className="flex items-center">
            <img src={logoNav} className="h-20 mr-3" alt="Flowbite Logo" />
          </Link>
        </div>
        <div className="flex md:order-2">
          <Link
            to="/login"
            type="button"
            className="text-white hidden md:block text-xl font-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-[#1D3557] hover:bg-blue-300  "
          >
            Iniciar Sesión
          </Link>
          <button
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden bg-[#1D3557] focus:outline-none focus:ring-2 "
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only ">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

const MobileMenu = () => {
  return (
    <ul className="flex flex-col w-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[#1D3557] md:dark:bg-[#1D3557] dark:border-gray-700">
      <li>
        <Link to="/" className="block py-2 pl-3 pr-4 text-white hover:bg-blue-300  rounded md:bg-transparent" aria-current="page">
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/404" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-300 ">
          Noticias
        </Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-300 md:hover-bg-transparent">
          Contactanos
        </Link>
      </li>
      
    </ul>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import logo from '../../../assets/img/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-16" />
        </a>
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-4`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <button
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded transition duration-300"
                onClick={() => scrollToSection('aboutMe')}
              >
               Inicio
              </button>
            </li>
            <li>
              <button
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded transition duration-300"
                onClick={() => scrollToSection('skills')}
              >
               Historia
              </button>
            </li>
            <li>
              <button
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded transition duration-300"
                onClick={() => scrollToSection('proyect')}
              >
               Lugares Turisticos
              </button>
            </li>
            <li>
              <button
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded transition duration-300"
                onClick={() => scrollToSection('education')}
              >
                Galleria 
              </button>
            </li>
            <li>
              <button
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded transition duration-300"
                onClick={() => scrollToSection('contactMe')}
              >
              Acticidades economicas
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
    }
  return (
    <nav className='bg-gray-800 border-b border-white p-4 text-white relative'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-lg md:text-2xl font-bold hover:text-blue-500'>CompressioX</h1>
        {/* Mobile Hamburger Icon */}
        <button 
        className='md:hidden text-white hover:text-blue-500 focus:outline-none mx-4' 
        onClick={toggleMenu}>
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isNavMenuOpen ? (
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-4'>
            <Link to="/image-compressor" className='hover:text-blue-500'>Image Compressor</Link>
            <Link to="/text-convertor" className='hover:text-blue-500'>Text Convertor</Link>
            <Link to="/qr-code-generator" className='hover:text-blue-500'>QR Code Generator</Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isNavMenuOpen && (
        <div className='absolute top-full rounded-lg mr-1 right-0 w-60 bg-gray-800 md:hidden'>
            <Link 
            to="/image-compressor" 
            className='block py-2 px-4 text-sm hover:bg-gray-800 hover-text-blue-500' 
            onClick={toggleMenu}>
                Image Compressor
            </Link>
            <Link 
            to="/text-convertor" 
            className='block py-2 px-4 text-sm hover:bg-gray-800 hover-text-blue-500' 
            onClick={toggleMenu}>
                Text Convertor
            </Link>
            <Link 
            to="/qr-code-generator" 
            className='block py-2 px-4 text-sm hover:bg-gray-800 hover-text-blue-500' 
            onClick={toggleMenu}>
                QR Code Generator
            </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar

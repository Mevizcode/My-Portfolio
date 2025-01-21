/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='flex gap-5 items-center max-md:w-full justify-between md:justify-start'>
          <div className='text-2xl font-bold'>David Cole</div>
          {/* hidden md:inline */}

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><a href="#contact">Contact Me</a></button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black py-4 space-y-4">
          <a href="#home" className="block px-8 py-2 hover:bg-gray-700">Home</a>
          <a href="#about" className="block px-8 py-2 hover:bg-gray-700">About Me</a>
          <a href="#service" className="block px-8 py-2 hover:bg-gray-700">Services</a>
          <a href="#project" className="block px-8 py-2 hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block px-8 py-2 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
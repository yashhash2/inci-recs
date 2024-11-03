import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-blue-800 shadow-lg sticky top-0 z-10'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center p-4'>
        <div className='text-white text-2xl font-bold'>SafeBank</div>
        <div className='hidden md:flex space-x-6'>
          <Link to='/' className='text-white hover:text-yellow-300 transition duration-300'>Home</Link>
          <Link to='/about' className='text-white hover:text-yellow-300 transition duration-300'>About Us</Link>
          <Link to='/services' className='text-white hover:text-yellow-300 transition duration-300'>Services</Link>
          <Link to='/contacts' className='text-white hover:text-yellow-300 transition duration-300'>Contact</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className='hidden md:flex space-x-4'>
          <Link to='/login' className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 transition duration-300'>Login</Link>
          <Link to='/signup' className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition duration-300'>Sign Up</Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-blue-700 p-4'>
          <Link to='/' className='block text-white hover:text-yellow-300 mb-2'>Home</Link>
          <Link to='/about' className='block text-white hover:text-yellow-300 mb-2'>About Us</Link>
          <Link to='/services' className='block text-white hover:text-yellow-300 mb-2'>Services</Link>
          <Link to='/contacts' className='block text-white hover:text-yellow-300'>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

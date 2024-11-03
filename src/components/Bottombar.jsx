import React from 'react';

const Bottombar = () => {
  return (
    <footer className='bg-gray-800 text-white p-4 mt-8'>
      <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='text-sm mb-2 md:mb-0'>
          &copy; {new Date().getFullYear()} SafeBank. All rights reserved.
        </div>
        <div className='flex space-x-4 md:space-x-6'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-300 transition duration-300'>
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-300 transition duration-300'>
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-300 transition duration-300'>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;

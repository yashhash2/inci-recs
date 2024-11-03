import React from 'react';
import Navbar from './components/Navbar';
import Bottombar from './components/Bottombar';
import Hero from './components/Hero';

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-[400px] md:min-h-[600px] mb-[-50px] relative'>
        <Hero />
        <main className='p-5'>
          <h1 className='text-xl md:text-2xl font-bold'>Welcome to SafeBank</h1>
          <h2 className='text-lg md:text-2xl font-bold'>Safest Bank Of Europe</h2>
          {/* Other sections like services, testimonials, etc. */}
        </main>
      </div>
      <div className='pt-[50px] md:pt-[100px]'>
        <Bottombar />
      </div>
    </>
  );
}

export default Landing;

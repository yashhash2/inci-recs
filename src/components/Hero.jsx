import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center min-h-[400px] md:min-h-[600px] flex items-center justify-center text-white" style={{ backgroundImage: 'url(https://media.gettyimages.com/id/184860418/photo/pink-piggybank-stuffed-with-dollar-bills.jpg?s=612x612&w=0&k=20&c=dzeO2lVaZfirFtLtKJtO8Q0RIn1kOnFgp3TzLDMdYOM=)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-5">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Banking Made Simple</h1>
        <p className="text-base md:text-lg mb-6">Experience hassle-free banking with SafeBank.</p>
        <Link to="/signup" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
          Open Your Account
        </Link>
      </div>
    </section>
  );
};

export default Hero;

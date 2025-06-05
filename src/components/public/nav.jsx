import React from 'react';
import { BiCommand } from "react-icons/bi";
import '../../css/public/Landing.css'
import { Link, useNavigate } from 'react-router';



const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 w-full py-2">
      <div className="max-w-7xl w-[96%] sm:w-[90%] xl:w-[85%] mx-auto px-4 py-3 flex items-center justify-between">
        <div onClick={() => navigate('/')} className="text-white flex items-center gap-1.5 cursor-pointer group transition-transform duration-300">
          <BiCommand className='text-secondary rotate-20 font-bold text-2xl sm:text-3xl lg:text-4xl' />
          <p className='font-bold text-lg sm:text-xl lg:text-2xl text-accent'>Neura</p>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden sm:flex gap-5 md:gap-8 md:text-base text-white font-medium">
          <Link to='/' className="hover:text-gray-300 cursor-pointer transition duration-500">Home</Link>
          <Link to='/blogs' className="hover:text-gray-300 cursor-pointer transition duration-500">Blogs</Link>
          <Link to='/news-letter' className="hover:text-gray-300 cursor-pointer transition duration-500">News Letter</Link>
          <Link to='/about' className="hover:text-gray-300 cursor-pointer transition duration-500">About</Link>
        </ul>

        {/* Right: Join Button */}
        <button onClick={() => navigate('/login')} className="bg-white px-2 py-1 text-black font-semibold border border-white hover:bg-transparent cursor-pointer transition duration-300 delay-75 hover:text-white md:text-base">
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

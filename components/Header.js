import React from 'react';
import { ReactComponent as Logo } from '../asset/LogoIcon.svg';

const Header = () => {
  return (
    <nav className="bg-blue-900 text-white container ">
      <div className="container mx-auto flex items-center justify-around py-4 px-6">
        {/* Logo */}
        <div className='flex items-center gap-2'>
        <Logo/>
        <h1 className="text-2xl font-bold">whitepace</h1>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-sm">
          <li className="hover:underline cursor-pointer">Products</li>
          <li className="hover:underline cursor-pointer">Solutions</li>
          <li className="hover:underline cursor-pointer">Resources</li>
          <li className="hover:underline cursor-pointer">Pricing</li>
        </ul>
        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="text-black  bg-[#FFE492] px-4 py-2 rounded hover:bg-gray-100">
            Login
          </button>
          <button className="bg-[#4F9CF9] px-4 py-2 rounded hover:bg-yellow-500">
            Try Whitepace free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li className="text-gray-700 hover:text-blue-500">Home</li>
          <li className="text-gray-700 hover:text-blue-500">About</li>
          <li className="text-gray-700 hover:text-blue-500">Services</li>
          <li className="text-gray-700 hover:text-blue-500">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

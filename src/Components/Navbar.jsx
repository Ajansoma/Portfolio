import React from 'react';

const Navbar = () => {
  return (
    <nav className="px-40 pt-10 flex justify-between items-center bg-purple-50">
      <div className="flex items-center">
        <h3 className="text-lg font-bold cursor-pointer">AJANSOMA</h3>
      </div>
      <ul className="flex gap-3 cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

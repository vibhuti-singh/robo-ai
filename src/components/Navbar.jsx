import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-teal-950 to-transparent p-4 10">
      <div className="flex justify-between items-center">
       <Link to={"/"}> <div className="text-white text-2xl font-semibold">Robo-AI</div></Link>
      </div>
    </nav>
  );
};

export default Navbar;

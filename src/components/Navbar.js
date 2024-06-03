import React from "react";
import { Link } from "gatsby";

const Navbar = ({ button }) => {
  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-20">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <span className="text-blue-500">Medi</span>
              <span className="text-[#ff9f6a]">Care+</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8 text-blue-500">
            <Link
              to="/"
              className="inline-flex items-center px-1 pt-1 text-md font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/#"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/#"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              News
            </Link>
            <Link
              to="/contact"
              className={`bg-blue-500 text-white font-bold py-2 px-9 rounded-full ${
                button ? "" : "hidden"
              }`}
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

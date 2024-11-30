import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const location = useLocation();
  return (
    <div>
      <header className="text-white body-font shadow-xl">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="ml-3 text-xl text-white">
            <Logo />
          </span>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              className="mr-5 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="mr-5 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/addnote"
              className="mr-5 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Your Notes
            </Link>
            <Link
              to="/Login"
              role="button"
              className="mr-5 bg-purple-900 h-11 w-28 px-8 py-2 text-md rounded-lg text-white hover:bg-purple-700 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Login
            </Link>
            <Link
              to="/SignUp"
              role="button"
              className="mr-5 bg-purple-900 h-11 w-28 px-8 py-2 text-md rounded-lg text-white hover:bg-purple-700 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              SignUp
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

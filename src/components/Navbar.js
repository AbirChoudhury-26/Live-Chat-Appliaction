import React from 'react';
import Logo from '../images/VideoChat.png';
import { Link } from 'react-router-dom';
// import About from './About';
// import Product from './Product';
// import Blogs from './Blogs';

const Navbar = () => {
  return (
    <div className="bg-black h-[8 rem] flex items-center justify-between px-4 py-2">
      {/* Left */}
      <div className="bg-black h-[3rem] flex">
        <img
          src={Logo}
          alt="Logo"
          className="object-cover w-[12rem] h-[5rem]"
        />
      </div>

      {/* Right */}
      <div>
        <ul className="text-white font-bold flex items-center gap-5 mr-12">
          <Link to="/" className="link">
            Home
          </Link>

          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

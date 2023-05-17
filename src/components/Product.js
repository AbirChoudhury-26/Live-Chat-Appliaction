import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/VideoChat.png';

const Product = () => {
  return (
    <div>

<div className="bg-black h-[6rem] flex items-center justify-between px-4 py-2">
        {/* Left  */}
        <div className="bg-black h-[4rem] flex">
          <img
            src={Logo}
            alt="Logo"
            className="object-cover w-[15rem] h-[5rem]"
          />
        </div>

        {/* Right */}
        <div>
          <ul className="text-white font-bold flex items-center gap-5 mr-12 ">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
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
      
      <h1>About Us</h1>
      <p>Welcome to our website! Here's some information about our Products of our company.</p>
    </div>
  )
}

export default Product

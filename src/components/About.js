import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/VideoChat.png';
const About = () => {
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

      <div class="about-us-background">
        <div class="about-us-container">
          <div class="about-us-header">
            <h2>About Us</h2>
          </div>
          <div class="about-us-content">
            <p>
              Welcome to our Chat App, where communication meets simplicity. Our
              mission is to provide a seamless and enjoyable chat experience for
              users around the globe.
            </p>
            <p>
              At Chat App, we believe in the power of connecting people. Whether
              you're looking to chat with friends, collaborate with colleagues,
              or seek support, our platform is designed to meet your
              communication needs.
            </p>
            <p>Key Features:</p>
            <ul>
              <li>Real-time messaging</li>
              <li>Intuitive user interface</li>
              <li>Secure and private conversations</li>
              <li>Customizable settings</li>
              <li>24/7 customer support</li>
            </ul>
            <p>
              Feel free to explore and enjoy the world of seamless communication
              with Chat App!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

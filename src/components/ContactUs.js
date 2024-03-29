import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/VideoChat.png';
import axios from 'axios';
//import { toast } from 'react-toastify';
// import Navbar from './Navbar';
// import ContactForm from './ContactForm';
// import { Link } from 'react-router-dom';

const ContactUs = () => {
  
  const [formStatus, setFormStatus] = useState('Send');
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, password } = e.target.elements;
    const formData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    try {
      const response = await axios.post('/api/signup', formData);
      // console.log(response.data);
      setFormStatus('User created successfully');
      //toast.success("Created Successfullt");
    } catch (error) {
      console.error(error.response.data);
      setFormStatus(error.message);
    }
  };

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
      {/* <Navbar/>
      <center>
        <h1 className='mt-5'>
          <b>Contact Us</b>
        </h1>
      </center>
      {/* console.log("Hello world"); */}

      <div className="container mt-5">
        <h2 className="mb-3">Your Details</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

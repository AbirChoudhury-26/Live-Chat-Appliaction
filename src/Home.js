import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import conf from '../src/images/Conf.png';
import Navbar from '../src/components/Navbar';
import './index.css';

const Home = () => {
  const [RoomCode, setRoomCode] = useState(''); // This hook state is use to set the value to given class like here for RoomCode
  const navigate = useNavigate(); // useNavigate hook returns an imperative method that you can use for changing location.

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className="">
      {/* Navbar */}
      <div className="h-[5rem] bg-black">
        <Navbar />
        {/* Hero */}
        <div className="relative h-screen">
          {/* Img */}
          <div className=" absolute h-full w-full flex overflow-hidden ">
            <img
              src={conf}
              className="object-cover w-full h-full"
              alt="Live Chat"
            />
          </div>

          <div className=" lg:flex flex-col justify-center relative z-10 px-10 py-8 md:max-w-[90vw]">
            <div className="lg:flex flex-col  justify-center pb-10 mb-10">
              <h1 className="text-[66px] md:text[80px] text-white">
                {' '}
                Video Chat App
              </h1>
              <p className="text-[25px] mt-2 subheading">
                {/* {' '} */}
                A perfect <b className="custom-yellow">ONLINE CHAT</b>{' '}
                Application
              </p>
            </div>

            {/* Room Code Form */}

            <form
              action=""
              onSubmit={submitCode}
              className="flex flex-col  items-center  justify-center md:pt-14"
            >
              <label htmlFor="" className="text-[30px] font-bold text-white">
                Enter the Room code
              </label>
              <br />
              <input
                type="text"
                required
                placeholder="Enter Room code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 rounded-full w-[20rem] mt-2 mb-2 "
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold  w-[10 rem] rounded-full px-3 py-1.5 mt-2 md:mt-4 md:py-[7px]"
              >
                Enter Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

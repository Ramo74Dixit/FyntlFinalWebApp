import React from 'react'
import Adv1 from './Adv1'
import Feature from './Features'
import Copilot from './Co-pilot'
import Navbar from './Navbar';
import Footer from './Footer';
import Adv2 from './Adv2';
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/bg-home.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
       <Navbar />
      <div className="flex h-[90vh]">
      <div className="text-left mt-[15vh] ml-[17vw] max-w-lg text-white">
        <p className="text-sm font-light mb-4">
          Your AI accountant, always on duty.
        </p>
        <h1 className="text-4xl font-[semibold] mb-4 w-[30vw] text-[45px] pb-4">
          The Ultimate <span className="text-yellow-400">GST App</span>
          <br />
          Powerful, Secure, and Easy to Use
        </h1>
        <img src="/linehome.png" alt="linehome"></img>
        <p className="text-[#FEFEFE] mt-6 w-[25vw] font-[19px]">
          Tired of the complexities of GST compliance? Fyntl-AI simplifies your
          accounting tasks with its powerful AI technology. Download the app now
          and experience the future of GST management.
        </p>
        <div className="flex mt-5">
          {" "}
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <img
              src="/Vector.png"
              className="w-6 h-6 mr-3"
              alt="Google Play Icon"
            />{" "}
            <div className="text-left">
              <p className="text-xs text-gray-500 font-light">GET IT ON</p>
              <h5 className="text-sm font-bold text-gray-900">Google Play</h5>
            </div>
          </button>
          <div className="flex items-center">
            <div className="relative ml-5 w-6 h-10"> 
              <img src="/eclipse.png" alt="Eclipse" className="absolute inset-0 h-10" /> 
              <img
                src="/playbutton.png"
                alt="Play Button"
                className="absolute inset-0 m-auto w-10 ml-2"
              />
            </div>
            <a href="#" className="ml-6 text-sm font-medium text-white">
              Play Demo
            </a>
          </div>
        </div>
      </div>
      <div style={{
        backgroundImage: `url('/lines.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        width: "70%",
      }}>
        <img src="./heroimg.png" className="w-[20vw] ml-auto mr-[12vw] mt-10"></img>
      </div>
      </div>
      <Adv1/>
      <Feature/>
      <Adv2/>
      <Copilot/>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import mainBackground from "../assets/Footerback.png";
import waveImage from "../assets/Wave.png";
import facebook from "../assets/Facebook.png";
import youtube from "../assets/youtube.png";
import Twitter from "../assets/Twitter.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";
import FyntlLOGO from "../assets/FyntlLOGO.png";
import line from "../assets/line.png";

// Contactus
import Email from "../assets/Email.png";
import Location from "../assets/Location.png";
import Phone from "../assets/Phone.png";

const Footer = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between text-white"
      style={{
        backgroundImage: `url(${waveImage}), url(${mainBackground})`,
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "bottom, center",
      }}
    >
      <div>
        <h2 className="text-center mt-8 sm:hidden font-semibold text-2xl">FYNTL-AI</h2>
        <div className="flex sm:hidden">
          <img src={line} alt="Line" className="mt-8 mx-auto" />
        </div>
      </div>

      {/* Request a Free Demo Section */}
      <div className="text-center mt-6 sm:mt-12">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-6">Request a free demo</h1>
        <p className="sm:p-0 mb-6 mx-10 sm:mx-0 text-[0.77rem] sm:text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipiscing elitaliquam met <br className="hidden sm:flex" />
          consectetur adipiscing elit
        </p>
        <div className="flex justify-center items-center w-full max-w-lg mx-auto p-4">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 text-[0.8rem] sm:text-lg sm:p-6 rounded-lg outline-none text-black sm:w-[480px] w-[35vh] h-[6vh] sm:h-[60px] md:h-[70px] border-none"
            />
            <button className="mr-10 sm:mr-0 text-[0.59rem] sm:text-base w-[11vh] sm:w-[20vh] absolute right-3 top-2.5 bottom-2.5 sm:right-6 sm:top-4 sm:bottom-4 h-[calc(100% - 16px)] rounded-lg bg-[#55A2FC] text-white border-none">
              Create Account
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full px-4 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center sm:mt-24 sm:mb-28">
        {/* Left Side: Logo and Social Media */}
        <div className="text-center md:text-left mb-10 md:mb-0 md:ml-24">
          <div className="hidden sm:flex items-center justify-center md:justify-start mb-4">
            <img src={FyntlLOGO} alt="FyntlLOGO" className="mr-3 w-[30px]" />
            <h2 className="font-semibold text-2xl">FYNTL-AI</h2>
          </div>
          <p className="hidden sm:flex text-lg font-normal">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit aliquam
          </p>
          <div className="hidden sm:flex space-x-6 justify-center md:justify-start sm:space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook" className="w-[2vh] h-[3vh] sm:w-[10px] sm:h-[18px]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="Twitter" className="w-[3.6vh] h-[3vh] sm:w-[20px] sm:h-[18px]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="Instagram" className="w-[3vh] h-[3vh] sm:w-[18.6px] sm:h-[18.6px]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={Linkedin} alt="Linkedin" className="w-[3.5vh] h-[3vh] sm:w-[18.6px] sm:h-[17.6px]" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={youtube} alt="youtube" className="w-[4vh] h-[3vh] sm:w-[20px] sm:h-[18px]" />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Information */}
        <div className="text-center md:text-left md:mr-24">
          <p className="text-2xl mb-6 sm:mb-4 font-semibold">Contact us</p>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <img src={Email} alt="Email" className="hidden sm:flex mr-2 w-[19.5px] h-[19.5px]" />
            <h2 className="font-normal text-lg underline">fyntl.ai@gmail.com</h2>
          </div>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <img src={Phone} alt="Phone" className="hidden sm:flex mr-2 w-[19.5px] h-[19.5px]" />
            <h2 className="font-light sm:font-normal text-[0.9rem] sm:text-lg">(414) 687 - 5892</h2>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <img src={Location} alt="Location" className="hidden sm:flex mr-2 w-[19.5px] h-[19.5px]" />
            <h2 className="font-light sm:font-normal text-[0.9rem] sm:text-lg">
              128/65, E Block Kidwai
              <br /> Nagar Kanpur, Uttar
              <br /> Pradesh- 208011 India
            </h2>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Text */}
      <div className="hidden sm:flex flex-col md:flex-row justify-between items-center px-4 md:px-16 lg:px-24 mb-4">
        <div className="font-normal text-lg text-center md:text-left">Designed By Shubhangi Swami</div>
        <div className="font-normal text-lg text-center md:text-right mt-2 mr-10 md:mt-0">
          <p>
            All Rights Reserved |{" "}
            <Link to="/terms" className="underline text-blue-300">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <Link to="/privacy" className="underline text-blue-300">
              Privacy
            </Link>
          </p>
        </div>
      </div>


      <div className="flex sm:hidden flex-col md:flex-row justify-between items-center mb-8">
        <div className="font-light text-sm text-center md:text-left">All Rights Reserved</div>
        <div className="flex font-light text-xs md:text-right mt-2">
          <Link to="/terms" className="underline text-blue-300">
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link to="/privacy" className="underline text-blue-300">
            Privacy
          </Link>
          <p className="ml-10">Designed by Shubhangi Swami</p>
        </div>
         {/* Footer Bottom Text */}
         {/* <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 lg:px-24 mb-4">
            <div className="font-normal text-lg text-center md:text-left">
               Designed By Shubhangi Swami
            </div>
            <div className="font-normal text-lg text-center md:text-right mt-2 mr-10 md:mt-0">
               <p>
                  All Rights Reserved |{" "}
                  <a
                     href="/terms-and-conditions"
                     className="text-blue-300 underline"
                  >
                     Terms and Conditions
                  </a>{" "}
                  |{" "}
                  <Link to="/privacy-policy" className="text-blue-300 underline">
        Privacy Policy
      </Link>
               </p>
            </div>
         </div> */}
      </div>
    </div>
  );
};

export default Footer;

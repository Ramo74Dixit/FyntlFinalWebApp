import React from "react";
import mainBackground from "../assets/Footerback.png";
import waveImage from "../assets/Wave.png";
import facebook from "../assets/Facebook.png";
import youtube from "../assets/youtube.png";
import Twitter from "../assets/Twitter.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";
import FyntlLOGO from "../assets/FyntlLOGO.png";

// Contactus
import Email from "../assets/Email.png";
import Location from "../assets/Location.png";
import Phone from "../assets/Phone.png";

const Footer = () => {
   return (
      <div
         className="min-h-screen flex flex-col justify-between text-white"
         style={{
            backgroundImage: `url(${waveImage}), url(${mainBackground})`, // Use backticks to create a template literal
            backgroundSize: "cover, cover", // 'contain' for wave image, 'cover' for background
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "bottom, center", // Position wave at bottom, background in center
         }}
      >
         {/* Request a Free Demo Section */}
         <div className="text-center mt-12">
            <h1 className="text-5xl font-semibold mb-6">Request a free demo</h1>
            <p className="mb-10 text-lg font-normal">
               Lorem ipsum dolor sit amet consectetur adipisicing elit aliquam
               met
               <br className="hidden md:block" /> consectetur adipisicing elit
            </p>
            <div className="flex justify-center items-center w-full max-w-lg mx-auto p-4">
               <div className="relative w-full">
                  <input
                     type="email"
                     placeholder="     Enter your email address"
                     className="p-4 rounded-lg outline-none text-black w-full h-[60px] md:h-[70px] border-none pr-40" // Adjust height for smaller screens
                  />
                  <button className="absolute right-6 top-4 bottom-4 h-[calc(100% - 16px)] px-4 rounded-lg bg-[#55A2FC] text-white border-none">
                     Create Account
                  </button>
               </div>
            </div>
         </div>

         {/* Footer Section */}
         <footer className="w-full px-4 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center mt-24 mb-28">
            {/* Left Side: Logo and Social Media */}
            <div className="text-center md:text-left mb-10 md:mb-0 md:ml-24">
               <div className="flex items-center justify-center md:justify-start mb-4">
                  <img
                     src={FyntlLOGO}
                     alt="FyntlLOGO"
                     className="mr-3 w-[30px]"
                  />
                  <h2 className="font-semibold text-2xl">FYNTL-AI</h2>
               </div>
               <p className="text-lg font-normal">
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit aliquam
               </p>
               <div className="flex justify-center md:justify-start space-x-4 mt-6">
                  <a
                     href="https://facebook.com"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img
                        src={facebook}
                        alt="facebook"
                        className="w-[10px] h-[18px]"
                     />
                  </a>
                  <a
                     href="https://twitter.com"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img
                        src={Twitter}
                        alt="Twitter"
                        className="w-[20px] h-[18px]"
                     />
                  </a>
                  <a
                     href="https://instagram.com"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img
                        src={Instagram}
                        alt="Instagram"
                        className="w-[18.6px] h-[18.6px]"
                     />
                  </a>
                  <a
                     href="https://linkedin.com"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img
                        src={Linkedin}
                        alt="Linkedin"
                        className="w-[18.6px] h-[17.6px]"
                     />
                  </a>
                  <a
                     href="https://youtube.com"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img
                        src={youtube}
                        alt="youtube"
                        className="w-[20.px] h-[18px]"
                     />
                  </a>
               </div>
            </div>

            {/* Right Side: Contact Information */}
            <div className="text-center md:text-left md:mr-24">
               <p className="text-2xl mb-4 font-semibold">Contact us</p>
               <div className="flex items-center justify-center md:justify-start mb-2">
                  <img
                     src={Email}
                     alt="Email"
                     className="mr-2 w-[19.5px] h-[19.5px]"
                  />
                  <h2 className="font-normal text-lg">fyntl.ai@gmail.com</h2>
               </div>
               <div className="flex items-center justify-center md:justify-start mb-2">
                  <img
                     src={Phone}
                     alt="Phone"
                     className="mr-2 w-[19.5px] h-[19.5px]"
                  />
                  <h2 className="font-normal text-lg">(414) 687 - 5892</h2>
               </div>
               <div className="flex items-center justify-center md:justify-start">
                  <img
                     src={Location}
                     alt="Location"
                     className="mr-2 w-[19.5px] h-[19.5px]"
                  />
                  <h2 className="font-normal text-lg">
                     128/65, E Block Kidwai
                     <br /> Nagar Kanpur, Uttar
                     <br /> Pradesh- 208011 India
                  </h2>
               </div>
            </div>
         </footer>

         {/* Footer Bottom Text */}
         <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 lg:px-24 mb-4">
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
                  <a href="/privacy-policy" className="text-blue-300 underline">
                     Privacy Policy
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Footer;

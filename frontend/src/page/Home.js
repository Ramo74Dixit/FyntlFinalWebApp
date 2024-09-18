import React from 'react'
import Adv1 from './Adv1'
import Feature from './Features'
import Copilot from './Co-pilot'
import Navbar from './Navbar';
import Footer from './Footer';
import UserReview from './UserReview';
import Integrate from './Integrate';
import Adv2 from './Adv2';
import Privacy from './Privacy';
import Card from './Integrate';

const Home = () => {
   const isMobile = window.innerWidth <= 700;
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
         <div className="sm:flex h-[90vh]">
            <div className=" text-center sm:text-left mt-10 sm:mt-[15vh] sm:ml-[17vw] sm:max-w-lg text-white">
               <p className=" hidden sm:flex text-sm font-light mb-4">
                  Your AI accountant, always on duty.
               </p>
               <h1 className="text-6xl font-[semibold]  sm:w-[30vw] sm:text-[45px]">
                  The Ultimate <span className="text-yellow-400  ">GST App</span>
                  <br />
               </h1 >
               <h1 className=" hidden sm:flex text-4xl font-[semibold] mb-4 w-[30vw] text-[45px] pb-4">Powerful, Secure, and Easy to Use
               </h1>
               <img src="/linehome.png" alt="linehome" className='hidden sm:flex'></img>
               <p className="hidden sm:flex text-[#FEFEFE] mt-6 w-[25vw] font-[19px]">
                  Tired of the complexities of GST compliance? Fyntl-AI
                  simplifies your accounting tasks with its powerful AI
                  technology. Download the app now and experience the future of
                  GST management.
               </p>
               <div className="flex ml-[24vw] sm:ml-0  mt-10">
                  {" "}
                  <button className="flex w-[12vh] h-[4vh] sm:w-[150px] sm:h-[46px]  items-center px-2 sm:px-4 py-2 bg-[#276FC4] sm:bg-white border border-gray-300 rounded-lg shadow-lg sm:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                     <img
                        src="/Vector.png"
                        className="w-[10px]  sm:w-6 sm:h-6 mr-3"
                        alt="Google Play Icon"
                     />{" "}
                     <div className="text-left">
                        <p className="text-[0.35rem] sm:text-xs sm:text-gray-500 font-light">
                           GET IT ON
                        </p>
                        <h5 className="text-[0.62rem] sm:text-sm font-bold text-gray-900">
                           Google Play
                        </h5>
                     </div>
                  </button>
                  <div className="flex w-[12vh] h-[4vh] sm:w-[145px] sm:h-[46px] items-center">
                     <div className="relative ml-5 w-6 h-10">
                        <img
                           src="/eclipse.png"
                           alt="Eclipse"
                           className="absolute inset-0 h-10"
                        />
                        <img
                           src="/playbutton.png"
                           alt="Play Button"
                           className="absolute inset-0 m-auto w-10 ml-2"
                        />
                     </div>
                     <a
                        href="/"
                        className="ml-6 text-sm font-medium text-white"
                     >
                        Play Demo
                     </a>
                  </div>
               </div>
            </div>
            <div
               style={{
                  backgroundImage: isMobile ? 'none' :`url('/lines.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "80vh",
                  width: "70%",
               }}
            >
               <img
                  src="./heroimg.png"
                  alt=" "
                  className="w-[100vh] sm:w-[20vw] ml-16 sm:ml-auto mr-[12vw] mt-20  sm:mt-10"
               ></img>
            </div>
         </div>
         <Adv1 />
         <Feature />
         <Adv2 />
         <Copilot />
         <UserReview/>
         <Privacy />
         <Integrate/>
         <Footer />
      </div>
   );
};

export default Home;

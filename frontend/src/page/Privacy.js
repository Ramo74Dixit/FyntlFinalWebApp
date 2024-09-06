import React from "react";
import desktop from "../assets/desktop.png";
import check from "../assets/check.png";
import arrow from "../assets/arrow.png";
const Privacy = () => {
   return (
      <div className="flex flex-row flex-wrap  p-10 leading-relaxed bg-gradient-to-r from-blue-400 to-blue-900  gap-5">
         <div className="flex flex-col sm:flex-row justify-center item-center w-full gap-1">
            <div className="w-full sm:w-2/5 text-left ">
               <h1 className="text-white text-2xl font-bold mb-6">
                  Your Privacy Matters how we protect your data in the cloud{" "}
               </h1>
               <div className="text-white text-l text-opacity-70 mb-6 ">
                  Feel free to adapt this para to adjust your branding
               </div>
               <div className="flex flex-row text-white text-l mb-6  text-opacity-70 gap-2 ">
                  <img src={check} alt="check" className="w-5 h-5" /> Continous
                  Vulnerability Monitoring{" "}
               </div>
               <div className="flex flex-row text-white text-l mb-6 text-opacity-70 gap-2">
                  <img src={check} alt="check" className="w-5 h-5" /> Dedicated
                  security team
               </div>
               <div className="flex flex-row text-white text-l mb-6 text-opacity-70 gap-2">
                  <img src={check} alt="check" className="w-5 h-5" /> Free
                  on-demand training{" "}
               </div>
               <div className="flex flex-row text-white text-l mb-6 text-opacity-70 gap-2">
                  <img src={check} alt="check" className="w-5 h-5" /> Data
                  migration support
               </div>
               <div className="flex flex-row text-yellow-300 text-[20px]   mb-6  gap-2">
                  {" "}
                  Learn more about privacy
                  <img src={arrow} alt="arrow" className="w-5 h-3 mt-3" />
               </div>
            </div>
            <div className=" flex justify-center item-left w-full sm:w-2/5 ">
               <img src={desktop} alt="desktop" />
            </div>
         </div>
      </div>
   );
};
export default Privacy;

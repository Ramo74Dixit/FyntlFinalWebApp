import React from "react";

import GoogleLogo from "../assets/Rectangle 6875.png";
import DiscordLogo from "../assets/Rectangle 6875.png";
import WordPressLogo from "../assets/Wordpress.png";
import WebflowLogo from "../assets/skill-icons_webflow.png";
import TwitterLogo from "../assets/Insta.png";
import InstagramLogo from "../assets/Insta.png";
import StackLogo from "../assets/Rectangle 6876.png";

const IntegrationBlock = () => {
   return (
      <div className="flex flex-wrap justify-center mb-4 mt-16 mx-4 gap-6 lg:gap-8">
         {/* Card 1 */}
         <div className="shadow-lg rounded-lg p-4 flex flex-col text-left items-left w-full sm:w-[300px] lg:w-[229px] h-[325px] bg-white transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
            <img
               src={GoogleLogo}
               alt="GoogleLogo"
               className="w-[100px] h-[100px] object-contain mb-6 lg:mb-12"
            />
            <h3 className="text-xl lg:text-2xl text-gray-800 mb-4 font-medium">
               Google
            </h3>
            <p className="text-[#939393] font-semibold">
               Feel free to adapt and customize this....
            </p>
         </div>

         {/* Card 2 */}
         <div className="w-full sm:w-[300px] lg:w-[229px]">
            <div className="mb-5 shadow-lg rounded-lg p-4 flex flex-col text-left items-left bg-white transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
               <div className="flex">
                  <img
                     src={WebflowLogo}
                     alt="WebflowLogo"
                     className="w-[50px] h-[62px] object-contain mb-4"
                  />
                  <h3 className="text-lg text-gray-800 ml-3 font-medium">
                     Webflow
                  </h3>
               </div>
               <p className="text-sm text-[#939393] font-semibold">
                  Feel free to adapt and customize this....
               </p>
            </div>

            <div className="mt-6 shadow-lg rounded-lg p-4 flex flex-col text-left items-left bg-white transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
               <div className="flex">
                  <img
                     src={StackLogo}
                     alt="StackLogo"
                     className="w-[50px] h-[62px] object-contain mb-4"
                  />
                  <h3 className="text-lg text-gray-800 ml-3 font-medium">
                     Stack
                  </h3>
               </div>
               <p className="text-sm text-[#939393] font-semibold">
                  Feel free to adapt and customize this....
               </p>
            </div>
         </div>

         {/* Card 3 */}
         <div className="shadow-lg rounded-lg p-4 flex flex-col text-left items-left w-full sm:w-[300px] lg:w-[229px] h-[325px] bg-white transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
            <img
               src={DiscordLogo}
               alt="DiscordLogo"
               className="w-[100px] h-[100px] object-contain mb-6 lg:mb-12"
            />
            <h3 className="text-xl lg:text-2xl text-gray-800 mb-4 font-medium">
               Discord
            </h3>
            <p className="text-[#939393] font-semibold">
               Feel free to adapt and customize this....
            </p>
         </div>

         {/* Card 4 */}
         <div className="w-full sm:w-[300px] lg:w-[229px]">
            <div className="mb-5 shadow-lg rounded-lg p-4 flex flex-col text-left items-left bg-white transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
               <div className="flex">
                  <img
                     src={TwitterLogo}
                     alt="TwitterLogo"
                     className="w-[50px] h-[62px] object-contain mb-4"
                  />
                  <h3 className="text-lg text-gray-800 ml-3 font-medium">
                     Twitter
                  </h3>
               </div>
               <p className="text-sm text-[#939393] font-semibold">
                  Feel free to adapt and customize this....
               </p>
            </div>

            <div className="mt-6 shadow-lg rounded-lg p-4 flex flex-col text-left items-left bg-white transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
               <div className="flex">
                  <img
                     src={InstagramLogo}
                     alt="InstagramLogo"
                     className="w-[50px] h-[62px] object-contain mb-4"
                  />
                  <h3 className="text-lg text-gray-800 ml-3 font-medium">
                     Instagram
                  </h3>
               </div>
               <p className="text-sm text-[#939393] font-semibold">
                  Feel free to adapt and customize this....
               </p>
            </div>
         </div>

         {/* Card 5 */}
         <div className="shadow-lg rounded-lg p-4 flex flex-col text-left items-left w-full sm:w-[300px] lg:w-[229px] h-[325px] bg-white transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
            <img
               src={WordPressLogo}
               alt="WordPressLogo"
               className="w-[100px] h-[100px] object-contain mb-6 lg:mb-12"
            />
            <h3 className="text-xl lg:text-2xl text-gray-800 mb-4 font-medium">
               WordPress
            </h3>
            <p className="text-[#939393] font-semibold">
               Feel free to adapt and customize this....
            </p>
         </div>
      </div>
   );
};

export default IntegrationBlock;

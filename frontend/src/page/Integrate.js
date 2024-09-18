import React from "react";
import Integration from "./IntegrateCard";
import Frame1 from "../assets/Frame 427319023.png";
import Frame2 from "../assets/IntegrateAbove.png";

const Heading = () => {
   return (
      <div className="p-4 md:p-10">
         <div className="flex justify-center md:justify-start mt-8 mb-14">
            <img
               src={Frame2}
               alt="Frame"
               className="w-full max-w-2xl mx-auto md:w-[calc(100%-80px)] object-contain px-2"
            />
         </div>
         <div className="font-medium text-2xl md:text-4xl text-center">
            Integrate Clio with your favourite tools seamlessly!
         </div>
         <div className="mt-6">
            <Integration />
         </div>
         <div className="flex justify-center md:justify-start mt-8">
            <img
               src={Frame1}
               alt="Frame"
               className="w-full max-w-8xl object-fill md:w-[calc(100%-80px)]"            />
         </div>
      </div>
   );
};

export default Heading;

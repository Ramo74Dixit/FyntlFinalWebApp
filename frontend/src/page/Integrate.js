import React from "react";
import Integration from "./IntegrateCard";
import Frame from "../assets/Frame 427319023.png";

const Heading = () => {
   return (
      <div className="p-4 md:p-10">
         <div className="font-medium text-2xl md:text-4xl md:text-center">
            Integrate Clio with your favourite tools seamlessly!
         </div>
         <div className="mt-6">
            <Integration />
         </div>
         <div className="flex justify-center md:justify-start mt-8">
            <img
               src={Frame}
               alt="Frame"
               className="w-auto max-w-full transform scale-105 md:scale-100 md:w-[calc(100%-80px)] object-contain"
            />
         </div>
      </div>
   );
};

export default Heading;

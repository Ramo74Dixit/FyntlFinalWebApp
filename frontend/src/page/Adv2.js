import React from "react";


const Adv2 = () => {
  return (
    <div className="flex flex-col-reverse  sm:flex-row justify-center items-center h-[50vh] sm:h-[70vh]">
      <div className="hidden sm:flex h-[50vh] w-[60%] flex-col items-center justify-center text-black text-center text-lg p-4
       relative rounded-r-[12rem] sm: shadow-[8px_8px_16px_rgba(0,0,0,.20)]">
  <div className="h-auto w-[60vw] sm:w-[62vw]">
    <p className="font-jost w-[55vw]  sm: w-[60vw] text-black text-[15px] sm:text-[19px] text-left pl-7 sm:pl-9 sm:pt-6 pt-4">
      By harnessing the power of AI, Fyntl-AI bridges the gap between Micro
       Enterprises and accounting professionals. Our ecosystem empowers Micro
        Enterprises to manage their finances with ease, while simultaneously 
        allowing accountants to deliver exceptional client service with improved efficiency.
    </p>
  </div>
  
</div>
<div className="sm:hidden h-auto w-[70vw] flex items-center justify-center">
  <p className="font-jost text-black text-[15px] sm:text-[19px] text-center sm:pl-9 sm:pt-6 pt-4">
    By harnessing the power of AI, Fyntl-AI bridges the gap between Micro 
    Enterprises and accounting professionals. Our ecosystem empowers Micro 
    Enterprises to manage their finances with ease, while simultaneously 
    allowing accountants to deliver exceptional client service with improved efficiency.
  </p>
</div>

      <div className="flex justify-center items-center p-4  w-full w-30 sm:w-[40%] sm:h-[50vh] h-[10vh] mt-4 ">
        <p className="font-roboto font-semibold text-black text-[25px] sm:text-[33px]  mr-4">
        The Fyntl-AI Advantage  </p>
      </div>
    </div>
  );
};

export default Adv2;

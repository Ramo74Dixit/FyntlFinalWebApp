import React from "react";
import img1 from "../assets/Group.png";

const Adv2 = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[70vh]">
      <div className="h-[50vh] w-[60%] flex flex-col items-center justify-center text-black text-lg p-4 relative rounded-r-[12rem] shadow-[8px_8px_16px_rgba(0,0,0,.20)]">
        <div className=" h-auto w-[75vh]">
          <p className="font-jost text-black text-[19px] text-left pl-9 pt-6">
            By harnessing the power of AI, Fyntl-AI bridges the gap between
            Micro Enterprises and accounting professionals. Our ecosystem
            empowers Micro Enterprises to manage their finances with ease, while
            ultaneously allowing accountants to deliver exceptional client
            service with improved efficiency.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-4 w-[40%] h-[50vh]">
        <p className="font-roboto font-semibold text-black text-[33px] mr-4">
        The Fyntl-AI Advantage        </p>
      </div>
    </div>
  );
};

export default Adv2;

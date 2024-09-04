import React from "react";
import img1 from "../assets/Group.png";

const Adv1 = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-[60vh] sm:h-[70vh]">
      <div className="flex justify-center items-center p-4 w-full sm:w-[40%] sm:h-[50vh] h-[10vh] mt-4">
        <p className="font-roboto font-semibold text-black text-[25px] sm:text-[33px] mr-4">
          What is Fyntl AI
        </p>
        <img src={img1} alt="Fyntl AI" className="hidden sm:flex max-w-xs h-auto mb-10" />
      </div>

      <div className="hidden sm:flex h-[50vh] w-[60vw] sm:w-[75vw] flex-col items-center justify-center 
       text-black text-lg p-4 relative rounded-l-[12rem] shadow-[-8px_8px_16px_rgba(0,0,0,.20)]">
        <p className="font-roboto w-[55vw]  sm: w-[45vw] font-bold text-black mb-2 text-4xl w-full ">
          Do you fear of getting GST notices?
        </p>
        <p className="h-auto w-full w-[55vw] sm: w-[50vw] font-jost text-black text-[19px] text-left pl-9 sm:pt-3 ">
          Fyntl AI is a revolutionary startup dedicated to empowering both Micro
          Enterprises and accounting professionals. We achieve this by fostering
          a collaborative ecosystem built upon cutting-edge technology. And
          therefore, your business would be protected by AI security.
        </p>
      </div>

      <div className="sm:hidden h-auto w-[85vw] flex flex-wrap flex-col items-center justify-center">
        <p className="font-roboto font-bold text-black mb-2 text-2xl text-center">
          Do you fear of getting GST notices?
        </p>
        <p className="font-jost text-black text-[15px] sm:text-[19px] text-center sm:pl-9 sm:pt-6 pt-4">
          Fyntl AI is a revolutionary startup dedicated to empowering both Micro
          Enterprises and accounting professionals. We achieve this by fostering
          a collaborative ecosystem built upon cutting-edge technology. And
          therefore, your business would be protected by AI security.
        </p>
      </div>
    </div>
  );
};

export default Adv1;

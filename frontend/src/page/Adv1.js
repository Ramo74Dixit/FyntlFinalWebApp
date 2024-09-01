import React from "react";
import img1 from "../assets/Group.png";

const Adv1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-[70vh] p-4">
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[40%] h-auto md:h-[50vh] mb-4 md:mb-0">
        <p className="font-roboto font-semibold text-black text-[28px] md:text-[33px] text-center md:text-left mb-4 md:mr-4">
          What is Fyntl AI
        </p>
        <img src={img1} alt="Fyntl AI" className="max-w-xs h-auto mb-4 md:mb-10" />
      </div>
      <div className="w-full md:w-[60%] flex flex-col items-center justify-center text-black text-lg p-4 relative rounded-l-none md:rounded-l-[12rem] shadow-none md:shadow-[-8px_8px_16px_rgba(0,0,0,.20)]">
        <p className="font-roboto font-bold text-black mb-2 text-[28px] md:text-[33px] text-center md:text-left">
          Do you fear of getting GST notices?
        </p>
        <p className="w-full md:w-[75vh] font-jost text-black text-[16px] md:text-[19px] text-center md:text-left pl-0 md:pl-9 pt-2 md:pt-6">
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

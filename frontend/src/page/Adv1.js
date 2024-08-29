import React from "react";
import img1 from "../assets/Group.png";
import Adv2 from './Adv2';

const Adv1 = () => {
  return (
    <div>
    <div className="flex flex-row justify-center items-center h-[70vh]">
      <div className="flex justify-center items-center p-4 w-[40%] h-[50vh]">
        <p className="font-roboto font-semibold text-black text-[33px] mr-4">
          What is Fyntl AI
        </p>
        <img src={img1} alt="Fyntl AI" className="max-w-xs h-auto mb-10" />
      </div>
      <div className="h-[50vh] w-[60%] flex flex-col items-center justify-center text-black text-lg p-4 relative rounded-l-[12rem] shadow-[-8px_8px_16px_rgba(0,0,0,.20)]">
        <p className="font-roboto font-bold text-black mb-2 text-[33px]">
          Do you fear of getting GST notices?
        </p>
        <p className="h-auto w-[75vh] font-jost text-black text-[19px] text-left pl-9 pt-6">
          Fyntl AI is a revolutionary startup dedicated to empowering both Micro
          Enterprises and accounting professionals. We achieve this by fostering
          a collaborative ecosystem built upon cutting-edge technology. And
          therefore, your business would be protected by AI security.
        </p>
    
      </div>
    </div>
          <Adv2/></div>

  );
};

export default Adv1;

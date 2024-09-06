import React from "react";
import file from "../assets/file.png";
import grow from "../assets/grow.png";
import boost from "../assets/Boost.png";
import focus from "../assets/Focus.png";
import tick from "../assets/tick.png";
const Card3 = ({ image, title, description }) => (
  <div
    className="font-roboto pr:1 w-full 
    p-4 sm:p-6 md:p-4 m-2 text-left bg-white  flex flex-col"
  >
    <img
      src={image}
      alt={title}
      className="w-[40px] h-[40px] mb-4"
    />
    <h3 className="text-lg sm:text-xl font-semibold mb-2 flex-grow">{title}</h3>
    <p className="text-sm opacity-70 flex-grow">{description}</p>
  </div>
);

const BenefitsCopilot = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row flex-wrap justify-center items-start mt-16 gap-6 h-auto">
    <div className="flex flex-col w-full md:w-1/2">
      <div className="flex flex-row justify-center gap-3 mt-3">
        <div className="w-1/2">
        <Card3 className="w-[20vw] sm:w-[25vw] md:w-[30vw]"
            image={file}
            title="Automate Repetitive Tasks"
            description="Free yourself from data entry, bank reconciliation, and other time-consuming chores."
          />
        </div>
        <div className="w-1/2">
        <Card3 className="w-[20vw]  sm:w-[25vw]  md:w-[30vw]"
            image={grow}
            title="Gain Deeper Client Insights"
            description="Leverage AI-powered analytics to gain a holistic view of client finances and provide more strategic advice."
          />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-3 mt-3 " >
        <div className="w-1/2">
          <Card3 className="w-[20vw] sm:w-[25vw]  md:[30vw]"
            image={boost}
            title="Boost Efficiency & Productivity"
            description="Get more done in less time with automated workflows and intelligent task management."
          />
        </div>
        <div className="w-1/2">
          <Card3 className="w-[20vw] sm:w-[25vw]  md:w-[30vw] "
            image={focus}
            title="Focus on Client Relationships"
            description="Spend less time on administrative tasks and more time collaborating with clients ."
          />
        </div>
      </div>
      <div className="flex flex-row justify-start items-start gap-3 mt-3 w-1/2">
        <Card3 className="w-[20vw] sm:w-[25vw]  md:[30vw]"
          image={tick}
          title="Reduce Errors & Improve Accuracy"
          description="Minimize human error with automated calculations and data verification."
        />
      </div>
    </div>
  
    <div className="w-full md:w-1/3 flex justify-end items-stretch">
      <div className="w-[120px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px] pl-4 sm:p-0
      bg-gradient-to-r from-blue-400 to-blue-900 rounded-lg text-white font-bold
       text-2xl  mt-12 flex flex-grow h-[74vh] sm:[50vh]  justify-center items-center">
        <div className="p-24">Benefits for Accountants & Chartered Accountants</div>
      </div>
    </div>
  </div>
  
  );
};
export default BenefitsCopilot;
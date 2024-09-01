import React from "react";
import file from "../assets/file.png";
import grow from "../assets/grow.png";
import boost from "../assets/Boost.png";
import focus from "../assets/Focus.png";
import tick from "../assets/tick.png";
const Card3 = ({ image, title, description }) => (
  <div
    className={`font-roboto w-full sm:w-[300px] md:w-[300px] p-3 sm:p-8 md:p-3 m-1.5 text-left`}
    style={{ backgroundColor: "#FFFFFF" }}>
    <img src={image} alt={title} />
    <h3 className="text-xl sm:text-xl md:text-l font-semibold mb-2">{title}</h3>
    <p className="text-sm opacity-50">{description}</p>
  </div>
);
const BenefitsCopilot = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start mt-16 ">
    {/* Card Container */}
    <div className="flex flex-wrap gap-4 w-full md:w-3/4 pl-12 mt-8">
      <div className="ml-10"> {/* Added margin-left to each card */}
        <Card3
          image={file}
          title="Automate Repetitive Tasks"
          description="Free yourself from data entry, bank reconciliation, and other time-consuming chores."
        />
      </div>
      <div className="ml-10"> {/* Added margin-left to each card */}
        <Card3
          image={grow}
          title="Gain Deeper Client Insights"
          description="Leverage AI-powered analytics to gain a holistic view of client finances and provide more strategic advice."
        />
      </div>
      <div className="ml-10"> {/* Added margin-left to each card */}
        <Card3
          image={boost}
          title="Boost Efficiency & Productivity"
          description="Get more done in less time with automated workflows and intelligent task management."
        />
      </div>
      <div className="ml-10"> {/* Added margin-left to each card */}
        <Card3
          image={focus}
          title="Focus on Client Relationships"
          description="Spend less time on administrative tasks and more time collaborating with clients and exceeding expectations."
        />
      </div>
      <div className="ml-10"> {/* Added margin-left to each card */}
        <Card3
          image={tick}
          title="Reduce Errors & Improve Accuracy"
          description="Minimize human error with automated calculations and data verification."
        />
      </div>
    </div>
    <div className="w-full md:w-1/2 mr-20 ml-2 flex justify-start items-stretch">
  <div className="w-[120px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px] 
  bg-gradient-to-r from-blue-400 to-blue-900 rounded-lg text-white font-bold text-2xl m-6 mt-12 mb-12 mr-6 flex-grow h-[72vh] flex justify-center items-center">
    <div className="p-24">Benefits for Accountants & Chartered Accountants</div>
  </div>
</div>
  </div>
  );
};
export default BenefitsCopilot;

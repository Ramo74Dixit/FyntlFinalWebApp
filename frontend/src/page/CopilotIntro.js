import React from "react";
import Navbar from './Navbar';
import AccountingCopilot from './AccountingCopilot';
import BenefitsCopilot from "./BenefitsCopilot";

const CopilotIntro = () => {
  return (
    <div>
      {/* Wrap the Navbar with a div that applies specific styles for this page */}
      <div className="copilot-navbar-style">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center font-roboto p-10 leading-relaxed m-8">
        <div className="w-2/3 text-3xl font-bold mb-4 text-center">
          Tired of spending hours on repetitive tasks?
        </div>
        <div className="w-3/5 text-xl text-center opacity-50">
          Let Accounting Co-pilot be your secret weapon. This innovative AI platform
          automates tedious processes, streamlines workflows, and frees you up to focus 
          on what matters most - building strong client relationships and delivering exceptional service.
        </div>
      </div>
      <AccountingCopilot />
      <BenefitsCopilot />
    </div>
  );
};

export default CopilotIntro;

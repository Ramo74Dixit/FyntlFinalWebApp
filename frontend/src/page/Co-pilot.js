import React from "react";
import Card2 from "./Card2";
const Copilot=()=>
{
 return(
<div className="font-roboto p-10 leading-relaxed bg-gradient-to-r from-blue-400 to-blue-900 mt-6">
  <div className="flex flex-wrap justify-center items-center text-center gap-5">
    {/* Center the text and allow it to take full width on small screens */}
    <div className="w-full sm:w-auto text-[#FFFFFF] text-xl sm:text-2xl md:text-2xl font-semibold">
      Accounting Copilot
    </div>
    {/* Center the card below the text on small screens */}
    <div className="w-full sm:w-auto">
      <Card2
        title="Your AI-Powered Partner in Efficiency"
        description="For Accountants and Chartered Accountants, Fyntl-AI Accounting Copilot acts as your intelligent right hand. This innovative AI platform automates tedious processes, streamlines workflows, and empowers you to focus on high-value client service. No more drowning in paperwork or repetitive designs."
        buttonText="Know More"
      />
    </div>
  </div>
</div>

 )
}
export default Copilot;
import React from 'react';
import Security from '../assets/Security.png';
import Automation from '../assets/Automation.png';
import Realtime from '../assets/Realtime.png';
import Customizable from '../assets/Customizable.png';
import Seamless from '../assets/Seamless.png';

const cardData = [
  {
    image: Security,
    title: "Secure Document Management & Collaboration",
    description: "Manage and collaborate on documents securely.",
  },
  {
    image: Automation,
    title: "Automated Data Entry & Bank Reconciliation",
    description: "Automate your data entry and bank reconciliation tasks.",
  },
  {
    image: Realtime,
    title: "Real-time Financial Reporting & Analytics",
    description: "Get real-time insights into your financial data.",
  },
  {
    image: Customizable,
    title: "Customizable Workflows & Task Automation",
    description: "Customize your workflows and automate tasks efficiently.",
  },
  {
    image: Seamless,
    title: "Seamless Integration with Accounting Software",
    description: "Integrate seamlessly with your accounting software.",
  },
];

const Card = ({ image, title, description, iconWidth, iconHeight }) => {
  return (
    <div className="flex flex-col justify-center p-8 border-[2px] rounded-3xl shadow-sm hover:shadow-md transition-shadow w-[316px] h-[209px] border-[#083bf441]">
      <img
        src={image}
        alt={title}
        className={`mb-4 object-contain`}
        style={{ width: iconWidth, height: iconHeight }}
      />
      <h3 className="text-lg font-medium text-left mb-2">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

const Copilotfeature = () => {
  return (
    <div className='mt-16 flex flex-col items-center'>
      <div className='text-4xl font-bold text-center mb-14'>
        Accounting Co-pilot Features
      </div>
      <div className="lg:mt-16 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-8">
        <div className="flex flex-wrap justify-center gap-12">
          {cardData.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              iconWidth="55px" // Modify icon width here
              iconHeight="50px" // Modify icon height here
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {cardData.slice(3).map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              iconWidth="55px" // Modify icon width here
              iconHeight="50px" // Modify icon height here
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-20 mb-8">
        <button className='bg-[#2060AC] text-white w-[286px] h-[74px] text-2xl rounded-xl font-light'>
          Schedule a free demo
        </button>
      </div>
    </div>
  );
};

export default Copilotfeature;

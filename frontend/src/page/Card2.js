import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card2 = ({ title, description, buttonText }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/copilot-intro'); // Redirects to the CopilotIntro route
  };

  return (
    <div
      className={`font-roboto w-full sm:w-[500px] md:w-[630px] p-6 sm:p-8 md:p-12 m-1.5 rounded-lg shadow-md hover:shadow-lg text-left`}
      style={{ backgroundColor: "#FFFF" }}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">{title}</h3>
      <p className="text-base sm:text-lg md:text-lg text-[#454647] text-left mb-5 font-normal">{description}</p>
      <button
        className="bg-blue-800 text-white p-2 cursor-pointer text-base sm:text-lg md:text-xl font-medium rounded-lg"
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
export default Card2;
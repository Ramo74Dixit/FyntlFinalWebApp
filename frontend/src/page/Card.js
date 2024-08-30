import React from 'react';

const Card = ({ image,title, description }) => (
  <div
    className={`font-roboto w-full sm:w-[280px] md:w-[280px] p-6 sm:p-8 md:p-12 m-1.5 rounded-lg shadow-md hover:shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300 text-center`}
    style={{ backgroundColor: "#FFFFFF" }}
  >
    <div className="bg-blue-100 p-2 bg-opacity-35 transform -skew-x-10 -skew-y-10 inline-block">
    <img src={image} alt={title} />
    </div>

    <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-2 ">{title}</h3>
    <p className="text-base sm:text-lg md:text-lg text-[#454647] text-center mb-5 font-normal">{description}</p>
   
    
  </div>
);

export default Card;

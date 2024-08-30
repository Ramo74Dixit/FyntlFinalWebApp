import React from 'react';

const Card = ({ image,title, description }) => (
  <div
    className={`font-roboto w-full sm:w-[250px] md:w-[250px] p-3 sm:p-8 md:p-3 m-1.5 rounded-lg shadow-md hover:shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300 text-center`}
    style={{ backgroundColor: "#FFFFFF" }}
  >
   <div className="relative p-6 mt-4 bg-blue-100 bg-opacity-35 transform rotate-[75deg] rounded-xl inline-block">
  <img src={image} alt={title} className="transform -rotate-[75deg]" />
</div>


    <h3 className="text-xl sm:text-2xl md:text-xl font-semibold mb-2 ">{title}</h3>
    <p className="text-base sm:text-lg md:text-lg text-[#454647] text-center mb-5 font-normal">{description}</p>
   
    
  </div>
);

export default Card;

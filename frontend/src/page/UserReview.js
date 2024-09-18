import React from "react";
import UserReviewCard from "./UserReviewCard's";

const Review = () => {
   return (
      <div className="mt-8 sm:mt-16  sm:mb-24 px-4 md:px-10 lg:px-20">
         <div className="font-medium  text-3xl sm:text-3xl md:text-4xl text-center">
            User's Review
         </div>
         <div className="mt-5 sm:mt-10 mb-10 sm:text-lg md:text-lg lg:text-xl text-[#404040] font-normal text-center">
            Ipsum non ea laboris dolor aliqua enim pariatur minim excepteur
            <br className="hidden md:block" />
            tempor laboris. Anim laboris consectetur.
         </div>
         <div className="font-semibold text-4xl sm:text-3xl md:text-4xl sm:mb-20 text-center ">
            What People Say About Us
         </div>
         <UserReviewCard />
      </div>
   );
};

export default Review;

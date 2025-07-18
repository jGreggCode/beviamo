import React from "react";
import { assets } from "../assets/assets";
import AnimatedContent from "../animated/AnimateContent";

const Start = () => {
  return (
    <div className="pt-10 pb-10">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-dmsans text-white text-md md:text-2xl font-medium tracking-wider">
          Start your own COFFEE BUSINESS
        </p>
        <AnimatedContent
          distance={60}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0}
          delay={0.5}
        >
          <div className="flex justify-center gap-3 w-full">
            <div className="p-6 bg-[#a48565] rounded-xl">
              <img className="" src={assets.startOwnBusiness} alt="" />
            </div>
            <div className="p-6 bg-[#a48565] rounded-xl">
              <img src={assets.startOwnBusiness2} alt="" />
            </div>
          </div>
        </AnimatedContent>
        <div className="pt-5">
          <button className="px-9 py-5 rounded-lg bg-[#6e4f37] hover:translate-y-[-3px] transition-all duration-200">
            <p className="text-dmsans tracking-wider text-white font-medium">
              Know more
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;

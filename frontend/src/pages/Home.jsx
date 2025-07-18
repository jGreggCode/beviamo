import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import BestSeller from "../components/BestSeller";
import Start from "../components/Start";
import OurPolicy from "../components/OurPolicy";
import ResellerBox from "../components/ResellerBox";

const Home = () => {
  return (
    <div className="">
      <div className="h-[500px] md:h-[700px] relative">
        <Hero />
      </div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <FeaturedProducts />
      </div>
      <div className="px-4 h-full bg-brown-regular">
        <Start />
      </div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <BestSeller />
        <OurPolicy />
        <ResellerBox />
      </div>
    </div>
  );
};

export default Home;

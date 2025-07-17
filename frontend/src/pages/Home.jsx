import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div className="">
      <div className="h-[500px] md:h-[700px] relative">
        <Hero />
      </div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <FeaturedProducts />
        <BestSeller />
      </div>
    </div>
  );
};

export default Home;

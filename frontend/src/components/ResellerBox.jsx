import React from "react";
import SplitText from "../animated/SplitText";

const ResellerBox = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center mb-20">
      <p className="text-2xl font-medium brown-regular">
        <SplitText
          text="Become a reseller in your area & get a discount"
          className="text-2xl font-semibold text-center"
          delay={20}
          duration={0.9}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </p>
      <p className="brown-regular mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-brown-primary text-white text-xs px-10 py-4"
          type="submit"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default ResellerBox;

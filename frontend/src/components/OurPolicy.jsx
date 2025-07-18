import React from "react";
import { assets } from "../assets/assets";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import AnimatedContent from "../animated/AnimateContent";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm md:text-base text-amber-900">
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
        <div>
          <MdOutlinePayments size={48} className="m-auto mb-5" />
          <p className="font-semibold">Easy Online Payment</p>
          <p className="text-amber-900">We offer online payment methods</p>
        </div>
        <div>
          <MdOutlineVerified size={48} className="m-auto mb-5" />
          <p className="font-semibold">Authentic Products</p>
          <p className="text-amber-900">Best of quality products</p>
        </div>
        <div>
          <RiCustomerService2Line size={48} className="m-auto mb-5" />
          <p className="font-semibold">Customer Support</p>
          <p className="text-amber-900">We provide 24/7 customer support</p>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default OurPolicy;

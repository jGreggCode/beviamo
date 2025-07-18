import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="text-dmsans">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 px-10 py-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-1/2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque
            eum exercitationem dignissimos illum sed laborum. Suscipit
            perferendis, temporibus corrupti quae aperiam quo atque nesciunt,
            quibusdam iste ipsum quas aut.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-white">
            <li>+63 999 9999 999</li>
            <li>contact@jgdev.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-white">
          Copyright 2025&copy; JGDEV - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

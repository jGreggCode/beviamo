import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"TOP SELLING"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          ex perferendis eaque quidem fugiat pariatur obcaecati deleniti, ipsum
          reprehenderit minima sed tempora quis aliquam quaerat necessitatibus
          molestiae omnis. Quo, obcaecati?
        </p>
      </div>
    </div>
  );
};

export default BestSeller;

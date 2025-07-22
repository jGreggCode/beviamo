import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProdcutsItem from "./ProdcutsItem";
import AnimatedContent from "../animated/AnimateContent";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    console.log(bestProduct);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          ex perferendis eaque quidem fugiat pariatur obcaecati deleniti, ipsum
          reprehenderit minima sed tempora quis aliquam quaerat necessitatibus
          molestiae omnis. Quo, obcaecati?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <AnimatedContent
            key={index}
            distance={60}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={0.5}
            threshold={0}
            delay={0.3}
          >
            <ProdcutsItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProdcutsItem from "./ProdcutsItem";
import AnimatedContent from "../animated/AnimateContent";
import TiltedCard from "../animated/TiltedCard";

const FeaturedProducts = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 6));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"FEATURED"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-grat-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad animi
          incidunt natus doloribus voluptatibus sequi molestiae doloremque
          cumque dicta? Fugiat quaerat maxime numquam deserunt architecto! Minus
          asperiores commodi vitae corrupti.
        </p>
      </div>

      {/* Rendering Products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
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
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

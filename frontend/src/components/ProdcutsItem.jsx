import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProdcutsItem = ({ id, image, name, price }) => {
  const formattedPrice = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const { currency } = useContext(ShopContext);
  return (
    <Link
      className="flex flex-col justify-between h-96 text-amber-900 cursor-pointer border-none p-2 px-4 rounded-xl shadow-lg hover:translate-y-[-8px] transition ease-out duration-500"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-105 transition ease-out duration-500"
          src={image[0]}
          alt="Product Image"
        />
      </div>
      <p className="pb-1 text-sm">{name}</p>
      <p className="text-amber-900 text-lg">
        {currency + " "}
        {formattedPrice}
        {" " + "PHP"}
      </p>

      <div className="flex justify-center w-full">
        <button className="text-center w-52 mb-2 mt-2 p-2 border border-gray-500 shadow-lg rounded-md hover:translate-y-[-5px] transition-all ease-in-out duration-500">
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default ProdcutsItem;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import StarRating from "../components/StarRating";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import RelatedProducts from "../components/RelatedProducts";
import { formatPrice } from "../utils/formatPrice";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    setQuantity(1);
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 pb-10 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* Products Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <StarRating rating={productData.star} />
            <p className="pl-2">({productData.price})</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {formatPrice(productData.price)}
          </p>
          <p className="text-sm md:text-xs">Tax included</p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="flex gap-2 text-lg text-gray-500">
              <span className="inline-flex">
                <FaRegCircleDot className="text-green-700 h-full w-full" />
              </span>{" "}
              In stock
            </p>
          </div>
          {/* QUANTITY */}
          <div className="flex flex-col gap-1">
            <p className="text-lg text-gray-500">Quantity:</p>
            <div className="flex w-40 justify-around items-center py-2 border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-3 py-1 text-xl text-gray-700"
              >
                -
              </button>
              <span className="px-4 text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 text-xl text-gray-700"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <button
              onClick={() => addToCart(productData._id, quantity)}
              className="w-1/2 bg-brown-primary text-white px-8 py-3 text-sm active:bg-brown-background rounded-lg hover:translate-y-[-2px] transition-all"
            >
              <p>ADD TO CART</p>
            </button>
            <button className="w-1/2 bg-brown-background text-white px-8 py-3 text-sm active:bg-brown-background rounded-lg hover:translate-y-[-2px] transition-all">
              <p>BUY IT NOW</p>
            </button>
          </div>
          <hr className="mt-8 sm:w-4/5" />
          <div className="flex px-7 flex-col gap-2 text-gray-500 mt-5">
            <p className="relative">
              <FaCheck className="absolute top-1 left-[-25px] text-green-700" />{" "}
              Pickup available at{" "}
              <span className="font-medium text-black">Beviamo Store</span>
            </p>
            <p className="text-sm">Usually ready in 2 hours</p>
            <p className="text-sm">100% Original Product</p>
            <p className="underline cursor-pointer hover:text-black hover:font-medium">
              View store information
            </p>
          </div>
        </div>
      </div>
      {/* DISPLAY RELATED PROUCTS */}
      <RelatedProducts category={productData.category} />
    </div>
  ) : (
    <div className="opacity-0">Product</div>
  );
};

export default Product;

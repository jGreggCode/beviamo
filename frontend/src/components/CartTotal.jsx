import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { formatPrice } from "../utils/formatPrice";

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);
  console.log(getCartAmount());

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {formatPrice(getCartAmount())}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {formatPrice(deliveryFee)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {currency}{" "}
            {getCartAmount() === 0
              ? 0
              : formatPrice(getCartAmount() + deliveryFee)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

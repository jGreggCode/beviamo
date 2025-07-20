import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₱";
  const deliveryFee = 100;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    if (!cartData[itemId]) {
      cartData[itemId] = 0;
    }

    cartData[itemId] += quantity;

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      try {
        totalCount += cartItems[itemId];
      } catch (error) {
        console.error("Error", error);
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, quantity) => {
    setCartItems((prev) => ({
      // functional update = no race conditions
      ...prev,
      [itemId]: quantity, // overwrite the number directly
    }));
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const itemInfo = products.find((product) => product._id == itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * quantity;
        }
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

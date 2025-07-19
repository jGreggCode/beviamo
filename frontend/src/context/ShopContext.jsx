import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₱";
  const deliveryFee = "100";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

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
    toast.success("Successfully removed item");
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
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

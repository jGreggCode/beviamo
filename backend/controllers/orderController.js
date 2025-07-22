import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing Order Using COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Cash On Delivery",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new OrderModal(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing Order using Stripe
const placeOrderStripe = async (req, res) => {};

// Placing Order using razorpay
const placeOrderRazorpay = async (req, res) => {};

// All Orders Data From Admin Panel
const allOrders = async (req, res) => {};

// User Orders
const userOrders = async (req, res) => {};

// Update Order Status From Admin Panel
const updateOrderStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateOrderStatus,
};

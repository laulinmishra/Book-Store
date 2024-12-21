import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import Stripe from "stripe";

// Global variables for payment
const currency = 'inr'; // Set to INR
const deliveryChargesInUSD = 10; // Delivery charges in USD
const exchangeRate = 83; // Conversion rate from USD to INR

// Stripe gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Place order using Cash on Delivery
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Place order using Stripe payment method
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    const { origin } = req.headers;

    // Convert item prices and calculate total amount in INR
    const itemsTotalInUSD = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const itemsTotalInINR = itemsTotalInUSD * exchangeRate; // Convert to INR

    // Convert delivery charges to INR
    const deliveryChargesInINR = deliveryChargesInUSD * exchangeRate; // Convert delivery charges to INR

    // Total amount in INR
    const totalAmountInINR = itemsTotalInINR + deliveryChargesInINR;

    // Prepare order data
    const orderData = {
      userId,
      items,
      amount: totalAmountInINR,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Prepare Stripe line items
    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: { name: item.name },
        unit_amount: item.price * exchangeRate * 100, // Convert USD to INR, then to paise
      },
      quantity: item.quantity,
    }));

    // Add delivery charges to line items
    line_items.push({
      price_data: {
        currency: currency,
        product_data: { name: "Delivery charges" },
        unit_amount: deliveryChargesInINR * 100, // Convert INR to paise
      },
      quantity: 1,
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Verify Stripe Method
const verifyStripe = async (req, res) => {
  const {orderId, success, uerId} = req.body
  try {
    if (success === "true"){
      await orderModel.findByIdAndUpdate(orderId, { payment: true })
      await userModel.findByIdAndUpdate(userId, { carData: {} })
      res.json({ success: true})
    }else{
      await orderModel.findByIdAndDelete(orderId)
      res.json( { success: false })
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// All orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// All orders data for Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Updating order status for Admin Panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  allOrders,
  userOrders,
  verifyStripe,
  updateStatus,
};

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

const CheckoutPage = () => {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState({
    orderId: "",
    trackingNumber: "",
    items: [],
    totalAmount: 0,
  });
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalAmount = storedCart.reduce((sum: number, item: any) => sum + item.price, 0);

    setOrderDetails({
      orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      trackingNumber: `TRK-${Math.floor(100000 + Math.random() * 900000)}`,
      items: storedCart,
      totalAmount,
    });
  }, []);

  const handlePayment = () => {
    if (selectedPayment && address) {
      setIsLoading(true);
      setTimeout(() => {
        alert(`Payment successful! Using ${selectedPayment}. Thank you for your order.`);
        localStorage.removeItem("cart");
        router.push(`/order-tracking/${orderDetails.orderId}`);
      }, 2000);
    } else {
      alert("Please select a payment option and provide your address.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <FaSpinner className="animate-spin text-blue-600 text-6xl mb-4" />
        <p className="text-lg font-medium text-gray-700">Redirecting to Order Tracking...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">Order Details</h2>
          <p className="text-sm text-gray-500">Order ID: {orderDetails.orderId}</p>
          <p className="text-sm text-gray-500">Tracking Number: {orderDetails.trackingNumber}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">Items</h2>
          <div className="space-y-4">
            {orderDetails.items.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border"
              >
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <p className="text-sm font-semibold text-gray-700">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">Delivery Address</h2>
          <textarea
            className="w-full p-4 border rounded-lg"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={4}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">Payment Options</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="Credit/Debit Card"
                className="h-4 w-4"
                onChange={() => setSelectedPayment("Credit/Debit Card")}
              />
              <span className="text-sm text-gray-600">Credit/Debit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="PayPal"
                className="h-4 w-4"
                onChange={() => setSelectedPayment("PayPal")}
              />
              <span className="text-sm text-gray-600">PayPal</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="Cash on Delivery"
                className="h-4 w-4"
                onChange={() => setSelectedPayment("Cash on Delivery")}
              />
              <span className="text-sm text-gray-600">Cash on Delivery</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-lg font-bold text-gray-800">Total Amount</h2>
          <p className="text-lg font-bold text-blue-600">${orderDetails.totalAmount.toFixed(2)}</p>
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={handlePayment}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Complete Payment
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-700">Thank you for shopping with us!</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

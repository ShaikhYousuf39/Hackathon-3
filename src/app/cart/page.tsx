"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
    const total = storedCart.reduce((sum: number, item: any) => sum + item.price, 0);
    setTotalAmount(total);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const total = updatedCart.reduce((sum: number, item: any) => sum + item.price, 0);
    setTotalAmount(total);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalAmount(0);
    localStorage.removeItem("cart");
  };

  const handleCheckout = () => {
    setIsLoading(true); 
    setTimeout(() => {
      router.push("/checkout"); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>

        {isLoading ? (
          // Loading Screen
          <div className="flex flex-col items-center justify-center h-60">
            <FaSpinner className="animate-spin text-blue-600 text-4xl mb-4" />
            <p className="text-lg font-semibold text-gray-700">Redirecting to Checkout...</p>
          </div>
        ) : cartItems.length === 0 ? (
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border"
                >
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h2 className="font-bold text-gray-800">{item.title}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
              <h2 className="text-lg font-semibold text-gray-800">Total Amount</h2>
              <p className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</p>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={clearCart}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;

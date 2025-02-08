"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  const handleCheckout = async () => {
    setIsLoading(true);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setIsLoading(false);
      alert("Checkout failed. Try again!");
    }
  };

  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto p-8 bg-white ">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-60">
              <FaSpinner className="animate-spin text-blue-600 text-4xl mb-4" />
              <p className="text-lg font-semibold text-gray-700">Redirecting to Checkout...</p>
            </div>
          ) : cartItems.length === 0 ? (
            <p className="text-lg text-gray-600 text-center">Your cart is empty.</p>
          ) : (
            <>
              <div className="space-y-6">
                {cartItems.map((product: any) => (
                  <div key={product.id} className="flex items-center justify-between bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={product.image_url}
                        alt={product.title}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div>
                        <h2 className="font-semibold text-gray-800">{product.title}</h2>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <AiOutlineDelete size={24} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg border text-right">
                <h2 className="text-lg font-semibold text-gray-800">Total Amount</h2>
                <p className="text-2xl font-bold text-blue-600">${totalAmount.toFixed(2)}</p>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={clearCart}
                  className="bg-gray-800 text-white py-2 px-5 rounded-lg hover:bg-gray-900 transition font-medium flex items-center space-x-2"
                >
                  <AiOutlineDelete size={20} />
                  <span>Clear Cart</span>
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-gray-800 text-white py-2 px-5 rounded-lg hover:bg-gray-900 transition font-medium flex items-center space-x-2"
                >
                  <FaCheckCircle size={20} />
                  <span>Proceed to Checkout</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default CartPage;

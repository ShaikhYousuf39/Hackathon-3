"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShippingFast, FaCheckCircle, FaHome } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";


interface OrderTrackingProps {
  params: {
    orderId: string;
  };
}

const OrderTrackingPage = ({ params }: OrderTrackingProps) => {
  const { orderId } = params;
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const order = {
      orderId,
      trackingNumber: Math.floor(Math.random() * 10000000),
      status: "Shipped",
      estimatedDelivery: "2025-01-30",
    };
    setOrderDetails(order);
  }, [orderId]);

  return (

    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaShippingFast className="text-blue-600" />
          Order Tracking
        </h1>

        {orderDetails ? (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border shadow-md">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <MdOutlineDeliveryDining className="text-green-600" />
                Order Details
              </h2>
              <div className="mt-4 text-gray-700">
                <p className="text-xl flex items-center gap-2">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="font-medium">Order ID:</span> {orderDetails.orderId}
                </p>
                <p className="text-xl flex items-center gap-2">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="font-medium">Tracking Number:</span> {orderDetails.trackingNumber}
                </p>
                <p className="text-xl flex items-center gap-2">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="font-medium">Status:</span> {orderDetails.status}
                </p>
                <p className="text-xl flex items-center gap-2">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="font-medium">Estimated Delivery:</span> {orderDetails.estimatedDelivery}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                <FaHome />
                Go to Home Page
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-40">
            <p className="text-lg font-medium text-gray-600">Loading order details...</p>
            <FaShippingFast className="mt-4 text-gray-400 animate-spin" size={36} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTrackingPage;

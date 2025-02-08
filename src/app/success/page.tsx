"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h1>
      <p className="text-gray-700 mt-2">Thank you for your purchase.</p>
      <button onClick={() => router.push("/home")} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Go Home
      </button>
    </div>
  );
};

export default SuccessPage;

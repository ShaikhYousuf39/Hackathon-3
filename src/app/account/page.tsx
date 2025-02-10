"use client";

import React, { useEffect, useState } from "react";
import { FaUser, FaBoxOpen, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AccountPage = () => {
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Account</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
          <FaUser className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
          <p className="text-gray-600"><strong>Name:</strong> {user?.username || "Guest"}</p>
          <p className="text-gray-600"><strong>Email:</strong> {user?.email || "N/A"}</p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Edit Profile
          </button>
        </div>
      
      <div className="bg-white shadow-lg rounded-xl p-6 mt-6 flex justify-center">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <FaSignOutAlt className="text-lg" /> Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;

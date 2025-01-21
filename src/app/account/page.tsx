import React from 'react';
import { FaEdit, FaHistory, FaShippingFast, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">My Account</h1>

        <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p><strong>Name:</strong> Jawaad Akhter</p>
            <p><strong>Email:</strong> jawaad.akhter@example.com</p>
            <p><strong>Phone:</strong> +92 3158130073</p>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            <FaEdit className="inline mr-2" />
            Edit Profile
          </button>
        </div>

        <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Order History</h2>
          <ul className="divide-y divide-gray-300">
            <li className="py-4 flex justify-between items-center">
              <span className="text-lg text-gray-700">Order #12345</span>
              <span className="text-gray-500 text-lg">$45.99</span>
            </li>
            <li className="py-4 flex justify-between items-center">
              <span className="text-lg text-gray-700">Order #67890</span>
              <span className="text-gray-500 text-lg">$89.99</span>
            </li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            <FaHistory className="inline mr-2" />
            View All Orders
          </button>
        </div>

        <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Saved Addresses</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>Sector 7D, Surjani Town, Karachi, Pakistan</li>
            <li>Landhi No 1, Karachi, Pakistan</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            <FaShippingFast className="inline mr-2" />
            Add New Address
          </button>
        </div>

        <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Payment Methods</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>Visa ending in 1234</li>
            <li>MasterCard ending in 5678</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            <FaCreditCard className="inline mr-2" />
            Add Payment Method
          </button>
        </div>

        <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Account Settings</h2>
          <button className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
            <FaSignOutAlt className="inline mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

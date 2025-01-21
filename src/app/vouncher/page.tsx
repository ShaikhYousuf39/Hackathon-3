'use client';

import React, { useState } from "react";

interface GiftCard {
  code: string;
  amount: number;
  expiry: string;
  usage: string;
}

const VoucherPage = () => {
  const [voucherCode, setVoucherCode] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [voucherDetails, setVoucherDetails] = useState<GiftCard | null>(null);
  const [discountApplied, setDiscountApplied] = useState(false);

  const giftCards: GiftCard[] = [
    {
      code: "GIFT123",
      amount: 50,
      expiry: "2025-12-31",
      usage: "Can be used for any purchases over $50. Not valid for discounted items.",
    },
    {
      code: "VOUCHER10",
      amount: 10,
      expiry: "2024-05-15",
      usage: "Valid on selected items only.",
    },
    {
      code: "FREESHIP",
      amount: 0,
      expiry: "2025-12-31",
      usage: "Free shipping on orders over $30.",
    },
    {
      code: "HOLIDAY25",
      amount: 25,
      expiry: "2025-01-01",
      usage: "Valid for holiday items only.",
    },
    {
      code: "EIDSPECIAL15",
      amount: 15,
      expiry: "2025-11-30",
      usage: "15% off sitewide during Black Friday sale.",
    },
    {
      code: "SUMMER20",
      amount: 20,
      expiry: "2025-06-30",
      usage: "20% off all summer collection items.",
    },
    {
      code: "WELCOME5",
      amount: 5,
      expiry: "2025-03-01",
      usage: "Welcome discount of $5 on your first purchase.",
    },
  ];

  const validateVoucher = () => {
    const voucher = giftCards.find((card) => card.code === voucherCode);
    if (voucher) {
      const currentDate = new Date();
      const expiryDate = new Date(voucher.expiry);
      if (expiryDate > currentDate) {
        setVoucherDetails(voucher);
        setIsValid(true);
        setDiscountApplied(true);
      } else {
        setVoucherDetails(null);
        setIsValid(false);
        setDiscountApplied(false);
      }
    } else {
      setIsValid(false);
      setDiscountApplied(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Voucher and Gift Cards</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Enter Voucher Code:</h3>
        <div className="flex items-center mt-2">
          <input
            type="text"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            className="border p-2 rounded-l-md w-2/3"
            placeholder="Enter voucher code"
          />
          <button
            onClick={validateVoucher}
            className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600"
          >
            Apply Voucher
          </button>
        </div>
      </div>

      {isValid === null ? (
        <div className="text-center text-gray-500">Please enter a voucher code to check validity.</div>
      ) : isValid ? (
        <div className="text-center text-green-500">
          <h3 className="font-semibold">Voucher Applied!</h3>
          <p className="mt-2">Code: {voucherDetails?.code}</p>
          <p>Amount: ${voucherDetails?.amount}</p>
          <p>Expiry Date: {voucherDetails?.expiry}</p>
          <p>Usage: {voucherDetails?.usage}</p>
          <p className="mt-4">Your discount of ${voucherDetails?.amount} has been applied!</p>
        </div>
      ) : (
        <div className="text-center text-red-500">
          <p>Invalid or Expired Voucher Code.</p>
        </div>
      )}

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Available Gift Cards:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {giftCards.map((card, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold">Code: {card.code}</h4>
              <p>Amount: ${card.amount}</p>
              <p>Expiry: {card.expiry}</p>
              <p>Usage: {card.usage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoucherPage;

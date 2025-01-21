"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  image_url: string;
  title: string;
  description: string;
  price: number;
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (title: string) => {
    const updatedWishlist = wishlist.filter((item) => item.title !== title);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Your Wishlist is Empty</h2>
        <p className="text-lg text-gray-600">
          Browse products and add your favorites to your wishlist!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-semibold mb-8 text-center">Your Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.map((product) => (
          <div
            key={product.title}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <Image
              src={product.image_url}
              alt={product.title}
              width={200}
              height={200}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700 text-center mb-4">{product.description}</p>
            <p className="text-lg font-bold text-blue-600 mb-4">${product.price}</p>
            <button
              onClick={() => removeFromWishlist(product.title)}
              className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:bg-red-700 hover:scale-105 active:scale-95"
            >
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;

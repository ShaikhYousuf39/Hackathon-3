"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link"
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  image_url: string;
  title: string;
  description: string;
  price: number;
  inventory: number;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const productData = await client.fetch(
    `*[_type=="products" && _id == $id][0]{
      "image_url": image.asset->url,
      title,
      description,
      price,
      inventory
    }`,
    { id }
  );

  if (!productData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600">Product Not Found</h1>
        <p className="text-gray-600 mt-4">
          Sorry, the product you're looking for does not exist or may have been removed.
        </p>
        <Link
          href="/"
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const product: Product = productData;

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: Product) => item.title === product.title);

    if (existingProduct) {
      existingProduct.inventory += 1;
    } else {
      cart.push({ ...product, inventory: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToWishlist = (product: Product) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const existingProduct = wishlist.find((item: Product) => item.title === product.title);

    if (!existingProduct) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to wishlist!");
    } else {
      alert("This product is already in your wishlist.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className=" mb-4">
            <Image
              src={product.image_url}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-blue-600 mb-4">
              Price: ${product.price}
            </p>
            <p className="text-lg text-gray-500 mb-4">
              Inventory: {product.inventory}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:bg-teal-700 hover:scale-105 active:scale-95"
              >
                <FaShoppingCart className="mr-2" size={18} />
                Add to Cart
              </button>

              <button
                onClick={() => addToWishlist(product)}
                className="flex items-center justify-center w-full py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:bg-orange-600 hover:scale-105 active:scale-95"
              >
                <FaHeart className="mr-2" size={18} />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

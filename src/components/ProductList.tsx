"use client";

import React, { useEffect, useState, useMemo } from "react";
import getProducts from "@/components/getProducts";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

interface Product {
  _id: string;
  image_url: string;
  title: string;
  description: string;
  price: number;
  inventory: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [inStock, setInStock] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getProducts();
        console.log('Fetched products:', productData);
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    console.log('Searching for exact title:', trimmedValue);
    setActiveSearch(trimmedValue);
  };

  const handleClear = () => {
    setInputValue("");
    setActiveSearch("");
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (activeSearch) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(activeSearch.toLowerCase())
      );
    }


    filtered = filtered.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );

    if (inStock) {
      filtered = filtered.filter(product => product.inventory > 0);
    }

    return filtered;
  }, [products, activeSearch, minPrice, maxPrice, inStock]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="text-3xl font-semibold text-gray-800 mb-4">Loading...</div>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce200"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce400"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>

      <form onSubmit={handleSubmit} className="flex justify-center mb-6">
        <div className="flex w-full max-w-md gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter product title"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2 transition-colors"
          >
            <Search size={20} />
            Search
          </button>
        </div>
      </form>

      <div className="flex justify-between mb-6">

        <div>
          <label className="text-lg font-semibold text-gray-800">Price:</label>
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="ml-2 px-4 py-2 border border-gray-300 rounded-lg w-24"
          />
          <span className="mx-2 text-gray-700">to</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="px-4 py-2 border border-gray-300 rounded-lg w-24"
          />
        </div>

        <div>
          <label className="flex items-center text-lg font-semibold text-gray-800">
            <input
              type="checkbox"
              checked={inStock}
              onChange={() => setInStock(!inStock)}
              className="mr-2"
            />
            In Stock
          </label>
        </div>
      </div>

      {activeSearch && (
        <div className="text-center text-gray-600 mb-4">
          {filteredProducts.length === 0 ? (
            <p>No product found with the search term: "{activeSearch}"</p>
          ) : (
            <p>Found products matching: "{activeSearch}"</p>
          )}
          <button
            onClick={handleClear}
            className="ml-2 text-blue-500 hover:text-blue-600"
          >
            Clear Search
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={product.image_url}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600">
              Price: ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Inventory: {product.inventory}</p>
            <Link
              href={`/product/${product._id}`}
              className="text-blue-600 mt-4 inline-block hover:underline hover:text-blue-800 font-semibold transition-colors duration-300 ease-in-out"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

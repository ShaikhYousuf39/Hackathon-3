'use client';
import React, { useEffect, useState } from "react";
import adminData from "@/components/AdminData";

interface Product {
  _id: string;
  image_url: string;
  title: string;
  description: string;
  price: number;
  priceWithoutDiscount: number;
  inventory: number;
  tags: string[];
}

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await adminData();
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading products...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Admin Dashboard</h2>
      
      {/* Product Table Section */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-md border border-gray-200">
        <table className="min-w-full table-auto text-gray-800">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Product ID</th>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Stock</th>
              <th className="py-3 px-6 text-left">Discounted Price</th>
              <th className="py-3 px-6 text-left">Tags</th>
              <th className="py-3 px-6 text-left">Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-t hover:bg-gray-50 transition duration-200"
              >
                <td className="py-3 px-6">{product._id}</td>
                <td className="py-3 px-6 font-medium">{product.title}</td>
                <td className="py-3 px-6 text-teal-600 font-semibold">${product.price}</td>
                <td className="py-3 px-6">{product.inventory}</td>
                <td className="py-3 px-6 text-red-500 line-through">${product.priceWithoutDiscount}</td>
                <td className="py-3 px-6">
                  {product.tags.join(", ")}
                </td>
                <td className="py-3 px-6">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-md shadow-md"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional Section for Managing Products (Optional) */}
      <div className="mt-6 flex justify-between">
        <button className="px-4 py-2 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600 transition duration-200">
          Add New Product
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 transition duration-200">
          Export Products
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

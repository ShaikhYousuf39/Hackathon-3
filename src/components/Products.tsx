'use client'

import React, { useEffect, useState } from "react";
import getSomeProducts from "@/components/getSomeProducts";
import Link from 'next/link';
import Image from 'next/image';

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

    useEffect(() => {
        const fetchProducts = async () => {
            const productData = await getSomeProducts();
            setProducts(productData);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center text-xl">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.title} className="bg-white shadow-md rounded-lg p-4">
                        <div className="relative w-full h-64 mb-4">
                            <Image
                                src={product.image_url}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-lg font-bold text-blue-600">Price: ${product.price}</p>
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

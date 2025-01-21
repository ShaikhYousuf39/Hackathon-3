import React from "react";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">About Comforty</h1>

                <p className="text-lg text-gray-700 mb-6">
                    Welcome to Comforty, your one-stop shop for premium chairs. At Comforty, we believe that comfort is key, and we’re dedicated to offering only the highest quality chairs that elevate your relaxation and productivity.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Comforty was founded with a simple vision: to provide chairs that combine style, comfort, and durability. From office chairs to lounge chairs, we carefully curate each piece to ensure that it meets our standards for comfort and design. Whether you’re working long hours or unwinding after a busy day, we want to ensure you do so in comfort.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
                <p className="text-lg text-gray-700 mb-6">
                    At Comforty, we are committed to offering you a wide selection of chairs that are designed to suit various needs and preferences. We aim to make your shopping experience as easy and enjoyable as possible. Our goal is simple: to bring comfort to your home and office, one chair at a time.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                <ul className="list-disc pl-5 text-lg text-gray-700">
                    <li>High-quality, ergonomic chairs for all needs</li>
                    <li>Affordable pricing without compromising on comfort</li>
                    <li>Free shipping on all orders</li>
                    <li>Customer satisfaction guaranteed</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;

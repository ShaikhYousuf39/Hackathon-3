import React from 'react';

const FaqsPage = () => {
  const faqs = [
    {
      question: "What is Comforty?",
      answer: "Comforty is an online furniture store offering a wide range of home decor products with free shipping on orders over $50."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your shipment on the courier's website."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only offer shipping within the USA. We are looking to expand internationally in the future."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and Apple Pay for secure and easy transactions."
    },
    {
      question: "How can I return an item?",
      answer: "To return an item, please visit the 'Returns & Exchanges' section of our website, where you can fill out a return form and initiate the process."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Frequently Asked Questions</h1>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{faq.question}</h2>
              <p className="text-lg text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;

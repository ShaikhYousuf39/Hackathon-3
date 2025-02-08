import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Introduction</h2>
          <p className="text-gray-700">
            Welcome to Comforty. These terms and conditions outline the rules and regulations
            for the use of our website and services. By accessing or using the website, you agree to comply
            with these terms. If you disagree with any part of the terms, please do not use our website.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Use of the Website</h2>
          <p className="text-gray-700">
            You may use our website for lawful purposes only. You are prohibited from using the website in
            any way that could damage, disable, or impair its functionality.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Intellectual Property</h2>
          <p className="text-gray-700">
            All content, images, trademarks, and logos on this website are the property of Comforty.
            Unauthorized use of any materials from the website is prohibited.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Limitation of Liability</h2>
          <p className="text-gray-700">
            Comforty will not be held liable for any damages arising from the use of the website.
            We are not responsible for any loss of data, income, or damage to your system from the use of our website.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Governing Law</h2>
          <p className="text-gray-700">
            These terms and conditions are governed by the laws of Pakistan. Any disputes will be resolved
            in the appropriate jurisdiction.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify or update these terms at any time. We will notify you of any changes
            by posting the updated terms on this page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;

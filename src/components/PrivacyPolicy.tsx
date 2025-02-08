import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Introduction</h2>
          <p className="text-gray-700">
            At Comforty, we value your privacy. This Privacy Policy outlines how we collect, use, and protect
            your personal data. By using our website and services, you consent to the practices described in this policy.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Information We Collect</h2>
          <p className="text-gray-700">
            We collect personal information that you provide to us when you use our website, including your name, email
            address, and payment details. We may also collect non-personal information like browser type and IP address.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">How We Use Your Information</h2>
          <p className="text-gray-700">
            We use your information to process orders, provide customer support, and improve our website and services. We
            may also send you promotional emails or newsletters if you have opted in.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Data Protection</h2>
          <p className="text-gray-700">
            We implement industry-standard security measures to protect your personal information from unauthorized
            access, alteration, or destruction.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Sharing Your Information</h2>
          <p className="text-gray-700">
            We do not share your personal information with third parties except as necessary to fulfill your orders or
            comply with the law. We may use trusted partners to help with processing payments or providing customer support.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Cookies</h2>
          <p className="text-gray-700">
            Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device
            that allow us to recognize you on subsequent visits.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, update, or delete your personal data. If you wish to exercise these rights,
            please contact us at <p className="font-semibold text-blue-800">comforty301@gmail.com.</p>
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised
            date will be updated at the top.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

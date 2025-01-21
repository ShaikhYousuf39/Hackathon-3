import React from 'react';

const NeedHelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Need Help?</h1>

        <div className="space-y-8">
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              If you need assistance or have any questions, feel free to reach out to our support team. We're here to help!
            </p>
            <div className="text-lg text-blue-600 hover:underline">
              <a href="mailto:support@comforty.com">support@comforty.com</a>
            </div>
            <p className="mt-4 text-lg text-gray-700">Or call us at:</p>
            <div className="text-lg text-gray-800 font-medium">
              (808) 555-0111
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 mb-4">
              You may find answers to your questions in our FAQ section. If you don't see your question listed, feel free to contact us!
            </p>
            <div className="text-lg text-blue-600 hover:underline">
              <a href="/faqs">Go to FAQs</a>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Chat</h2>
            <p className="text-lg text-gray-700 mb-4">
              If you prefer to chat live with a representative, click below to start a conversation.
            </p>
            <div className="text-lg text-blue-600 hover:underline">
              <a href="/live-chat">Start Live Chat</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelpPage;

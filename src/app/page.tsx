'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/2 bg-gray-900 text-white flex flex-col justify-center items-center md:items-start p-6 sm:p-8 md:p-16 space-y-4 md:space-y-6 text-center md:text-left">
        <div className="flex items-center space-x-2">
          <Image src="/logo1.png" alt="Comforty Logo" width={45} height={40} className="w-12 h-10 sm:w-14 sm:h-12" priority />
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">Comforty</h1>
        </div>

        <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-sm md:max-w-md">
          Discover comfort and style with our premium collection of chairs.
          Elevate your space with ergonomic design and unparalleled comfort.
        </p>
        <div className="border-none md:border-l-4 border-blue-500 md:pl-4">
          <p className="italic text-gray-400 text-xs sm:text-sm md:text-base">Where comfort meets elegance</p>
        </div>
      </div>

      <div className="md:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-6 sm:p-8 md:p-16 space-y-4 sm:space-y-6 md:space-y-8">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2 sm:mb-4">Welcome</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">Join our community of comfort enthusiasts</p>
        </div>

        <div className="space-y-3 sm:space-y-4 w-full max-w-xs">
          <Link href="/login" className="w-full flex items-center justify-center bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L10.586 9H5a1 1 0 110-2h5.586L10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Login
          </Link>

          <Link href="/signup" className="w-full flex items-center justify-center bg-gray-800 text-white py-2 sm:py-3 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

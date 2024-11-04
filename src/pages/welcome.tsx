// src/pages/welcome.tsx
import React from "react";
import Link from "next/link";

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-600 text-white">
      {/* Header without Background Image */}
      <header className="w-full py-6 px-8 bg-gray-100 flex items-center justify-between">
        <h1 className="text-5xl font-bold text-green-700">Omole Banking</h1>
        
        <div className="flex space-x-4">
          <Link href="/signin">
            <button className="px-6 py-2 bg-white text-green-700 font-semibold rounded-lg transition hover:bg-gray-200">
              Log In
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-2 bg-white text-green-700 font-semibold rounded-lg transition hover:bg-gray-200">
              Sign Up
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Side: Info Banner without Background Image */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-green-700 p-8 text-center space-y-6">
          <h2 className="text-3xl font-semibold">Welcome to Omole Banking</h2>
          <p className="text-lg">Your trusted partner for seamless banking experiences.</p>
          <Link href="/info">
            <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg transition hover:bg-gray-200">
              Learn More
            </button>
          </Link>
        </div>

        {/* Right Side: Full-Height Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/background.gif" // Ensure this is the correct path to the image in the public folder
            alt="Banking Background"
            className="w-full h-full object-cover border-l-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

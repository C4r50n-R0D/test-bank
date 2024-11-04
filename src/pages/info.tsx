// src/pages/info.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

const reviews = [
  "Omole Banking has transformed the way I manage my finances. Highly recommended!",
  "Exceptional customer service and easy-to-use features. I feel secure banking with Omole.",
  "Omole Banking offers the best rates and options for my savings. Couldn't be happier!",
  "I've never felt more confident with my bank. Omole Banking is truly ahead of the curve.",
  "The seamless interface and fast service make Omole Banking a pleasure to use every day."
];

const Info: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change review every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-6">Learn More About Omole Banking</h1>

      {/* Our Mission Section */}
      <section className="max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          At Omole Banking, our mission is to empower individuals and businesses by providing
          innovative, secure, and accessible financial solutions. We are committed to building
          a community-focused financial ecosystem that promotes transparency, trust, and growth.
        </p>
      </section>

      {/* Revolving User Reviews */}
      <section className="max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">What Our Users Say</h2>
        <div className="bg-green-700 text-white p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
          <p className="text-lg italic">"{reviews[currentReviewIndex]}"</p>
        </div>
      </section>

      {/* Call-to-Action Button */}
      <Link href="/signup">
        <button className="px-8 py-3 bg-green-700 text-white font-semibold rounded-lg transition hover:bg-green-600">
          Sign Up Now
        </button>
      </Link>
    </div>
  );
};

export default Info;

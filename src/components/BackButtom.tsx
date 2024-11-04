// src/components/BackButton.tsx
import React from "react";
import { useRouter } from "next/router";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
    >
      Previous
    </button>
  );
};

export default BackButton;

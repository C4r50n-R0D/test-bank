// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 text-center bg-gradient-to-r from-amber-500 via-amber-300 to-green-700">
      <h1 className="text-6xl font-bold text-white" style={{ fontSize: "1in" }}>
        Omole Banking
      </h1>
    </header>
  );
};

export default Header;

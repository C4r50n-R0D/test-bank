// src/components/Layout.tsx
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <h1 className="text-xl font-bold">Bank Dashboard</h1>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;

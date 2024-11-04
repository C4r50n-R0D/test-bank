// src/pages/signin.tsx
import { useRouter } from "next/router";
import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Assume login logic here (e.g., API call or authentication check)
    if (username && password) {
      // For now, simulate successful login
      router.push("/home"); // Redirect to Home Page after sign-in
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <form onSubmit={handleSignIn} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white font-semibold rounded-lg transition-colors bg-primary hover:bg-hoverPrimary"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

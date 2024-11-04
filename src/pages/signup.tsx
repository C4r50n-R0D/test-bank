import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to the backend
    console.log("Form data submitted:", formData);
    alert("Thank you for signing up!"); // Temporary feedback
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-8">Sign Up for Omole Banking</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <button type="submit" className="w-full py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

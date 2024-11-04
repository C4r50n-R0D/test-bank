// src/pages/home.tsx
import React, { useState } from "react";
import Link from "next/link";

const Home: React.FC = () => {
  const [balance, setBalance] = useState<number>(25632.0); // Initial bank balance
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [paymentAmount, setPaymentAmount] = useState<string>("");

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance((prevBalance) => prevBalance + amount);
      setDepositAmount("");
    } else {
      alert("Please enter a valid deposit amount.");
    }
  };

  const handlePayment = () => {
    const amount = parseFloat(paymentAmount);
    if (!isNaN(amount) && amount > 0) {
      if (amount > balance) {
        alert("Insufficient balance to make this payment.");
      } else {
        setBalance((prevBalance) => prevBalance - amount);
        setPaymentAmount("");
      }
    } else {
      alert("Please enter a valid payment amount.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gradient Header Banner */}
      <header className="w-full py-10 bg-gradient-to-r from-yellow-400 to-green-500 text-center">
        <h1 className="text-5xl font-bold text-white">Omole Banking</h1>
      </header>

      {/* Balance Display Section */}
      <div className="flex flex-col items-center justify-center mt-10 space-y-6">
        <div className="w-full max-w-2xl p-6 bg-gray-200 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-700">Total Balance</h2>
          <p className="text-5xl font-extrabold text-gray-800 my-4">
            ${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>

          {/* Send and Receive Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              className="w-32 py-2 bg-green-700 text-white font-semibold rounded-lg transition hover:bg-green-600"
              onClick={handleDeposit}
            >
              Send
            </button>
            <button
              className="w-32 py-2 bg-green-700 text-white font-semibold rounded-lg transition hover:bg-green-600"
              onClick={handlePayment}
            >
              Receive
            </button>
          </div>
        </div>

        {/* Manage Balance Section */}
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg text-center mt-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Manage Your Balance</h3>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Enter deposit amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              className="px-6 py-2 bg-green-700 text-white font-semibold rounded-lg transition hover:bg-green-600"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              placeholder="Enter payment amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              className="px-6 py-2 bg-green-700 text-white font-semibold rounded-lg transition hover:bg-green-600"
              onClick={handlePayment}
            >
              Pay Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

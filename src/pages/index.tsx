// src/pages/index.tsx
import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

const Home: React.FC = () => {
  const [balance, setBalance] = useState<number>(25632.0); // Initial bank balance
  const [creditBalance, setCreditBalance] = useState<number>(500); // Initial credit balance
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
        setCreditBalance((prevCredit) => Math.max(prevCredit - amount, 0));
        setPaymentAmount("");
      }
    } else {
      alert("Please enter a valid payment amount.");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div
        className="flex flex-col items-center justify-center w-full p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="w-full max-w-4xl p-6 bg-gradient-to-r from-gray-300 to-gray-600 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-black">Total Balance</h2>
          </div>
          <p className="text-6xl font-extrabold text-black mb-6">
            ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button text="Send" onClick={handleDeposit} />
            <Button text="Receive" onClick={handlePayment} />
          </div>
        </div>

        <div className="w-full max-w-4xl mt-6 p-6 bg-white bg-opacity-75 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Manage Your Balance</h3>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Enter deposit amount"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            <Button text="Deposit" onClick={handleDeposit} />
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              placeholder="Enter payment amount"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
            />
            <Button text="Pay Credit" onClick={handlePayment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// src/components/AccountCard.tsx
import React from "react";

interface AccountCardProps {
  accountType: string;
  balance: number;
}

const AccountCard: React.FC<AccountCardProps> = ({ accountType, balance }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-semibold">{accountType}</h2>
      <p className="text-gray-600">Balance:</p>
      <p className="text-2xl font-bold text-blue-600">${balance.toFixed(2)}</p>
    </div>
  );
};

export default AccountCard;

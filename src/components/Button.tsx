// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 w-full text-white rounded-lg transition-colors"
      style={{
        backgroundColor: "#107f1b",
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "16px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#70ba44")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#107f1b")}
    >
      {text}
    </button>
  );
};

export default Button;

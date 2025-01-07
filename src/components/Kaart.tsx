import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Kaart: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-20 text-white hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

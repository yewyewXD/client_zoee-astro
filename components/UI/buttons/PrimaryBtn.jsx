import React from "react";

const PrimaryBtn = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="lg:text-xl text-lg font-semibold shadow-md shadow-black hover:shadow-lg bg-green rounded-lg smooth hover:scale-105 sm:px-10 px-3 sm:py-5 py-2 whitespace-nowrap"
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;

import React from "react";

const SecondaryBtn = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-white lg:px-10 px-9 lg:py-4 py-3 hover:bg-white hover:text-black smooth lg:text-xl text-lg font-normal sm:w-auto w-full"
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;

import React from "react";

const SecondaryBtn = ({ children, onClick, ...restProps }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-white lg:px-10 sm:px-9 px-3 lg:py-4 py-3 hover:bg-white hover:text-black smooth lg:text-xl text-lg font-normal sm:w-auto w-full rounded-lg sm:whitespace-nowrap"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;

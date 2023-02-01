import React from "react";

const PrimaryBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn lg:text-xl text-lg font-semibold shadow-md shadow-black hover:shadow-lg"
    ></button>
  );
};

export default PrimaryBtn;

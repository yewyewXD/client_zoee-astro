import React from "react";

const PrimaryBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn lg:text-xl text-lg font-semibold"
    ></button>
  );
};

export default PrimaryBtn;

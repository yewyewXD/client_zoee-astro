import Image from "next/image";
import React from "react";
import PaymentBtn from "../buttons/PaymentBtn";

const PaymentModal = ({ onClose, price, image, title }) => {
  return (
    <div
      className="fixed h-screen w-screen bg-opacity-40 bg-black flex justify-center items-center"
      style={{ zIndex: "99999" }}
    >
      <div
        className="max-w-lg p-8 w-11/12 overflow-y-auto bg-white rounded-lg shadow-xl shadow-gray-800 flex flex-col justify-between relative"
        style={{ maxHeight: "80vh" }}
      >
        <span
          className="cursor-pointer absolute top-4 right-4"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>

        {/* Content */}
        <div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  className="rounded-md"
                  src={image}
                  alt=""
                  height={70}
                  width={70}
                />

                <div className="ml-4">
                  <div className="font-semibold">{title}</div>
                  <div className="text-gray-500 font-semibold">
                    22 February 2023 (04.30am PST)
                  </div>
                </div>
              </div>

              <div className="font-semibold">{price}.00 USD</div>
            </div>

            <div className="w-full border-b my-6 border-gray-500"></div>

            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span className="text-2xl">150.00 USD</span>
            </div>
          </div>

          <div className="w-10/12 mx-auto mt-10">
            <PaymentBtn amount={price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

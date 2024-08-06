import React from "react";
import { FaSortAmountUpAlt } from "react-icons/fa";

const ClearUp = ({ status, clearData, scrollUp }) => {
  return (
    <div
      className={`fixed left-0 right-0 flex justify-between py-8 px-6 transition-all duration-300 opacity-0 ${
        !status && "-bottom-full opacity-100"
      } ${status && "bottom-0 opacity-100"}`}
    >
      <button
        onClick={clearData}
        className="bg-red-600 p-3 px-5 text-white rounded-md leading-5 hover:bg-red-500 active:bg-red-600 duration-200"
      >
        Clear All
      </button>
      <button
        onClick={scrollUp}
        className="p-4 bg-white rounded-full hover:bg-slate-800 hover:text-white duration-100"
      >
        <FaSortAmountUpAlt />
      </button>
    </div>
  );
};

export default ClearUp;

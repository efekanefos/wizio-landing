import React, { useState } from "react";
import ReactSlider from "react-slider";

function NumberOfBedrooms() {
  const minVal = 1;
  const maxVal = 5;
  return (
    <div className="rangeSlider absolute left-0 top-[70px] shadow-2xl shadow-[rgba(0,0,0,0.25)] w-fit min-w-80 bg-white p-5 py-5 pb-10 rounded-3xl max-md:left-28">
      <div className="w-full flex justify-between mb-6">
        <span
          className="relative flex flex-col text-gray-400 text-xs font-semibold ml-1.5
      after:bg-gray-300 after:w-px after:h-2.5 after:absolute after:top-5 after:left-0.5
      before:bg-gray-300 before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-0.5"
        >
          1
        </span>
        <span
          className="relative flex flex-col text-black text-xs font-semibold
    after:bg-black after:w-px after:h-2.5 after:absolute after:top-5 after:left-1
    before:bg-black before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-1"
        >
          2
        </span>
        <span
          className="relative flex flex-col text-gray-400 text-xs font-semibold
    after:bg-gray-300 after:w-px after:h-2.5 after:absolute after:top-5 after:left-0.5
    before:bg-gray-300 before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-0.5"
        >
          3
        </span>
        <span
          className="relative flex flex-col text-black text-xs font-semibold
    after:bg-black after:w-px after:h-2.5 after:absolute after:top-5 after:left-1
    before:bg-black before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-1"
        >
          4
        </span>
        <span
          className="relative flex flex-col text-gray-400 text-xs font-semibold mr-1.5
    after:bg-gray-300 after:w-px after:h-2.5 after:absolute after:top-5 after:left-0.5
    before:bg-gray-300 before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-0.5"
        >
          5
        </span>
      </div>
      <ReactSlider className="horizontal-slider bedroomSlider" min={minVal} max={maxVal} />
    </div>
  );
}

export default NumberOfBedrooms;

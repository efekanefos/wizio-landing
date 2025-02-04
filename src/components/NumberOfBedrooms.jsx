import React from "react";

function NumberOfBedrooms() {
  return (
    <div className="rangeSlider absolute left-[700px] bottom-[-75px] shadow-2xl shadow-[rgba(0,0,0,0.25)] w-fit bg-white p-5 py-5 pb-6 rounded-3xl">
      <div className="w-full flex justify-between -mb-1 px-0">
        <span
          className="relative flex flex-col text-middleMenuTextBlack text-[9px] ml-2
      after:bg-gray-300 after:w-px after:h-1 after:absolute after:top-4 after:left-1
      before:bg-gray-300 before:w-px before:h-1 before:absolute before:-bottom-5 before:left-1"
        >
          1
        </span>
        <span
          className="relative flex flex-col text-gray-300 text-[9px]
    after:bg-gray-300 after:w-px after:h-1 after:absolute after:top-4 after:left-1
    before:bg-gray-300 before:w-px before:h-1 before:absolute before:-bottom-5 before:left-1"
        >
          2
        </span>
        <span
          className="relative flex flex-col text-gray-300 text-[9px]
    after:bg-gray-300 after:w-px after:h-1 after:absolute after:top-4 after:left-1
    before:bg-gray-300 before:w-px before:h-1 before:absolute before:-bottom-5 before:left-1"
        >
          3
        </span>
        <span
          className="relative flex flex-col text-gray-300 text-[9px]
    after:bg-gray-300 after:w-px after:h-1 after:absolute after:top-4 after:left-1
    before:bg-gray-300 before:w-px before:h-1 before:absolute before:-bottom-5 before:left-1"
        >
          4
        </span>
        <span
          className="relative flex flex-col text-gray-300 text-[9px]
    after:bg-gray-300 after:w-px after:h-1 after:absolute after:top-4 after:left-1
    before:bg-gray-300 before:w-px before:h-1 before:absolute before:-bottom-5 before:left-1"
        >
          5
        </span>
      </div>
      <input
        type="range"
        min={1}
        max={5}
        className="appearance-none bg-transparent w-full border border-gray-200 min-w-60 rounded-full h-1.5
    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-middleMenuTextBlack [&::-webkit-slider-thumb]:border
     [&::-webkit-slider-thumb]:border-gray-950 relative z-10"
      />
    </div>
  );
}

export default NumberOfBedrooms;

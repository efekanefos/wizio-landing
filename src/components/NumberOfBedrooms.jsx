import React, { useState } from "react";
import ReactSlider from "react-slider";

function NumberOfBedrooms() {
  const minVal = 1;
  const maxVal = 5;
  const [values, setValues] = useState([minVal, maxVal]);
  return (
    <div className="rangeSlider absolute left-[720px] top-[150px] shadow-2xl shadow-[rgba(0,0,0,0.25)] w-fit min-w-80 bg-white p-5 py-5 pb-10 rounded-3xl">
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
      <ReactSlider className="horizontal-slider bedroomSlider" onChange={setValues} value={values} min={minVal} max={maxVal} />
    </div>
  );
}

export default NumberOfBedrooms;

/* 
<input
        type="range"
        min={1}
        max={5}
        className="appearance-none bg-transparent w-full border border-gray-200 min-w-60 rounded-full h-1.5
    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-middleMenuTextBlack [&::-webkit-slider-thumb]:border
     [&::-webkit-slider-thumb]:border-gray-950 relative z-10"
      />
*/

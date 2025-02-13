import React, { useState } from "react";
import ReactSlider from "react-slider";

function PriceRange() {
  const minVal = 5000;
  const maxVal = 135555000;
  const [values, setValues] = useState([minVal, maxVal]);
  const formatCurrency = (value) => new Intl.NumberFormat("de-DE").format(value);
  return (
    <div className="rangeSlider absolute right-[550px] top-[150px] shadow-2xl shadow-[rgba(0,0,0,0.25)] w-fit bg-white rounded-3xl">
      <div className="p-6 pb-5">
        <ReactSlider className="horizontal-slider" onChange={setValues} value={values} min={minVal} max={maxVal} />
      </div>
      {/* Min Max Values */}
      <div className="px-6 pb-6 flex justify-between gap-5">
        <div className="w-fit flex flex-col justify-center items-center gap-1">
          <p className="text-sm text-gray-400 font-light">Min</p>
          <div className="w-28 h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
            <p className="text-sm text-middleMenuTextBlack font-medium">€{formatCurrency(values[0])}</p>
          </div>
        </div>

        <div className="w-fit flex flex-col justify-center items-center gap-1">
          <p className="text-sm text-gray-400 font-light">Max</p>
          <div className="w-28 h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
            <p className="text-sm text-middleMenuTextBlack font-medium">€{formatCurrency(values[1])}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;

/* 
<input
          type="range"
          className="appearance-none bg-transparent w-full border border-[#DDDDDD] min-w-[228px] rounded-full h-1.5
    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-middleMenuTextBlack [&::-webkit-slider-thumb]:border
     [&::-webkit-slider-thumb]:border-gray-950 relative z-10"
        />
*/

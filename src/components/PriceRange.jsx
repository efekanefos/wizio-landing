import React from "react";

function PriceRange() {
  return (
    <div className="rangeSlider absolute left-[770px] bottom-[-195px] shadow-2xl shadow-[rgba(0,0,0,0.25)] w-fit bg-white rounded-3xl">
      <div className="pt-9 pb-9 pl-7 pr-8 border-b border-gray-300">
        <input
          type="range"
          className="appearance-none bg-transparent w-full border border-[#DDDDDD] min-w-[228px] rounded-full h-1.5
    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
     [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-middleMenuTextBlack [&::-webkit-slider-thumb]:border
     [&::-webkit-slider-thumb]:border-gray-950 relative z-10"
        />
      </div>
      {/* Min Max Values */}
      <div className="px-7 pt-4 pb-5 flex justify-between gap-5">
        <div className="w-fit flex flex-col justify-center items-center gap-1">
          <p className="text-[10px] text-gray-400">Minimum</p>
          <div className="w-28 h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
            <p className="text-xs text-middleMenuTextBlack font-medium">$5,000</p>
          </div>
        </div>

        <div className="w-fit flex flex-col justify-center items-center gap-1">
          <p className="text-[10px] text-gray-400">Maximum</p>
          <div className="w-28 h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
            <p className="text-xs text-middleMenuTextBlack font-medium">$135,555,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;

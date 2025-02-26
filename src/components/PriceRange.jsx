import React, { useState } from "react";
import ReactSlider from "react-slider";

function PriceRange() {
  const minVal = 5000;
  const maxVal = 135555000;
  const formatCurrency = (value) => new Intl.NumberFormat("de-DE").format(value);
  return (
    <div className="absolute left-0 top-[70px] shadow-2xl shadow-[rgba(0,0,0,0.25)] w-fit bg-white rounded-3xl max-md:left-56">
      <div className="p-6 pb-5">
        <ReactSlider className="horizontal-slider" />
      </div>
      {/* Min Max Values */}
      <div className="px-6 pb-6 flex justify-between gap-5">
        <div className="w-fit flex flex-col justify-center items-center gap-1">
          <p className="text-sm text-gray-400 font-light">Min</p>
          <div className="w-28 h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
            <p className="text-sm text-middleMenuTextBlack font-medium">€{formatCurrency(minVal)}</p>
          </div>
        </div>

        <div className="w-fit flex flex-col justify-center items-center gap-1">
          <p className="text-sm text-gray-400 font-light">Max</p>
          <div className="w-28 h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
            <p className="text-sm text-middleMenuTextBlack font-medium">€{formatCurrency(maxVal)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;

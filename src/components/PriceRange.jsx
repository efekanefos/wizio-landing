import React, { useState } from "react";
import ReactSlider from "react-slider";

function PriceRange() {
  const minVal = 5000;
  const maxVal = 135555000;
  const [values, setValues] = useState([minVal, maxVal]);
  const formatCurrency = (value) => new Intl.NumberFormat("de-DE").format(value);
  return (
    <div className="shadow-2xl w-96 min-h-36 flex justify-center items-center shadow-[rgba(0,0,0,0.25)] bg-white rounded-3xl max-md:left-56">
      <div className="flex flex-col gap-5 p-6 pt-7 w-full">
        <ReactSlider value={values} min={minVal} max={maxVal} className="horizontal-slider" />

        {/* Min Max Values */}
        <div className=" flex justify-between gap-5">
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <p className="text-sm text-gray-400 font-light">Min</p>
            <div className="w-full h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
              <p className="text-sm text-middleMenuTextBlack font-medium">€{formatCurrency(minVal)}</p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-1">
            <p className="text-sm text-gray-400 font-light">Max</p>
            <div className="w-full h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
              <p className="text-sm text-middleMenuTextBlack font-medium">€{formatCurrency(maxVal)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceRange;

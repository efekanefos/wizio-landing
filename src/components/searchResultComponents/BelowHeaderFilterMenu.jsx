import React from "react";
import FilterCloseIcon from "../newIcons/FilterCloseIcon";

const BelowHeaderFilterMenu = () => {
  return (
    <div className="w-full py-3 bg-white flex justify-center items-center z-10 border-b border-gray-200">
      <div className="flex justify-center items-center gap-3">
        {/* Limassol Button */}
        <div className="py-1 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200">
          <p className="text-xs text-gray-400 font-light">Limassol</p>
          <div>
            <FilterCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>

        {/* 3 Bedrooms Button */}
        <div className="py-1 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200">
          <p className="text-xs text-gray-400 font-light">3 Bedrooms</p>
          <div>
            <FilterCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>

        {/* €350,000-€450,000 Button */}
        <div className="py-1 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200">
          <p className="text-xs text-gray-400 font-light">€350,000-€450,000</p>
          <div>
            <FilterCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>

        {/* Bedrooms 1-3 Button */}
        <div className="py-1 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200">
          <p className="text-xs text-gray-400 font-light">Bedrooms 1-3</p>
          <div>
            <FilterCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>

        {/* Villa, Townhouse Button */}
        <div className="py-1 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200">
          <p className="text-xs text-gray-400 font-light">Villa, Townhouse</p>
          <div>
            <FilterCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHeaderFilterMenu;

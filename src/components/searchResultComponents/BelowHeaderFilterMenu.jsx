import React from "react";
import MobileMenuCloseIcon from "../newIcons/MobileMenuCloseIcon";

const BelowHeaderFilterMenu = () => {
  return (
    <div className="w-full py-3 bg-white flex justify-center items-center z-10 border-b border-t border-gray-200">
      <div className="flex justify-center items-center gap-3 max-md:justify-start max-md:overflow-x-auto max-md:max-w-[768px] ">
        {/* Limassol Button */}
        <div className="py-2 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200 whitespace-nowrap ">
          <p className="text-xs text-gray-400 font-light">Limassol</p>
          <div>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>

        {/* 3 Bedrooms Button */}
        <div className="py-2 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200 whitespace-nowrap">
          <p className="text-xs text-gray-400 font-light">3 Bedrooms</p>
          <div>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>

        {/* €350,000-€450,000 Button */}
        <div className="py-2 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200 whitespace-nowrap">
          <p className="text-xs text-gray-400 font-light">€350,000-€450,000</p>
          <div>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>

        {/* Bedrooms 1-3 Button */}
        <div className="py-2 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200 whitespace-nowrap">
          <p className="text-xs text-gray-400 font-light">Bedrooms 1-3</p>
          <div>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>

        {/* Villa, Townhouse Button */}
        <div className="py-2 px-3 flex justify-center items-center gap-1.5 rounded-3xl bg-gray-200 whitespace-nowrap">
          <p className="text-xs text-gray-400 font-light">Villa, Townhouse</p>
          <div>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHeaderFilterMenu;

import React from "react";
import project360 from "../svg/project_360_search.png";
import locationCardImage from "../../assets/images/newIcons/locationCardImage.png";
import CloseIcon from "../newIcons/CloseIcon";
const UnitCompare = () => {
  return (
    <div className="relative">
      {/* Compare Container */}
      <div
        className="bg-white h-40 w-full absolute bottom-0 z-50 py-10 flex justify-between items-center gap-12 
      px-6 max-xl:px-5 max-md:px-4 max-md:h-96 max-md:flex-col max-md:py-6 max-md:justify-between max-sm:h-[536px] max-sm:py-3 max-sm:justify-end"
      >
        {/* Compare Cards */}
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="pb-1 w-full flex justify-between items-center max-md:flex-wrap gap-6 overflow-x-auto
        max-md:gap-12 max-md:justify-center max-sm:gap-6"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex justify-start items-start gap-3 min-w-64 w-fit max-sm:w-full">
              <img className="w-20 h-20 object-cover rounded-xl" src={locationCardImage} alt="locationCardImage" />
              <div className="w-full">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-semibold">Unit A15</h4>
                  <button className="w-4 h-4 border border-black flex justify-center items-center rounded-full">
                    <CloseIcon className={"w-2 h-2 fill-black translate-y-[0.5px] translate-x-[0.25px]"} />
                  </button>
                </div>
                <p className="text-xs mb-1">Limassol Marina</p>
                <div className="flex gap-2 mb-1">
                  <p className="text-xs max-sm:w-full">2 Bedrooms</p>
                  <p className="text-xs max-sm:w-full">235 sqm</p>
                </div>
                <p className="text-xs">€170,555,000+VAT</p>
              </div>
            </div>
          ))}
          {/* Card #1 */}
        </div>
        {/* Buttons */}
        <div className="flex flex-col gap-5 w-fit max-md:flex-row">
          <button className="bg-black w-60 rounded-full py-3 max-sm:w-44">
            <p className="text-sm font-light text-white text-center">Compare</p>
          </button>
          <button className="bg-gray-200 w-60 rounded-full py-3 max-sm:w-44">
            <p className="text-sm font-light text-black text-center">Clear</p>
          </button>
        </div>
      </div>
      {/* Background Image */}
      <img className="w-full h-screen object-cover" src={project360} alt="localBackground" />
    </div>
  );
};

export default UnitCompare;

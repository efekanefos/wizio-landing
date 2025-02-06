import React from "react";

function OldNavbar() {
  return (
    <div className="border border-gray-300 flex justify-between items-center rounded-full shadow-md py-1 pl-10 pr-1 max-w-[900px] w-full">
      <div className="flex justify-center items-center gap-5 ">
        {/* Location Button */}
        <div className="flex justify-start items-center gap-3 border-r border-gray-300 pr-5 h-full min-h-12">
          <img src={locationIcon} alt="location" />
          <div className="flex justify-start items-center">
            <a className="text-xs font-inter text-middleMenuTextBlack mr-9" href="/">
              Location
            </a>
            <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
          </div>
        </div>
        {/* Number of Bedrooms Button */}
        <div className="flex justify-start items-center gap-3 border-r border-gray-300 pr-5 h-full min-h-12">
          <img src={bedroomIcon} alt="bedroomIcon" />
          <div className="flex justify-start items-center">
            <a className="text-xs font-inter text-middleMenuTextBlack mr-9" href="/">
              Number Of Bedrooms
            </a>
            <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
          </div>
        </div>
        {/* Price Range Button */}
        <div className="flex justify-start items-center gap-3 border-r border-gray-300 pr-5 h-full min-h-12">
          <img src={priceRangeIcon} alt="priceRangeIcon" />
          <div className="flex justify-start items-center">
            <a className="text-xs font-inter text-middleMenuTextBlack mr-9" href="/">
              Price Range
            </a>
            <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
          </div>
        </div>
        {/* Property Details Button */}
        <div className="flex justify-start items-center gap-3 h-full min-h-12">
          <img src={priceRangeIcon} alt="priceRangeIcon" />
          <div className="flex justify-start items-center">
            <p className="text-xs font-inter text-middleMenuTextBlack mr-9">Property Details</p>
            <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
          </div>
        </div>
      </div>

      <div className="bg-buttonOrange p-4 rounded-full">
        <img src={searchIcon} alt="search" />
      </div>
    </div>
  );
}

export default OldNavbar;

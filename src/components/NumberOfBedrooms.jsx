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

/* 
import logo from "../assets/images/header/logo.svg";
import homeIcon from "../assets/images/header/home_icon.svg";
import locationIcon from "../assets/images/header/location_icon.svg";
import bedroomIcon from "../assets/images/header/bedroom_number_icon.svg";
import priceRangeIcon from "../assets/images/header/price_range_icon.svg";
import dropDownArrowIcon from "../assets/images/header/dropdown_arrow_icon.svg";
import searchIcon from "../assets/images/header/search_icon.svg";
import callIcon from "../assets/images/header/call_icon.svg";
import globalIcon from "../assets/images/header/global.svg";
import lightModeIcon from "../assets/images/header/light_mode_icon.svg";
import blackOctagonProfileIcon from "../assets/images/header/black_octagon_profile_icon.svg";
import blackSearchIcon from "../assets/images/header/black_search_icon.svg";
import lowOpacityLocalAmenitiesIcon from "../assets/images/header/low_opacity_local_amenities_icon.svg";
import blackRightArrow from "../assets/images/loggedInWindows/black_right_arrow.svg";
import grayLocationMap from "../assets/images/homepage/gray_location_map.svg";
*/

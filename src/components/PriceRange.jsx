import React from "react";
/* Images */
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

function PriceRange() {
  return (
    <div className="overflow-y-hidden max-h-screen">
      <nav className="flex justify-between items-start mt-0 pt-3 pb-6 pl-12 pr-14 z-10 relative bg-white font-inter border-b border-gray-300">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-8">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-grayIconBg p-3 rounded-full w-fit">
            <img src={homeIcon} alt="homeIcon" />
          </div>
        </div>
        {/* Middle Two Row Part */}
        <div className="flex flex-col gap-7 mt-4">
          <div className="flex justify-center items-center gap-11">
            {/* Discover Projects */}
            <div className="flex justify-start items-center gap-3">
              <div className="w-5">
                <img className="w-full" src={blackSearchIcon} alt="blackSearchIcon" />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-xs relative before:bg-black before:w-[26px] before:absolute before:left-[50%] before:bottom-[-5px] before:h-px before:translate-x-[-50%]">Discover Projects</p>
            </div>
            {/* Local Amenities */}
            <div className="flex justify-start items-center gap-3">
              <div className="w-5">
                <img className="w-full" src={lowOpacityLocalAmenitiesIcon} alt="lowOpacityLocalAmenitiesIcon" />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-xs text-opacity-30">Local Amenities</p>
            </div>
          </div>
          {/* Menu Side */}
          <div className="border border-gray-300 flex justify-between items-center rounded-full shadow-xl pr-1.5 pl-8 pt-1 pb-1.5 w-fit relative">
            <div className="flex justify-center items-center">
              {/* Location Button */}
              <div className="flex justify-start items-center gap-11 border-r border-gray-300 pr-5 h-full min-h-12">
                <div className="flex justify-start items-center gap-2">
                  <div className="relative">
                    <img src={locationIcon} alt="location" />
                    <span className="flex justify-center items-center absolute -top-1.5 -right-1.5 bg-[#FF0004] border rounded-full border-gray-300 p-1 w-4 h-4">
                      <p className="text-white font-medium text-[10px]">2</p>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <a className="text-xs font-inter text-middleMenuTextBlack leading-tight" href="/">
                      Location
                    </a>
                    <p className="text-middleMenuTextBlack text-[8px] text-left">Ava Plaza, Coral Vis..</p>
                  </div>
                </div>
                <img src={blackRightArrow} alt="blackRightArrow" />
              </div>

              {/* Number of Bedrooms Button */}
              <div className="flex justify-start items-center gap-9 pl-7 pr-5 h-full min-h-12">
                <div className="flex justify-start items-center gap-2">
                  <div className="relative">
                    <img src={bedroomIcon} alt="bedroomIcon" />
                    <span className="flex justify-center items-center absolute -top-1.5 -right-1.5 bg-[#FF0004] border rounded-full border-gray-300 p-1 w-4 h-4">
                      <p className="text-white font-medium text-[10px]">2</p>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <a className="text-xs font-inter text-middleMenuTextBlack leading-tight" href="/">
                      Number Of Bedrooms
                    </a>
                    <p className="text-middleMenuTextBlack text-[8px] text-left">Ava Plaza, Coral Vista..</p>
                  </div>
                </div>
                <img src={blackRightArrow} alt="blackRightArrow" />
              </div>

              {/* Price Range Button */}
              <div className="flex justify-start items-center gap-9 pl-7 pr-5 bg-middleMenuTextBlack bg-opacity-5 rounded-3xl border-gray-300  h-full min-h-14">
                <div className="flex justify-start items-center gap-3">
                  <img src={priceRangeIcon} alt="priceRangeIcon" />
                  <div className="flex flex-col">
                    <a className="text-xs font-inter text-middleMenuTextBlack leading-tight" href="/">
                      Price Range
                    </a>
                    <p className="text-middleMenuTextBlack text-[8px] text-left">$5,000 , $135,555,00..</p>
                  </div>
                </div>
                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>

              {/* Property Details Button */}
              <div className="flex justify-start items-center gap-9 pl-7 pr-8 h-full min-h-12">
                <div className="flex justify-start items-center gap-3">
                  <img src={priceRangeIcon} alt="priceRangeIcon" />
                  <a className="text-xs font-inter w-full text-middleMenuTextBlack" href="/">
                    Property Details
                  </a>
                </div>
                <img src={blackRightArrow} alt="blackRightArrow" />
              </div>
            </div>

            <div className="flex justify-start items-center gap-2 bg-buttonOrange p-4 rounded-full">
              <img src={searchIcon} alt="search" />
              <p className="text-white font-semibold text-xs">Search</p>
            </div>
            {/* Slider */}
            <div className="rangeSlider absolute left-[420px] bottom-[-195px] shadow-2xl shadow-[rgba(0,0,0,0.25)] w-fit bg-white rounded-3xl">
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
          </div>
        </div>

        {/* Profile Side */}
        <div className="flex justify-start items-center gap-3">
          <div className="w-full flex justify-start items-center gap-5">
            <div className="w-5">
              <img className="w-full" src={callIcon} alt="callIcon" />
            </div>
            <div className="w-5">
              <img className="w-full" src={globalIcon} alt="globalIcon" />
            </div>
            <div className="w-5">
              <img className="w-full" src={lightModeIcon} alt="lightModeIcon" />
            </div>
          </div>
          <div className="flex justify-start items-center gap-3  w-full h-full p-3 rounded-full">
            <div className="w-full flex justify-between items-center">
              <div className="flex w-full gap-3">
                <img className="w-full max-w-6" src={blackOctagonProfileIcon} alt="blackOctagonProfileIcon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <img className="z-0 -mt-20 w-full h-screen object-cover" src={grayLocationMap} alt="grayLocationMap" />
    </div>
  );
}

export default PriceRange;

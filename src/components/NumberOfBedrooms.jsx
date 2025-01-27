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

function NumberOfBedrooms() {
  return (
    <div className="overflow-y-hidden max-h-screen">
      <nav className="flex justify-between items-start mt-0 py-6 px-9 z-10 relative bg-white font-inter border-b border-[#D2D3D7]">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-5">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-grayIconBg p-3 rounded-full w-fit">
            <img src={homeIcon} alt="homeIcon" />
          </div>
        </div>
        {/* Middle Two Row Part */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-center items-center gap-5">
            {/* Discover Projects */}
            <div className="flex justify-start items-center gap-2">
              <div className="w-[20px]">
                <img className="w-full" src={blackSearchIcon} alt="blackSearchIcon" />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-[12px] relative before:bg-black before:w-[26px] before:absolute before:left-[50%] before:bottom-[-5px] before:h-[1px] before:translate-x-[-50%] ">Discover Projects</p>
            </div>
            {/* Local Amenities */}
            <div className="flex justify-start items-center gap-2">
              <div className="w-[20px]">
                <img className="w-full" src={lowOpacityLocalAmenitiesIcon} alt="lowOpacityLocalAmenitiesIcon" />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-[12px] text-opacity-30">Local Amenities</p>
            </div>
          </div>
          {/* Menu Side */}
          <div className="border border-[#DEDEDE] flex justify-between items-center rounded-full shadow-xl py-1 px-1 max-w-[900px] w-full relative">
            <div className="flex justify-center items-center gap-5 ">
              {/* Location Button */}
              <div className="flex justify-start items-center p-3 px-5 pr-0 gap-2 h-full min-h-[53px] w-fit rounded-[27px]">
                {/* Location Icon */}
                <div className="relative">
                  <img className="min-w-[18px]" src={locationIcon} alt="location" />
                  <span className="flex justify-center items-center absolute top-[-5px] right-[-5px] bg-[#FF0004] border rounded-full border-[#F8F8F8] p-1 w-[15px] h-[15px]">
                    <p className="text-white font-medium text-[10px]">2</p>
                  </span>
                </div>

                <div className="flex justify-start items-center gap-2">
                  <div className="flex flex-col mx-1">
                    <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                      Location
                    </a>
                    <p className="text-middleMenuTextBlack text-[8px] text-left">Ava Plaza, Coral Vis..</p>
                  </div>

                  <img src={blackRightArrow} alt="blackRightArrow" />
                </div>
              </div>
              {/* Number of Bedrooms Button */}
              <div className="flex justify-start items-center bg-middleMenuTextBlack bg-opacity-5 gap-3 border-r py-3 px-5  rounded-full h-full min-h-[47px]">
                <div className="relative">
                  <img src={bedroomIcon} alt="bedroomIcon" />
                  <span className="flex justify-center items-center absolute top-[-5px] right-[-5px] bg-[#FF0004] border rounded-full border-[#F8F8F8] p-1 w-[15px] h-[15px]">
                    <p className="text-white font-medium text-[10px]">2</p>
                  </span>
                </div>
                <div className="flex justify-start items-center gap-6">
                  <div className="flex flex-col mx-1">
                    <a className="text-[12px] font-inter text-middleMenuTextBlack" href="/">
                      Number Of Bedrooms
                    </a>
                    <p className="text-middleMenuTextBlack text-[8px] text-left">Ava Plaza, Coral Vista..</p>
                  </div>
                  <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
                </div>
              </div>
              {/* Price Range Button */}
              <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
                <img src={priceRangeIcon} alt="priceRangeIcon" />
                <div className="flex justify-start items-center gap-7">
                  <a className="text-[12px] font-inter text-middleMenuTextBlack " href="/">
                    Price Range
                  </a>
                  <img src={blackRightArrow} alt="blackRightArrow" />
                </div>
              </div>
              {/* Property Details Button */}
              <div className="flex justify-start items-center gap-3 h-full min-h-[47px]">
                <img src={priceRangeIcon} alt="priceRangeIcon" />
                <div className="flex justify-start items-center gap-7">
                  <a className="text-[12px] font-inter text-middleMenuTextBlack" href="/">
                    Property Details
                  </a>
                  <img src={blackRightArrow} alt="blackRightArrow" />
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center gap-2 bg-buttonOrange p-4 rounded-full ml-5">
              <img src={searchIcon} alt="search" />
              <p className="text-white font-semibold text-[12px]">Search</p>
            </div>
            {/* Slider */}
            <div className="rangeSlider absolute left-[162px] shadow-2xl shadow-[rgba(0,0,0,0.25)] bottom-[-90px] w-fit bg-white p-5 py-5 pb-6 rounded-[25px]">
              <div className="w-full flex justify-between mb-[-3px] px-[0px]">
                <span
                  className="relative flex flex-col gap-0 text-middleMenuTextBlack text-[9px] ml-2
                after:bg-[#C6C6C6] after:w-[1px] after:h-1 after:absolute after:top-[17px] after:left-[5px]
                before:bg-[#C6C6C6] before:w-[1px] before:h-1 before:absolute before:bottom-[-20px] before:left-[5px]"
                >
                  1
                </span>
                <span
                  className="relative flex flex-col gap-0 text-[#C6C6C6] text-[9px]
              after:bg-[#C6C6C6] after:w-[1px] after:h-1 after:absolute after:top-[17px] after:left-[2.5px]
              before:bg-[#C6C6C6] before:w-[1px] before:h-1 before:absolute before:bottom-[-20px] before:left-[2.5px]"
                >
                  2
                </span>
                <span
                  className="relative flex flex-col gap-0 text-[#C6C6C6] text-[9px]
              after:bg-[#C6C6C6] after:w-[1px] after:h-1 after:absolute after:top-[17px] after:left-[2.5px]
              before:bg-[#C6C6C6] before:w-[1px] before:h-1 before:absolute before:bottom-[-20px] before:left-[2.5px]"
                >
                  3
                </span>
                <span
                  className="relative flex flex-col gap-0 text-[#C6C6C6] text-[9px]
              after:bg-[#C6C6C6] after:w-[1px] after:h-1 after:absolute after:top-[17px] after:left-[2.5px]
              before:bg-[#C6C6C6] before:w-[1px] before:h-1 before:absolute before:bottom-[-20px] before:left-[2.5px]"
                >
                  4
                </span>
                <span
                  className="relative flex flex-col gap-0 text-[#C6C6C6] text-[9px]
              after:bg-[#C6C6C6] after:w-[1px] after:h-1 after:absolute after:top-[17px] after:left-[2.5px]
              before:bg-[#C6C6C6] before:w-[1px] before:h-1 before:absolute before:bottom-[-20px] before:left-[2.5px]"
                >
                  5
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                className="appearance-none bg-transparent w-full border border-[#DDDDDD] min-w-[230px] rounded-full h-[6px]
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[19px] [&::-webkit-slider-thumb]:w-[19px]
               [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-middleMenuTextBlack [&::-webkit-slider-thumb]:border
               [&::-webkit-slider-thumb]:border-gray-950 
               
               relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Profile Side */}
        <div className="flex justify-start items-center gap-3">
          <div className="w-full flex justify-start items-center gap-5">
            <div className="w-[21px]">
              <img className="w-full" src={callIcon} alt="callIcon" />
            </div>
            <div className="w-[21px]">
              <img className="w-full" src={globalIcon} alt="globalIcon" />
            </div>
            <div className="w-[21px]">
              <img className="w-full" src={lightModeIcon} alt="lightModeIcon" />
            </div>
          </div>
          <div className="flex justify-start items-center gap-3  w-full h-full p-3 rounded-full">
            <div className="w-full flex justify-between items-center">
              <div className="flex w-full gap-3">
                <img className="w-full max-w-[22px]" src={blackOctagonProfileIcon} alt="blackOctagonProfileIcon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={grayLocationMap} alt="grayLocationMap" />
    </div>
  );
}

export default NumberOfBedrooms;

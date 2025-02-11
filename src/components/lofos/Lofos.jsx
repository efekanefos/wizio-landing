import React, { useState } from "react";
/* SVG Components */
import LogoIcon from "../icons/LogoIcon";
import HomeIcon from "../icons/HomeIcon";
import LocationIcon from "../icons/LocationIcon";
import BedroomNumbersIcon from "../icons/BedroomNumbersIcon";
import PriceRangeIcon from "../icons/PriceRangeIcon";
import SearchIcon from "../icons/SearchIcon";
import CallIcon from "../icons/CallIcon";
import GlobalIcon from "../icons/GlobalIcon";
import LightModeIcon from "../icons/LightModeIcon";
import OctagonProfileIcon from "../icons/OctagonProfileIcon";
/* Images */
import whiteDropDownArrowIcon from "../../assets/images/header/white_dropdown_arrow_icon.svg";
import searchIcon from "../../assets/images/header/search_icon.svg";
import CompareCards from "./CompareCards";

function Lofos() {
  return (
    <div className="overflow-y-hidden max-h-screen font-inter">
      <nav className="flex justify-between items-center mt-0 py-3 px-7 z-10 relative bg-white font-inter border-b border-gray-300">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-5 min-w-80">
          <div>
            <LogoIcon className={"w-20 h-7 fill-[#F78E2F]"} />
          </div>
          <div className="bg-grayIconBg p-3 rounded-full w-fit">
            <HomeIcon className={`w-5 h-5 fill-current`} />
          </div>
        </div>
        {/* Middle Two Row Part */}
        <div className={`flex flex-col gap-7`}>
          {/* Menu Side */}

          <div className={`border border-gray-200 flex justify-between items-center rounded-full shadow-xl py-2 relative pl-1 pr-2 w-fit`}>
            <div className="flex justify-center items-center">
              {/* Location Button */}
              <div className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 pl-6 py-1 h-full min-h-6 cursor-pointer`}>
                <div className="relative">
                  <LocationIcon className={"w-5 h-5 fill-white"} />
                </div>
                <div className="flex justify-start items-center">
                  <div className="flex flex-col">
                    <p className="text-xs text-middleMenuTextBlack leading-tight">Location</p>
                  </div>
                </div>
              </div>
              {/* Number of Bedrooms Button */}

              <div className="flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6 cursor-pointer">
                <BedroomNumbersIcon className={"w-5 h-5 fill-white"} />
                <div className="flex justify-start items-center">
                  <p className="text-xs text-middleMenuTextBlack">Number Of Bedrooms</p>
                </div>
              </div>

              {/* Price Range Button */}
              <div className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6 cursor-pointer`}>
                <PriceRangeIcon className={"w-5 h-5 fill-white"} />
                <div className="flex justify-start items-center">
                  <p className="text-xs font-inter text-middleMenuTextBlack">Price Range</p>
                </div>
              </div>

              {/* Property Details Button */}
              <div className={`flex justify-start items-center gap-2 px-4 h-full min-h-6 cursor-pointer`}>
                <div className="relative">
                  <PriceRangeIcon className={"w-5 h-5 fill-white"} />
                </div>
                <div className="flex justify-start items-center">
                  <div className="flex flex-col">
                    <p className="text-xs font-inter text-middleMenuTextBlack leading-tight">More Details</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}

            <div className={`bg-buttonOrange p-3 rounded-full cursor-pointer`}>
              <img className="w-4" src={searchIcon} alt="search" />
            </div>
          </div>
        </div>
        {/* Profile Side */}
        <div className="flex justify-start items-center gap-6 min-w-80">
          <div className="w-full flex justify-end items-center gap-6">
            <div className="w-full max-w-5">
              <CallIcon className={"w-5 h-5 fill-white"} />
            </div>
            <div className="w-full max-w-5">
              <GlobalIcon className={"w-5 h-5 fill-white"} />
            </div>
            <div className="w-full max-w-5">
              <LightModeIcon className={"w-5 h-5 fill-white"} />
            </div>
          </div>

          <div className="flex justify-start items-center gap-3 bg-middleMenuTextBlack min-h-16 min-w-[210px] w-full h-full p-3 rounded-full cursor-pointer">
            <div className="w-full flex justify-between items-center">
              <div className="flex w-full gap-3">
                <OctagonProfileIcon className={"w-full max-w-6 ml-2 fill-current"} />
                <div className="border-l border-gray-300 border-opacity-20 pl-4">
                  <p className="text-base text-white font-medium">B.Douglas</p>
                  <p className="text-xs text-white font-regular">Customer</p>
                </div>
              </div>
              <img src={whiteDropDownArrowIcon} alt="dropDownArrowIcon" />
              {/* <DropdownArrowIcon className={"w-5 h-5 fill-white"} /> */}
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-200 h-screen">
        <CompareCards />
      </div>
    </div>
  );
}

export default Lofos;

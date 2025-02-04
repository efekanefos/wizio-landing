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
import grayLocationMap from "../assets/images/homepage/gray_location_map.svg";

function Homepage() {
  return (
    <div className="overflow-y-hidden max-h-screen">
      <nav className="flex justify-between items-center mt-0 pt-3 pb-4 pl-12 pr-14 z-10 relative bg-white font-inter">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-8">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-grayIconBg p-4 rounded-full w-fit">
            <img src={homeIcon} alt="homeIcon" />
          </div>
        </div>
        {/* Menu Side */}
        <div className="border border-[#DEDEDE] pr-1.5 pl-8 pt-1 pb-1.5 flex justify-between items-center rounded-full shadow-xl w-fit">
          <div className="flex justify-center items-center">
            {/* Location Button */}
            <div className="flex justify-start items-center gap-11 border-r border-gray-300 pr-5 h-full min-h-12">
              <div className="flex justify-start items-center gap-2">
                <img src={locationIcon} alt="location" />
                <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                  Location
                </a>
              </div>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
            {/* Number of Bedrooms Button */}
            <div className="flex justify-start items-center gap-9 border-r border-gray-300 pl-7 pr-5 h-full min-h-12">
              <div className="flex justify-start items-center gap-2">
                <img src={bedroomIcon} alt="bedroomIcon" />
                <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                  Number Of Bedrooms
                </a>
              </div>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
            {/* Price Range Button */}
            <div className="flex justify-start items-center gap-9 border-r border-gray-300 pl-7 pr-5 h-full min-h-12">
              <div className="flex justify-start items-center gap-3">
                <img src={priceRangeIcon} alt="priceRangeIcon" />
                <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                  Price Range
                </a>
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
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 bg-buttonOrange p-4 rounded-full">
            <img src={searchIcon} alt="search" />
          </div>
        </div>
        {/* Profile Side */}
        <div className="flex justify-start items-center gap-7">
          <div className="w-5 rounded-full box-content">
            <img className="w-full" src={callIcon} alt="callIcon" />
          </div>
          <div className="w-5">
            <img className="w-full" src={globalIcon} alt="globalIcon" />
          </div>
          <div className="w-5">
            <img className="w-full" src={lightModeIcon} alt="lightModeIcon" />
          </div>
          <div className="w-5">
            <img className="w-full" src={blackOctagonProfileIcon} alt="blackOctagonProfileIcon" />
          </div>
        </div>
      </nav>
      <img className="z-0 -mt-20 w-full h-screen object-cover" src={grayLocationMap} alt="grayLocationMap" />
    </div>
  );
}

export default Homepage;

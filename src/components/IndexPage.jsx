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
import localAmenitiesIcon from "../assets/images/header/local_amenities_icon.svg";
import blackRightArrow from "../assets/images/loggedInWindows/black_right_arrow.svg";

function IndexPage() {
  return (
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
              <img className="w-full" src={localAmenitiesIcon} alt="localAmenitiesIcon" />
            </div>
            <p className="text-middleMenuTextBlack font-medium text-[12px]">Local Amenities</p>
          </div>
        </div>
        {/* Menu Side */}
        <div className="border border-[#DEDEDE] flex justify-between items-center rounded-full shadow-xl py-1 pl-7 pr-1 max-w-[900px] w-full">
          <div className="flex justify-center items-center gap-5 ">
            {/* Location Button */}
            <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
              <img src={locationIcon} alt="location" />
              <div className="flex justify-start items-center gap-7">
                <a className="text-[12px] font-inter text-middleMenuTextBlack" href="/">
                  Location
                </a>
                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>
            </div>
            {/* Number of Bedrooms Button */}
            <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
              <img src={bedroomIcon} alt="bedroomIcon" />
              <div className="flex justify-start items-center gap-7">
                <a className="text-[12px] font-inter text-middleMenuTextBlack" href="/">
                  Number Of Bedrooms
                </a>
                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>
            </div>
            {/* Price Range Button */}
            <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
              <img src={priceRangeIcon} alt="priceRangeIcon" />
              <div className="flex justify-start items-center gap-7">
                <a className="text-[12px] font-inter text-middleMenuTextBlack" href="/">
                  Price Range
                </a>
                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
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

          <div className="flex justify-start items-center gap-2 bg-buttonOrange p-4 rounded-full ml-7">
            <img src={searchIcon} alt="search" />
            <p className="text-white font-semibold text-[12px]">Search</p>
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
  );
}

export default IndexPage;

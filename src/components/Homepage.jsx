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
      <nav className="flex justify-between items-center mt-0 pt-[13px] pb-[14px] pl-[47px] pr-[58px] z-10 relative bg-white font-inter">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-[33px]">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-grayIconBg p-[14px] rounded-full w-fit">
            <img src={homeIcon} alt="homeIcon" />
          </div>
        </div>
        {/* Menu Side */}
        <div className="border border-[#DEDEDE] pr-[6px] pl-[31px] pt-[5px] pb-[6px] flex justify-between items-center rounded-full shadow-xl w-fit">
          <div className="flex justify-center items-center">
            {/* Location Button */}
            <div className="flex justify-start items-center gap-[42px] border-r border-[#D7D7D7] pr-[19px] h-full min-h-[49px]">
              <div className="flex justify-start items-center gap-[8px]">
                <img src={locationIcon} alt="location" />
                <a className="text-[12px] font-inter text-middleMenuTextBlack" href="/">
                  Location
                </a>
              </div>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
            {/* Number of Bedrooms Button */}
            <div className="flex justify-start items-center gap-[35px] border-r border-[#D7D7D7] pl-[29px] pr-[20px] h-full min-h-[49px]">
              <div className="flex justify-start items-center gap-[8px]">
                <img src={bedroomIcon} alt="bedroomIcon" />
                <a className="text-[12px] font-inter text-middleMenuTextBlack" href="/">
                  Number Of Bedrooms
                </a>
              </div>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
            {/* Price Range Button */}
            <div className="flex justify-start items-center gap-[35px] border-r border-[#D7D7D7] pl-[29px] pr-[22px] h-full min-h-[49px]">
              <div className="flex justify-start items-center gap-[11.67px]">
                <img src={priceRangeIcon} alt="priceRangeIcon" />
                <a className="text-[12px] font-inter text-middleMenuTextBlack" href="/">
                  Price Range
                </a>
              </div>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
            {/* Property Details Button */}
            <div className="flex justify-start items-center gap-[35px] pl-[29px] pr-[31px] h-full min-h-[49px]">
              <div className="flex justify-start items-center gap-[11.67px]">
                <img src={priceRangeIcon} alt="priceRangeIcon" />
                <a className="text-[12px] font-inter w-full text-middleMenuTextBlack" href="/">
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
        <div className="flex justify-start items-center gap-[27px]">
          <div className="w-[21px] rounded-full box-content">
            <img className="w-full" src={callIcon} alt="callIcon" />
          </div>
          <div className="w-[21px]">
            <img className="w-full" src={globalIcon} alt="globalIcon" />
          </div>
          <div className="w-[21px]">
            <img className="w-full" src={lightModeIcon} alt="lightModeIcon" />
          </div>
          <div className="w-[21px]">
            <img className="w-full" src={blackOctagonProfileIcon} alt="blackOctagonProfileIcon" />
          </div>
        </div>
      </nav>
      <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={grayLocationMap} alt="grayLocationMap" />
    </div>
  );
}

export default Homepage;

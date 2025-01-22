import React from "react";
/* Images */
import logo from "../assets/images/header/logo.svg";
import homeIcon from "../assets/images/header/home_icon.svg";
import locationIcon from "../assets/images/header/location_icon.svg";
import bedroomIcon from "../assets/images/header/bedroom_number_icon.svg";
import priceRangeIcon from "../assets/images/header/price_range_icon.svg";
import dropDownArrowIcon from "../assets/images/header/dropdown_arrow_icon.svg";
import whiteDropDownArrowIcon from "../assets/images/header/white_dropdown_arrow_icon.svg";
import searchIcon from "../assets/images/header/search_icon.svg";
import callIcon from "../assets/images/header/call_icon.svg";
import globalIcon from "../assets/images/header/global.svg";
import lightModeIcon from "../assets/images/header/light_mode_icon.svg";
import octagonProfileIcon from "../assets/images/header/octagon_profile_icon.svg";
/* Components */
import Status from "./loggedInWindows/Status";
import ProfileSetting from "./loggedInWindows/ProfileSetting";

function Navbar() {
  return (
    <nav className="flex justify-between items-center mt-0 py-3 px-5 z-10 relative bg-white font-inter">
      {/* Profile Status Window ⬇️ */}
      {/* <Status /> */}

      {/* Profile Settings Window ⬇️ */}
      <ProfileSetting />

      {/* Last Visits Window ⬇️ */}

      {/* Notifications Window ⬇️ */}

      {/* Logo Side */}
      <div className="flex justify-start items-center gap-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="bg-grayIconBg p-3 rounded-full w-fit">
          <img src={homeIcon} alt="homeIcon" />
        </div>
      </div>
      {/* Menu Side */}
      <div className="border border-[#DEDEDE] flex justify-between items-center rounded-full shadow-xl py-1 pl-10 pr-1 max-w-[900px] w-full">
        <div className="flex justify-center items-center gap-5 ">
          {/* Location Button */}
          <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
            <img src={locationIcon} alt="location" />
            <div className="flex justify-start items-center">
              <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                Location
              </a>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
          </div>
          {/* Number of Bedrooms Button */}
          <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
            <img src={bedroomIcon} alt="bedroomIcon" />
            <div className="flex justify-start items-center">
              <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                Number Of Bedrooms
              </a>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
          </div>
          {/* Price Range Button */}
          <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
            <img src={priceRangeIcon} alt="priceRangeIcon" />
            <div className="flex justify-start items-center">
              <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                Price Range
              </a>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
          </div>
          {/* Property Details Button */}
          <div className="flex justify-start items-center gap-3 h-full min-h-[47px]">
            <img src={priceRangeIcon} alt="priceRangeIcon" />
            <div className="flex justify-start items-center">
              <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                Property Details
              </a>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
          </div>
        </div>

        <div className="bg-buttonOrange p-4 rounded-full">
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      {/* Profile Side */}
      <div className="flex justify-start items-center gap-3">
        <div className="w-full flex justify-start items-center gap-5">
          <div className="w-full max-w-[21px]">
            <img className="w-full" src={callIcon} alt="callIcon" />
          </div>
          <div className="w-full max-w-[21px]">
            <img className="w-full" src={globalIcon} alt="globalIcon" />
          </div>
          <div className="w-full max-w-[21px]">
            <img className="w-full" src={lightModeIcon} alt="lightModeIcon" />
          </div>
        </div>
        <div className="flex justify-start items-center gap-3 bg-middleMenuTextBlack min-h-[64px] min-w-[210px] w-full h-full p-3 rounded-full">
          <div className="w-full flex justify-between items-center">
            <div className="flex w-full gap-3">
              <img className="w-full max-w-[22px] ml-2" src={octagonProfileIcon} alt="octagonProfileIcon" />
              <div className="border-l border-[#D7D7D7] pl-4">
                <p className="text-[14px] text-white font-medium">B.Douglas</p>
                <p className="text-[12px] text-white font-regular">Customer</p>
              </div>
            </div>
            <img src={whiteDropDownArrowIcon} alt="dropDownArrowIcon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

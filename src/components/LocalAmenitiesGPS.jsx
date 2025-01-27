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
import education from "../assets/images/logoutWindows/education.svg";
import health from "../assets/images/logoutWindows/health.svg";
import whiteHospitality from "../assets/images/logoutWindows/white_hospitality.svg";
import entertainment from "../assets/images/logoutWindows/entertainment.svg";
import blackTick from "../assets/images/logoutWindows/black_tick.svg";

function LocalAmenitiesGPS() {
  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="w-full flex justify-between items-start pt-[13px] pb-[24px] pl-[47px] pr-[58px] z-10 relative bg-white font-inter border-b border-[#D2D3D7]">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-[33px]">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-grayIconBg p-[14px] rounded-full w-fit">
            <img src={homeIcon} alt="homeIcon" />
          </div>
        </div>
        {/* Middle Two Row Part */}
        <div className="flex flex-col gap-[28px] mt-[15px]">
          <div className="flex justify-center items-center gap-[45px]">
            {/* Discover Projects */}
            <div className="flex justify-start items-center gap-[12px]">
              <div className="w-[20px]">
                <img className="w-full opacity-30" src={blackSearchIcon} alt="blackSearchIcon" />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-[12px] text-opacity-30">Discover Projects</p>
            </div>
            {/* Local Amenities */}
            <div className="flex justify-start items-center gap-[12px]">
              <div className="w-[20px]">
                <img className="w-full" src={localAmenitiesIcon} alt="localAmenitiesIcon" />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-[12px] relative before:bg-black before:w-[26px] before:absolute before:left-[50%] before:bottom-[-5px] before:h-[1px] before:translate-x-[-50%]">Local Amenities</p>
            </div>
          </div>
          {/* Menu Side */}
          <div className="border border-[#DEDEDE] flex justify-between items-center rounded-full shadow-xl pr-[6px] pt-[5px] pb-[6px] w-fit relative">
            <div className="flex justify-center items-center">
              {/* Location Button */}
              <div className="flex justify-start items-center gap-[65px] pl-[31px] mr-[22px] rounded-[26.5px] h-full min-h-[53px]">
                <div className="flex justify-start items-center gap-[11.67px]">
                  <img src={locationIcon} alt="locationIcon" />
                  <div className="flex flex-col">
                    <a className="text-[12px] font-inter text-middleMenuTextBlack leading-tight" href="/">
                      Pafilia Plaza
                    </a>
                    <p className="text-middleMenuTextBlack text-[8px] text-left">Paphos</p>
                  </div>
                </div>
                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>
            </div>

            <div className="flex justify-start items-center gap-2 bg-buttonOrange p-4 rounded-full">
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
      {/* Location Industries */}
      <div className="w-full py-[25px] bg-white flex justify-center items-center z-10">
        <div className="flex justify-center items-center gap-[10px]">
          {/* Education Button */}
          <div className="pt-[11px] pb-[11px] px-[24px] flex justify-center items-center gap-[9px] rounded-[26.5px] bg-middleMenuTextBlack bg-opacity-5 ">
            <div>
              <img src={education} alt="Education" />
            </div>
            <p className="text-[12px] text-middleMenuTextBlack">Education</p>
          </div>

          {/* Health Button */}
          <div className="pt-[11px] pb-[11px] px-[24px] flex justify-center items-center gap-[9px] rounded-[26.5px] bg-middleMenuTextBlack bg-opacity-5 ">
            <div>
              <img src={health} alt="Health" />
            </div>
            <p className="text-[12px] text-middleMenuTextBlack">Health</p>
          </div>

          {/* Hospitality Button */}
          <div className="pt-[11px] pb-[11px] px-[24px] flex justify-center items-center gap-[9px] rounded-[26.5px] bg-middleMenuTextBlack">
            <div>
              <img src={whiteHospitality} alt="Hospitality" />
            </div>
            <p className="text-[12px] text-white">Hospitality</p>
            <div className="flex justify-center items-center bg-white w-[18px] h-[18px] rounded-full ml-[2px]">
              <img className=" translate-y-[1px]" src={blackTick} alt="blackTick" />
            </div>
          </div>

          {/* Entertainment Button */}
          <div className="pt-[11px] pb-[11px] px-[24px] flex justify-center items-center gap-[9px] rounded-[26.5px] bg-middleMenuTextBlack bg-opacity-5 ">
            <div>
              <img src={entertainment} alt="Entertainment" />
            </div>
            <p className="text-[12px] text-middleMenuTextBlack">Entertainment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalAmenitiesGPS;

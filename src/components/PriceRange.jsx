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
      <nav className="flex justify-between items-start mt-0 pt-[13px] pb-[24px] pl-[47px] pr-[58px] z-10 relative bg-white font-inter border-b border-[#D2D3D7]">
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
                <img className="w-full" src={blackSearchIcon} alt="blackSearchIcon" />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-[12px] relative before:bg-black before:w-[26px] before:absolute before:left-[50%] before:bottom-[-5px] before:h-[1px] before:translate-x-[-50%] ">Discover Projects</p>
            </div>
            {/* Local Amenities */}
            <div className="flex justify-start items-center gap-[12px]">
              <div className="w-[20px]">
                <img className="w-full" src={lowOpacityLocalAmenitiesIcon} alt="lowOpacityLocalAmenitiesIcon" />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-[12px] text-opacity-30">Local Amenities</p>
            </div>
          </div>
          {/* Menu Side */}
          <div className="border border-[#DEDEDE] flex justify-between items-center rounded-full shadow-xl pr-[6px] pl-[31px] pt-[5px] pb-[6px] w-fit relative">
            <div className="flex justify-center items-center">
              {/* Location Button */}
              <div className="flex justify-start items-center gap-[42px] border-r border-[#D7D7D7] pr-[19px] h-full min-h-[49px]">
                <div className="flex justify-start items-center gap-[8px]">
                  <div className="relative">
                    <img src={locationIcon} alt="location" />
                    <span className="flex justify-center items-center absolute top-[-5px] right-[-5px] bg-[#FF0004] border rounded-full border-[#F8F8F8] p-1 w-[15px] h-[15px]">
                      <p className="text-white font-medium text-[10px]">2</p>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <a className="text-[12px] font-inter text-middleMenuTextBlack leading-tight" href="/">
                      Location
                    </a>
                    <p className="text-middleMenuTextBlack text-[8px] text-left">Ava Plaza, Coral Vis..</p>
                  </div>
                </div>
                <img src={blackRightArrow} alt="blackRightArrow" />
              </div>

              {/* Number of Bedrooms Button */}
              <div className="flex justify-start items-center gap-[35px] pl-[29px] pr-[20px] h-full min-h-[49px]">
                <div className="flex justify-start items-center gap-[8px]">
                  <div className="relative">
                    <img src={bedroomIcon} alt="bedroomIcon" />
                    <span className="flex justify-center items-center absolute top-[-5px] right-[-5px] bg-[#FF0004] border rounded-full border-[#F8F8F8] p-1 w-[15px] h-[15px]">
                      <p className="text-white font-medium text-[10px]">2</p>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <a className="text-[12px] font-inter text-middleMenuTextBlack leading-tight" href="/">
                      Number Of Bedrooms
                    </a>
                    <p className="text-middleMenuTextBlack text-[8px] text-left">Ava Plaza, Coral Vista..</p>
                  </div>
                </div>
                <img src={blackRightArrow} alt="blackRightArrow" />
              </div>

              {/* Price Range Button */}
              <div className="flex justify-start items-center gap-[35px] pl-[29px] pr-[22px] bg-middleMenuTextBlack bg-opacity-5 rounded-[26.5px] border-[#D7D7D7]  h-full min-h-[53px]">
                <div className="flex justify-start items-center gap-[11.67px]">
                  <img src={priceRangeIcon} alt="priceRangeIcon" />
                  <div className="flex flex-col">
                    <a className="text-[12px] font-inter text-middleMenuTextBlack leading-tight" href="/">
                      Price Range
                    </a>
                    <p className="text-middleMenuTextBlack text-[8px] text-left">$5,000 , $135,555,00..</p>
                  </div>
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
                <img src={blackRightArrow} alt="blackRightArrow" />
              </div>
            </div>

            <div className="flex justify-start items-center gap-2 bg-buttonOrange p-4 rounded-full">
              <img src={searchIcon} alt="search" />
              <p className="text-white font-semibold text-[12px]">Search</p>
            </div>
            {/* Slider */}
            <div className="rangeSlider absolute left-[420px] bottom-[-195px] shadow-2xl shadow-[rgba(0,0,0,0.25)]  w-fit bg-white rounded-[31px]">
              <div className="pt-[35px] pb-[37px] pl-[27px] pr-[33px] border-b border-[#DEDEDE]">
                <input
                  type="range"
                  className="appearance-none bg-transparent w-full border border-[#DDDDDD] min-w-[228px] rounded-full h-[6px]
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[19px] [&::-webkit-slider-thumb]:w-[19px]
               [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-middleMenuTextBlack [&::-webkit-slider-thumb]:border
               [&::-webkit-slider-thumb]:border-gray-950 relative z-10"
                />
              </div>
              {/* Min Max Values */}
              <div className="px-[27px] pt-[17px] pb-[19px] flex justify-between gap-[19px]">
                <div className="w-fit flex flex-col justify-center items-center gap-[4px]">
                  <p className="text-[10px] text-[#999]">Minimum</p>
                  <div className="w-[108px] h-[31px] flex justify-center items-center border border-[#DDD] rounded-[15.5px]">
                    <p className="text-[12px] text-middleMenuTextBlack font-medium">$5,000</p>
                  </div>
                </div>

                <div className="w-fit flex flex-col justify-center items-center gap-[4px]">
                  <p className="text-[10px] text-[#999]">Maximum</p>
                  <div className="w-[108px] h-[31px] flex justify-center items-center border border-[#DDD] rounded-[15.5px]">
                    <p className="text-[12px] text-middleMenuTextBlack font-medium">$135,555,000</p>
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

export default PriceRange;

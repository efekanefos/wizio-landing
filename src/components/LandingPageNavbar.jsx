import React from "react";
import logo from "../assets/images/header/logo.svg";
import whiteHomeIcon from "../assets/images/header/white_home_icon.svg";
import locationIcon from "../assets/images/header/location_icon.svg";
import bedroomIcon from "../assets/images/header/bedroom_number_icon.svg";
import priceRangeIcon from "../assets/images/header/price_range_icon.svg";
import searchIcon from "../assets/images/header/search_icon.svg";
import callIcon from "../assets/images/header/call_icon.svg";
import globalIcon from "../assets/images/header/global.svg";
import lightModeIcon from "../assets/images/header/light_mode_icon.svg";
import octagonProfileIcon from "../assets/images/header/octagon_profile_icon.svg";
import earthBackground from "../assets/images/homepage/planet_earth_background.png";
import blackSearchIcon from "../assets/images/header/black_search_icon.svg";
import localAmenitiesIcon from "../assets/images/header/local_amenities_icon.svg";

function LandingPageNavbar() {
  return (
    <div className={`border border-gray-200 flex justify-between items-center rounded-full shadow-xl py-2 ${showUpperOptions && `!py-1`} pl-1 pr-2 w-fit`}>
      <div className="flex justify-center items-center">
        {/* Location Button */}
        <div
          onClick={() => {
            setShowProjectList(true);
            setShowUpperOptions(!showUpperOptions);
          }}
          className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 pl-6 py-1 h-full min-h-6 cursor-pointer ${showUpperOptions && `bg-middleMenuTextBlack bg-opacity-5 py-3 rounded-full border-r-0`}`}
        >
          <div className="relative">
            <img src={locationIcon} alt="location" />
            <span className="flex justify-center items-center absolute top-[-5px] right-[-5px] bg-[#FF0004] border border-[#F8F8F8] p-1 rounded-full w-[15px] h-[15px]">
              <p className="text-white font-medium text-[10px]">2</p>
            </span>
          </div>
          <div className="flex justify-start items-center">
            <div className="flex flex-col">
              <p className="text-xs text-middleMenuTextBlack leading-tight">Location</p>
              {showUpperOptions && <p className="text-middleMenuTextBlack text-[8px]">Ava Plaza, Coral Vis..</p>}
            </div>
          </div>
        </div>
        {/* Number of Bedrooms Button */}
        {!showLocationDevelopments && (
          <div className="flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6">
            <img src={bedroomIcon} alt="bedroomIcon" />
            <div className="flex justify-start items-center">
              <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                Number Of Bedrooms
              </a>
            </div>
          </div>
        )}

        {/* Price Range Button */}
        {!showLocationDevelopments && (
          <div className="flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6">
            <img src={priceRangeIcon} alt="priceRangeIcon" />
            <div className="flex justify-start items-center">
              <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                Price Range
              </a>
            </div>
          </div>
        )}

        {/* Property Details Button */}
        {!showLocationDevelopments && (
          <div className="flex justify-start items-center gap-2 px-4 h-full min-h-6">
            <img src={priceRangeIcon} alt="priceRangeIcon" />
            <div className="flex justify-start items-center">
              <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                More Details
              </a>
            </div>
          </div>
        )}
      </div>
      <div className={`bg-buttonOrange p-3 rounded-full ${showUpperOptions && `p-5 py-4 flex justify-start items-center gap-2`}`}>
        <img className="w-4" src={searchIcon} alt="search" />
        {showUpperOptions && <p className="text-white font-semibold text-xs">Search</p>}
      </div>
    </div>
  );
}

export default LandingPageNavbar;

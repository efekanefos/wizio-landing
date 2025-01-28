import React from "react";
/* Images */
import logo from "../../assets/images/header/logo.svg";
import whiteHomeIcon from "../../assets/images/header/white_home_icon.svg";
import locationIcon from "../../assets/images/header/location_icon.svg";
import bedroomIcon from "../../assets/images/header/bedroom_number_icon.svg";
import priceRangeIcon from "../../assets/images/header/price_range_icon.svg";
import searchIcon from "../../assets/images/header/search_icon.svg";
import callIcon from "../../assets/images/header/call_icon.svg";
import globalIcon from "../../assets/images/header/global.svg";
import lightModeIcon from "../../assets/images/header/light_mode_icon.svg";
import octagonProfileIcon from "../../assets/images/header/octagon_profile_icon.svg";
import earthBackground from "../../assets/images/homepage/planet_earth_background.png";

function LandingPage() {
  return (
    <div className="overflow-y-hidden max-h-screen">
      <nav className="flex justify-between items-center py-3 px-9 z-10 relative bg-white font-inter">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-5">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-middleMenuTextBlack p-3 rounded-full w-fit">
            <img src={whiteHomeIcon} alt="whiteHomeIcon" />
          </div>
        </div>
        {/* Menu Side */}
        <div className="border border-gray-200 flex justify-between items-center rounded-full shadow-xl py-2 pl-4 pr-2 w-fit">
          <div className="flex justify-center items-center">
            {/* Location Button */}
            <div className="flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6">
              <img src={locationIcon} alt="location" />
              <div className="flex justify-start items-center">
                <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                  Location
                </a>
              </div>
            </div>
            {/* Number of Bedrooms Button */}
            <div className="flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6">
              <img src={bedroomIcon} alt="bedroomIcon" />
              <div className="flex justify-start items-center">
                <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                  Number Of Bedrooms
                </a>
              </div>
            </div>
            {/* Price Range Button */}
            <div className="flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6">
              <img src={priceRangeIcon} alt="priceRangeIcon" />
              <div className="flex justify-start items-center">
                <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                  Price Range
                </a>
              </div>
            </div>
            {/* Property Details Button */}
            <div className="flex justify-start items-center gap-2 px-4 h-full min-h-6">
              <img src={priceRangeIcon} alt="priceRangeIcon" />
              <div className="flex justify-start items-center">
                <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                  More Details
                </a>
              </div>
            </div>
          </div>

          <div className="bg-buttonOrange p-3 rounded-full">
            <img src={searchIcon} alt="search" />
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
          <div className="flex justify-start items-center gap-3 bg-middleMenuTextBlack w-full h-full p-3 rounded-full">
            <div className="w-full flex justify-between items-center">
              <div className="flex w-full gap-3">
                <img className="w-full max-w-6" src={octagonProfileIcon} alt="octagonProfileIcon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <img className="z-0 -mt-20 w-full h-screen object-cover" src={earthBackground} alt="earthBackground" />
    </div>
  );
}

export default LandingPage;

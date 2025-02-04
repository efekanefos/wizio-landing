import React, { useState } from "react";
/* Images */
import logo from "../../assets/images/header/logo.svg";
import whiteHomeIcon from "../../assets/images/header/white_home_icon.svg";
import locationIcon from "../../assets/images/header/location_icon.svg";
import bedroomIcon from "../../assets/images/header/bedroom_number_icon.svg";
import priceRangeIcon from "../../assets/images/header/price_range_icon.svg";
import searchIcon from "../../assets/images/header/search_icon.svg";
import callIcon from "../../assets/images/header/call_icon.svg";
import WhiteCallIcon from "../../assets/images/header/white_call_icon.svg";
import globalIcon from "../../assets/images/header/global.svg";
import lightModeIcon from "../../assets/images/header/light_mode_icon.svg";
import octagonProfileIcon from "../../assets/images/header/octagon_profile_icon.svg";
import earthBackground from "../../assets/images/homepage/planet_earth_background.png";
import blackSearchIcon from "../../assets/images/header/black_search_icon.svg";
import localAmenitiesIcon from "../../assets/images/header/local_amenities_icon.svg";
/* Windows */
import DiscoverProjects from "../DiscoverProjects";
import NumberOfBedrooms from "../NumberOfBedrooms";
import Contact from "./Contact";
import Calendar from "../Calendar";
import Login from "./Login";
import Register from "./Register";
import Language from "./Language";
import PropertyDetails from "../PropertyDetails";

function LandingPage() {
  const [showUpperOptions, setShowUpperOptions] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);
  const [showLocationDevelopments, setShowLocationDevelopments] = useState(false);
  const [showBedroomSlider, setShowBedroomSlider] = useState(false);
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  //* Windows
  const [showContactWindow, setShowContactWindow] = useState(false);
  const [showCalendarWindow, setShowCalendarWindow] = useState(false);
  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [showRegisterWindow, setShowRegisterWindow] = useState(false);
  const [showLanguageWindow, setShowLanguageWindow] = useState(false);

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
        {/* Middle Two Row Part */}
        <div className={`flex flex-col gap-7 ${showUpperOptions && `mt-4`}`}>
          {showUpperOptions && (
            <div className="flex justify-center items-center gap-11">
              {/* Discover Projects */}
              <div
                onClick={() => {
                  setShowProjectList(true);
                  setShowLocationDevelopments(false);
                }}
                className={`${!showProjectList && `opacity-30`} flex justify-start items-center gap-2 cursor-pointer`}
              >
                <div className="w-5">
                  <img className="w-full" src={blackSearchIcon} alt="blackSearchIcon" />
                </div>
                <p
                  className={`text-middleMenuTextBlack font-medium text-xs ${
                    showProjectList &&
                    `relative before:bg-black before:w-7 before:absolute before:left-1/2 
                    before:bottom-[-5px] before:h-px before:translate-x-[-50%]`
                  }`}
                >
                  Discover Projects
                </p>
              </div>
              {/* Local Amenities */}
              <div
                onClick={() => {
                  setShowProjectList(false);
                  setShowLocationDevelopments(true);
                }}
                className={`${!showLocationDevelopments && `opacity-30`} flex justify-start items-center gap-2 cursor-pointer`}
              >
                <div className="w-5">
                  <img className="w-full" src={localAmenitiesIcon} alt="localAmenitiesIcon" />
                </div>
                <p
                  className={`text-middleMenuTextBlack font-medium text-xs ${
                    showLocationDevelopments &&
                    `relative before:bg-black before:w-7 before:absolute before:left-1/2 
                    before:bottom-[-5px] before:h-px before:translate-x-[-50%]`
                  }`}
                >
                  Local Amenities
                </p>
              </div>
            </div>
          )}

          {/* Menu Side */}

          <div className={`border border-gray-200 flex justify-between items-center rounded-full shadow-xl py-2 relative ${showUpperOptions && `!py-1`} pl-1 pr-2 w-fit`}>
            <div className="flex justify-center items-center">
              {/* Location Button */}
              <div
                onClick={() => {
                  setShowProjectList(!showProjectList);
                  setShowUpperOptions(!showUpperOptions);
                }}
                className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 pl-6 py-1 h-full min-h-6 cursor-pointer ${
                  showProjectList && !showLocationDevelopments
                    ? `bg-middleMenuTextBlack bg-opacity-5 py-3 rounded-full border-r-0`
                    : !showProjectList && !showLocationDevelopments
                    ? `border-r border-gray-300`
                    : !showProjectList && showLocationDevelopments
                    ? `border-r-0`
                    : ``
                }`}
              >
                <div className="relative">
                  <img src={locationIcon} alt="location" />
                  {showProjectList && !showLocationDevelopments ? (
                    <span className="flex justify-center items-center absolute top-[-5px] right-[-5px] bg-[#FF0004] border border-[#F8F8F8] p-1 rounded-full w-[15px] h-[15px]">
                      <p className="text-white font-medium text-[10px]">2</p>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex justify-start items-center">
                  <div className="flex flex-col">
                    <p className="text-xs text-middleMenuTextBlack leading-tight">{showLocationDevelopments && showUpperOptions ? "Location & By Developments" : "Location"}</p>
                    {showProjectList && !showLocationDevelopments ? <p className="text-middleMenuTextBlack text-[8px]">Ava Plaza, Coral Vis..</p> : ""}
                  </div>
                </div>
              </div>
              {/* Number of Bedrooms Button */}
              {!showLocationDevelopments || !showUpperOptions ? (
                <div
                  onClick={() => {
                    setShowBedroomSlider(!showBedroomSlider);
                    setShowUpperOptions(!showUpperOptions);
                  }}
                  className="flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6 cursor-pointer"
                >
                  <img src={bedroomIcon} alt="bedroomIcon" />
                  <div className="flex justify-start items-center">
                    <p className="text-xs text-middleMenuTextBlack">Number Of Bedrooms</p>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* Price Range Button */}
              {!showLocationDevelopments || !showUpperOptions ? (
                <div className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6 ${showPropertyDetails && `border-r-0`}`}>
                  <img src={priceRangeIcon} alt="priceRangeIcon" />
                  <div className="flex justify-start items-center">
                    <a className="text-xs font-inter text-middleMenuTextBlack" href="/">
                      Price Range
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* Property Details Button */}
              {!showLocationDevelopments || !showUpperOptions ? (
                <div
                  onClick={() => {
                    setShowPropertyDetails(!showPropertyDetails);
                    setShowUpperOptions(!showUpperOptions);
                  }}
                  className={`flex justify-start items-center gap-2 px-4 h-full min-h-6 cursor-pointer ${showPropertyDetails && `bg-middleMenuTextBlack bg-opacity-5 py-3 rounded-full mr-3`}`}
                >
                  <div className="relative">
                    <img src={priceRangeIcon} alt="priceRangeIcon" />
                    {showPropertyDetails && (
                      <span className="flex justify-center items-center absolute -top-1.5 -right-1.5 bg-[#FF0004] border border-[#F8F8F8] p-1 rounded-full w-[15px] h-[15px]">
                        <p className="text-white font-medium text-[10px]">2</p>
                      </span>
                    )}
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col">
                      <p className="text-xs font-inter text-middleMenuTextBlack leading-tight">More Details</p>
                      {showPropertyDetails && <p className="text-middleMenuTextBlack text-[8px]">Apartments</p>}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={`bg-buttonOrange p-3 rounded-full ${showUpperOptions && `p-5 py-4 flex justify-start items-center gap-2`}`}>
              <img className="w-4" src={searchIcon} alt="search" />
              {showUpperOptions && <p className="text-white font-semibold text-xs">Search</p>}
            </div>

            {showPropertyDetails && <PropertyDetails />}
          </div>
        </div>

        {/* Profile Side */}
        <div className="flex justify-start items-center gap-3">
          <div className={`w-full flex justify-start items-center ${showContactWindow ? `gap-3` : `gap-6`}`}>
            <div
              onClick={() => setShowContactWindow(!showContactWindow)}
              className={`${showContactWindow ? `bg-middleMenuTextBlack p-3 rounded-full box-content` : ""} 
            w-5 cursor-pointer`}
            >
              <img className="w-full" src={showContactWindow ? WhiteCallIcon : callIcon} alt="callIcon" />
            </div>
            <div onClick={() => setShowLanguageWindow(!showLanguageWindow)} className="w-5 cursor-pointer">
              <img className="w-full" src={globalIcon} alt="globalIcon" />
            </div>
            <div className="w-5">
              <img className="w-full" src={lightModeIcon} alt="lightModeIcon" />
            </div>
          </div>
          <div onClick={() => setShowLoginWindow(!showLoginWindow)} className="flex justify-start items-center gap-3 bg-middleMenuTextBlack w-full h-full p-3 rounded-full cursor-pointer">
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-start items-center w-full gap-2">
                <img className="w-full max-w-6" src={octagonProfileIcon} alt="octagonProfileIcon" />
                {showLoginWindow && <p className="text-xs text-white font-medium">Login</p>}
              </div>
            </div>
          </div>
        </div>
        {showProjectList && !showLocationDevelopments ? <DiscoverProjects /> : ""}
        {showBedroomSlider && <NumberOfBedrooms />}
      </nav>

      <img className="z-0 w-full h-screen object-cover" src={earthBackground} alt="earthBackground" />

      {
        //* Contact Window
        showContactWindow && <Contact showCalendarWindow={showCalendarWindow} setShowCalendarWindow={setShowCalendarWindow} />
      }
      {
        //* Calendar Window
        showCalendarWindow && <Calendar />
      }
      {
        //* Login Window
        showLoginWindow && <Login setShowLoginWindow={setShowLoginWindow} setShowRegisterWindow={setShowRegisterWindow} />
      }
      {
        //* Register Window
        showRegisterWindow && <Register setShowRegisterWindow={setShowRegisterWindow} />
      }
      {
        //* Language Window
        showLanguageWindow && <Language />
      }

      <div className="font-inter text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-7xl">
          World of <span className="font-bold">Pafilia</span>
        </h1>
        <button className="block text-center border border-white py-4 px-14 rounded-full mt-10 mx-auto">Discover</button>
      </div>
    </div>
  );
}

export default LandingPage;

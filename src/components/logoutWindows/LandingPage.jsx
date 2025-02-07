import React, { useState } from "react";
/* SVG Components */
import LogoIcon from "../icons/LogoIcon";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import LocalAmenitiesIcon from "../icons/LocalAmenitiesIcon";
import LocationIcon from "../icons/LocationIcon";
import BedroomNumbersIcon from "../icons/BedroomNumbersIcon";
import PriceRangeIcon from "../icons/PriceRangeIcon";
import GlobalIcon from "../icons/GlobalIcon";
import LightModeIcon from "../icons/LightModeIcon";
import OctagonProfileIcon from "../icons/OctagonProfileIcon";
/* SVG Images */
import searchIcon from "../../assets/images/header/search_icon.svg";
import callIcon from "../../assets/images/header/call_icon.svg";
import WhiteCallIcon from "../../assets/images/header/white_call_icon.svg";
import earthBackground from "../../assets/images/homepage/planet_earth_background.png";
import LocalAmenitiesBackground from "../../assets/images/homepage/local_amenities_background.svg";
/* Windows */
import DiscoverProjects from "../DiscoverProjects";
import NumberOfBedrooms from "../NumberOfBedrooms";
import Contact from "./Contact";
import Calendar from "../Calendar";
import Login from "./Login";
import Register from "./Register";
import Language from "./Language";
import PropertyDetails from "../PropertyDetails";
import PriceRange from "../PriceRange";
import LocalAmenitiesGPS from "../LocalAmenitiesGPS";

function LandingPage({ theme, setTheme }) {
  const [showUpperOptions, setShowUpperOptions] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);
  const [showLocationDevelopments, setShowLocationDevelopments] = useState(false);
  const [showBedroomSlider, setShowBedroomSlider] = useState(false);
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);
  //* Windows
  const [showContactWindow, setShowContactWindow] = useState(false);
  const [showCalendarWindow, setShowCalendarWindow] = useState(false);
  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [showRegisterWindow, setShowRegisterWindow] = useState(false);
  const [showLanguageWindow, setShowLanguageWindow] = useState(false);
  const [showLocalAmenitiesGPS, setShowLocalAmenitiesGPS] = useState(false);

  return (
    <div className="overflow-y-hidden max-h-screen">
      <nav className="flex justify-between items-center py-3 px-9 z-10 relative bg-white font-inter">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-5">
          <div>
            <LogoIcon className={"w-20 h-7 fill-current"} />
          </div>
          <div className="bg-middleMenuTextBlack p-3 rounded-full w-fit">
            <HomeIcon className={"w-5 h-5 fill-white"} />
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
                  <SearchIcon className={"w-5 h-5 fill-white"} />
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
                  setShowBedroomSlider(false);
                  setShowPriceRange(false);
                  setShowPropertyDetails(false);
                  setShowLocalAmenitiesGPS(!showLocalAmenitiesGPS);
                  setShowLocationDevelopments(true);
                }}
                className={`${!showLocationDevelopments && `opacity-30`} flex justify-start items-center gap-2 cursor-pointer`}
              >
                <div className="w-5">
                  <LocalAmenitiesIcon className={"w-5 h-5 fill-white"} />
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
                  setShowBedroomSlider(false);
                  setShowPriceRange(false);
                  setShowPropertyDetails(false);
                  setShowUpperOptions(showProjectList ? false : true);
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
                  <LocationIcon className={"w-5 h-5 fill-white"} />
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
                    <p className="text-xs text-middleMenuTextBlack leading-tight">
                      {showLocationDevelopments && showUpperOptions && !showLocalAmenitiesGPS ? "Location & By Developments" : showLocationDevelopments && showUpperOptions && showLocalAmenitiesGPS ? "Pafilia Plaza" : "Location"}
                    </p>
                    {showProjectList && !showLocationDevelopments ? <p className="text-middleMenuTextBlack text-[8px]">Ava Plaza, Coral Vis..</p> : showLocalAmenitiesGPS ? <p className="text-middleMenuTextBlack text-[8px] text-left">Paphos</p> : ""}
                  </div>
                </div>
              </div>
              {/* Number of Bedrooms Button */}
              {!showLocationDevelopments || !showUpperOptions ? (
                <div
                  onClick={() => {
                    setShowProjectList(false);
                    setShowPriceRange(false);
                    setShowPropertyDetails(false);
                    setShowBedroomSlider(!showBedroomSlider);
                    setShowUpperOptions(showBedroomSlider ? false : true);
                  }}
                  className="flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6 cursor-pointer"
                >
                  <BedroomNumbersIcon className={"w-5 h-5 fill-white"} />
                  <div className="flex justify-start items-center">
                    <p className="text-xs text-middleMenuTextBlack">Number Of Bedrooms</p>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* Price Range Button */}
              {!showLocationDevelopments || !showUpperOptions ? (
                <div
                  onClick={() => {
                    setShowProjectList(false);
                    setShowBedroomSlider(false);
                    setShowPropertyDetails(false);
                    setShowPriceRange(!showPriceRange);
                    setShowUpperOptions(showPriceRange ? false : true);
                  }}
                  className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full min-h-6 cursor-pointer ${showPropertyDetails && `border-r-0`}`}
                >
                  <PriceRangeIcon className={"w-5 h-5 fill-white"} />
                  <div className="flex justify-start items-center">
                    <p className="text-xs font-inter text-middleMenuTextBlack">Price Range</p>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* Property Details Button */}
              {!showLocationDevelopments || !showUpperOptions ? (
                <div
                  onClick={() => {
                    setShowProjectList(false);
                    setShowBedroomSlider(false);
                    setShowPriceRange(false);
                    setShowPropertyDetails(!showPropertyDetails);
                    setShowUpperOptions(showPropertyDetails ? false : true);
                  }}
                  className={`flex justify-start items-center gap-2 px-4 h-full min-h-6 cursor-pointer ${showPropertyDetails && `bg-middleMenuTextBlack bg-opacity-5 py-3 rounded-full mr-3`}`}
                >
                  <div className="relative">
                    <PriceRangeIcon className={"w-5 h-5 fill-white"} />
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
            {/* Contact Button */}
            <div
              onClick={() => setShowContactWindow(!showContactWindow)}
              className={`${showContactWindow ? `bg-middleMenuTextBlack p-3 rounded-full box-content` : ""} 
              w-5 cursor-pointer`}
            >
              <img className="w-full" src={showContactWindow ? WhiteCallIcon : callIcon} alt="callIcon" />
            </div>
            {/* Language Button */}
            <div onClick={() => setShowLanguageWindow(!showLanguageWindow)} className="w-5 cursor-pointer">
              <GlobalIcon className={"w-5 h-5 fill-white"} />
            </div>
            {/* Dark-Light Theme Button */}
            <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-5">
              <LightModeIcon className={"w-5 h-5 fill-white"} />
            </div>
          </div>
          {/* Login Button */}
          <div onClick={() => setShowLoginWindow(!showLoginWindow)} className="flex justify-start items-center gap-3 bg-middleMenuTextBlack w-full h-full p-3 rounded-full cursor-pointer">
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-start items-center w-full gap-2">
                <OctagonProfileIcon className={"w-6 h-6 fill-current"} />
                {showLoginWindow && <p className="text-xs text-white font-medium">Login</p>}
              </div>
            </div>
          </div>
        </div>
        {showProjectList && !showLocationDevelopments ? <DiscoverProjects /> : ""}
        {showBedroomSlider && <NumberOfBedrooms />}
        {showPriceRange && <PriceRange />}
      </nav>
      {showLocalAmenitiesGPS && <LocalAmenitiesGPS />}

      <img className="z-0 w-full h-screen object-cover" src={showLocalAmenitiesGPS ? LocalAmenitiesBackground : earthBackground} alt="earthBackground" />

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

      {!showLocalAmenitiesGPS && (
        <div className="font-inter text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-7xl">
            World of <span className="font-bold">Pafilia</span>
          </h1>
          <button className="block text-center border border-white py-4 px-14 rounded-full mt-10 mx-auto">Discover</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;

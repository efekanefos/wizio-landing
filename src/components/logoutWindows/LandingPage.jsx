import React, { useState } from "react";
/* New SVG Components */
import HomeIcon from "../newIcons/HomeIcon";
import GuestIcon from "../newIcons/GuestIcon";
import NavbarCallIcon from "../newIcons/NavbarCallIcon";
import NavbarGlobalIcon from "../newIcons/NavbarGlobalIcon";
import NavbarLightModeIcon from "../newIcons/NavbarLightModeIcon";
import MobileHamburgerIcon from "../newIcons/MobileHamburgerIcon";
/* SVG Components */
import LogoIcon from "../icons/LogoIcon";
//import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import LocalAmenitiesIcon from "../icons/LocalAmenitiesIcon";
import LocationIcon from "../icons/LocationIcon";
import BedroomNumbersIcon from "../icons/BedroomNumbersIcon";
import PriceRangeIcon from "../icons/PriceRangeIcon";
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
      <nav className="flex justify-between items-center py-3 px-9 z-10 relative bg-white font-inter max-lg:px-5 max-md:px-4 max-sm:gap-4">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-5">
          <div>
            <LogoIcon className={"w-20 h-7 fill-[#F78E2F]"} />
          </div>
          {/* Sorulacak */}
          <HomeIcon className={"w-5 h-5 fill-white max-lg:hidden"} />
        </div>
        {/* Middle Two Row Part */}
        <div className={`flex flex-col gap-7 ${showUpperOptions && `mt-4`} max-sm:w-full`}>
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

          <div
            className={`border border-gray-200 flex justify-between items-center rounded-full shadow-xl py-1.5 relative 
            ${showPropertyDetails && "!pr-0"}
            ${showUpperOptions && `!py-0 !pl-0`} pl-1 pr-2 w-fit max-sm:w-full `}
          >
            <div className="flex justify-center items-center max-sm:hidden">
              {/* Location Button */}
              <div
                onClick={() => {
                  setShowProjectList(!showProjectList);
                  setShowBedroomSlider(false);
                  setShowPriceRange(false);
                  setShowPropertyDetails(false);
                  setShowUpperOptions(showProjectList ? false : true);
                }}
                className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 pl-6 h-full cursor-pointer 
                  ${showUpperOptions ? `min-h-12` : `min-h-6`}
                  ${
                    showProjectList
                      ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-0`
                      : showBedroomSlider
                      ? `border-r-0`
                      : !showProjectList && !showLocationDevelopments
                      ? `border-r border-gray-300`
                      : !showProjectList && showLocationDevelopments
                      ? `border-r-0`
                      : ``
                  }`}
              >
                <div className="flex justify-start items-center">
                  <div className={`flex flex-col ${showProjectList && `min-w-36`}`}>
                    <p className={`text-sm text-middleMenuTextBlack leading-tight font-light ${showUpperOptions ? "font-semibold text-xs" : ""}`}>{showUpperOptions ? "Location" : "Limassol"}</p>
                    {showUpperOptions ? <p className="text-sm font-light leading-4 text-gray-400">Search destination</p> : ""}
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
                  className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full cursor-pointer
                    
                    ${showUpperOptions ? `min-h-12` : `min-h-6`}
                    ${showBedroomSlider ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-0` : showPriceRange ? `border-r-0` : ""}
                    `}
                >
                  <div className="flex justify-start items-center">
                    <div className={`flex flex-col ${showBedroomSlider && `min-w-36`}`}>
                      <p className={`text-sm text-middleMenuTextBlack leading-tight font-light ${showUpperOptions ? "font-semibold text-xs" : ""}`}>{showUpperOptions ? "Bedrooms" : "2-3 Bed..."}</p>
                      {showUpperOptions ? <p className="text-sm font-light leading-4 text-gray-400">Add bedrooms</p> : ""}
                    </div>
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
                  className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full cursor-pointer 
                    
                    ${showPriceRange ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-0` : showPropertyDetails ? `border-r-0` : ""}
                    ${showUpperOptions ? `min-h-12` : `min-h-6`}
                    `}
                >
                  <div className="flex justify-start items-center">
                    <div className={`flex flex-col ${showPriceRange && `min-w-36`}`}>
                      <p className={`text-sm text-middleMenuTextBlack leading-tight font-light ${showUpperOptions ? "font-semibold text-xs" : ""}`}>{showUpperOptions ? "Price" : "€350,00..."}</p>
                      {showUpperOptions ? <p className="text-sm font-light leading-4 text-gray-400">Add price range</p> : ""}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* Property Details and Search Container */}
              <div className={`flex items-center ${showPropertyDetails && `bg-gray-300 rounded-full pr-2`}`}>
                {!showLocationDevelopments || !showUpperOptions ? (
                  <div
                    onClick={() => {
                      setShowProjectList(false);
                      setShowBedroomSlider(false);
                      setShowPriceRange(false);
                      setShowPropertyDetails(!showPropertyDetails);
                      setShowUpperOptions(showPropertyDetails ? false : true);
                    }}
                    className={`flex justify-start items-center gap-2 px-4 h-full min-h-8 cursor-pointer 
                    ${showPropertyDetails && `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-0`}`}
                  >
                    <div className="flex justify-start items-center">
                      <div className={`flex flex-col ${showPropertyDetails && `min-w-36`}`}>
                        <p className={`text-sm text-middleMenuTextBlack leading-tight font-light ${showUpperOptions ? "font-semibold text-xs" : ""}`}>{showUpperOptions ? "More" : "Apartme..."}</p>
                        {showUpperOptions ? <p className="text-sm font-light leading-4 text-gray-400">Details</p> : ""}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div
                  className={`bg-buttonOrange p-2 rounded-full 
              ${showUpperOptions && `p-5 py-4 flex justify-start items-center gap-2`}`}
                >
                  <img className="w-4" src={searchIcon} alt="search" />
                  {showUpperOptions && <p className="text-white font-semibold text-xs">Search</p>}
                </div>
              </div>
            </div>
            {/* Mobile Search Input */}
            <div className={`hidden max-sm:block w-full`}>
              <input className="w-full outline-none px-6 text-middleMenuTextBlack text-base font-light" type="text" name="searchInput" id="searchInput" placeholder="Search" />
            </div>

            {showPropertyDetails && <PropertyDetails />}
          </div>
        </div>

        {/* Profile Side */}
        <div className="flex justify-start items-center gap-6 max-md:gap-0">
          <div className={`w-full flex justify-start items-center gap-6`}>
            {/* Contact Button */}
            <div onClick={() => setShowContactWindow(!showContactWindow)} className={`w-5 cursor-pointer max-md:hidden`}>
              {/* <img className="w-full" src={showContactWindow ? WhiteCallIcon : callIcon} alt="callIcon" /> */}
              <NavbarCallIcon className={"w-6 h-6 fill-white"} />
            </div>
            {/* Language Button */}
            <div onClick={() => setShowLanguageWindow(!showLanguageWindow)} className="w-5 cursor-pointer max-md:hidden">
              <NavbarGlobalIcon className={`w-6 h-6 fill-white`} />
            </div>
            {/* Dark-Light Theme Button */}
            <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-5 max-md:hidden">
              <NavbarLightModeIcon className={"w-6 h-6 fill-white"} />
            </div>
          </div>
          {/* Login Button */}
          <div onClick={() => setShowLoginWindow(!showLoginWindow)} className="flex justify-start items-center gap-3 w-full h-full cursor-pointer">
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-start items-center w-full gap-2 max-md:border max-md:border-gray-200 max-md:rounded-full max-md:p-1">
                <GuestIcon className={"w-6 h-6 fill-current max-md:w-5 max-md:h-5"} />
                {/* {showLoginWindow && <p className="text-xs text-white font-medium">Login</p>} */}
                <div className="hidden max-md:block px-1 py-1.5 pl-0 ">
                  <MobileHamburgerIcon className={"w-4 h-3 fill-current"} />
                </div>
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
        showContactWindow && <Contact showCalendarWindow={showCalendarWindow} setShowCalendarWindow={setShowCalendarWindow} setShowContactWindow={setShowContactWindow} />
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
        showLanguageWindow && <Language setShowLanguageWindow={setShowLanguageWindow} />
      }

      {!showLocalAmenitiesGPS && (
        <div className="font-inter text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-7xl text-center">
            World of <span className="font-bold">Pafilia</span>
          </h1>
          <button className="block text-center border border-white py-4 px-14 rounded-full mt-10 mx-auto">Discover</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;

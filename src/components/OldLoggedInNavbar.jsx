import React, { useState } from "react";
/* New SVG Components */
import HomeIcon from "../newIcons/HomeIcon";
import GuestIcon from "../newIcons/GuestIcon";
import NavbarCallIcon from "../newIcons/NavbarCallIcon";
import NavbarGlobalIcon from "../newIcons/NavbarGlobalIcon";
import NavbarLightModeIcon from "../newIcons/NavbarLightModeIcon";
import MobileHamburgerIcon from "../newIcons/MobileHamburgerIcon";
import CloseIcon from "../newIcons/CloseIcon";
/* SVG Components */
import LogoIcon from "../icons/LogoIcon";
//import HomeIcon from "../icons/HomeIcon";
import LocationIcon from "../icons/LocationIcon";
import BedroomNumbersIcon from "../icons/BedroomNumbersIcon";
import PriceRangeIcon from "../icons/PriceRangeIcon";
import SearchIcon from "../icons/SearchIcon";
import CallIcon from "../icons/CallIcon";
import GlobalIcon from "../icons/GlobalIcon";
import LightModeIcon from "../icons/LightModeIcon";
import OctagonProfileIcon from "../icons/OctagonProfileIcon";
import CircleCloseIcon from "../icons/CircleCloseIcon";
import DollarIcon from "../icons/DollarIcon";
import SizeArrowIcon from "../icons/SizeArrowIcon";
import BoxIcon from "../icons/BoxIcon";
import LocalAmenitiesIcon from "../icons/LocalAmenitiesIcon";
/* Images */
import whiteDropDownArrowIcon from "../../assets/images/header/white_dropdown_arrow_icon.svg";
import searchIcon from "../../assets/images/header/search_icon.svg";
import blackOctagonProfileIcon from "../../assets/images/header/black_octagon_profile_icon.svg";
import moonBackground from "../../assets/images/homepage/moon_background.png";
import buildingMap from "../../assets/images/homepage/building_map_background.png";
import miniCardImage from "../../assets/images/loggedInWindows/mini_card_image.png";
import whiteBox from "../../assets/images/logoutWindows/white_box.svg";
import cardImage_2 from "../../assets/images/loggedInWindows/card_image_2.png";
import miniCircleImage from "../../assets/images/loggedInWindows/mini_circle_image.png";
/* Windows */
import Status from "./Status";
import ProfileSetting from "./ProfileSetting";
import LastVisits from "./LastVisits";
import Notifications from "./Notifications";
import PropertySidebar from "./PropertySidebar";
import DiscoverProjects from "../DiscoverProjects";
import NumberOfBedrooms from "../NumberOfBedrooms";
import PropertyDetails from "../PropertyDetails";
import PriceRange from "../PriceRange";

function LoggedInLandingPage() {
  const [showStatusWindow, setShowStatusWindow] = useState(false);
  const [showProfileWindow, setShowProfileWindow] = useState(false);
  const [showVisitWindow, setShowVisitWindow] = useState(false);
  const [showNotificationWindow, setShowNotificationWindow] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);

  // Other States
  const [showUpperOptions, setShowUpperOptions] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);
  const [showLocationDevelopments, setShowLocationDevelopments] = useState(false);
  const [showBedroomSlider, setShowBedroomSlider] = useState(false);
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);

  //* Mobile Menu
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openUserMobileMenu, setOpenUserMobileMenu] = useState(false);

  return (
    <div className="overflow-y-hidden max-h-screen font-inter">
      <nav className="flex justify-between items-center py-3 px-9 z-10 relative bg-white font-inter border-b border-gray-300 max-lg:px-5 max-md:px-5 max-sm:gap-4">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-5 lg:min-w-40">
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
            className={` flex justify-between items-center rounded-full shadow-xl py-1.5 relative 
            ${showPropertyDetails && "!pr-0"}
            ${showUpperOptions && `!py-0 !pl-0`} pl-1 pr-2 w-fit max-sm:w-full
            ${openMobileMenu || openUserMobileMenu ? `border-0` : `border border-gray-200`}
            `}
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
                    <p className="text-xs text-middleMenuTextBlack leading-tight">{showLocationDevelopments && showUpperOptions ? "Location & By Developments" : "Location"}</p>
                    {showProjectList && !showLocationDevelopments ? <p className="text-middleMenuTextBlack text-[8px]">Ava Plaza, Coral Vis..</p> : ""}
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

            {/* Search Button */}

            <div
              onClick={() => {
                setShowSearchResult(!showSearchResult);
              }}
              className={`bg-buttonOrange p-3 rounded-full cursor-pointer ${showUpperOptions && `p-5 py-4 flex justify-start items-center gap-2`}`}
            >
              <img className="w-4" src={searchIcon} alt="search" />
              {showUpperOptions && <p className="text-white font-semibold text-xs">Search</p>}
            </div>

            {showPropertyDetails && <PropertyDetails />}
          </div>
        </div>
        {/* Profile Side */}
        <div className="flex justify-start items-center gap-6 min-w-80">
          <div className="w-full flex justify-end items-center gap-6">
            <div className="w-full max-w-5">
              <CallIcon className={"w-5 h-5 fill-white"} />
            </div>
            <div className="w-full max-w-5">
              <GlobalIcon className={"w-5 h-5 fill-white"} />
            </div>
            <div className="w-full max-w-5">
              <LightModeIcon className={"w-5 h-5 fill-white"} />
            </div>
          </div>
          {showSearchResult ? (
            <div className="w-full max-w-6">
              <img className="w-full" src={blackOctagonProfileIcon} alt="blackOctagonProfileIcon" />
            </div>
          ) : (
            <div onClick={() => setShowStatusWindow(!showStatusWindow)} className="flex justify-start items-center gap-3 bg-middleMenuTextBlack min-h-16 min-w-[210px] w-full h-full p-3 rounded-full cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <div className="flex w-full gap-3">
                  <OctagonProfileIcon className={"w-full max-w-6 ml-2 fill-current"} />
                  <div className="border-l border-gray-300 border-opacity-20 pl-4">
                    <p className="text-base text-white font-medium">B.Douglas</p>
                    <p className="text-xs text-white font-regular">Customer</p>
                  </div>
                </div>
                <img src={whiteDropDownArrowIcon} alt="dropDownArrowIcon" />
                {/* <DropdownArrowIcon className={"w-5 h-5 fill-white"} /> */}
              </div>
            </div>
          )}
        </div>
        {showProjectList && !showLocationDevelopments ? <DiscoverProjects /> : ""}
        {showBedroomSlider && <NumberOfBedrooms />}
        {showPriceRange && <PriceRange />}
      </nav>

      {showSearchResult && (
        <div className="w-full py-6 bg-white flex justify-center items-center z-10 border-b border-gray-300">
          <div className="flex justify-center items-center gap-3">
            {/* Limassol Marina Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">Limassol Marina</p>
              <div>
                <CircleCloseIcon className={"w-4 h-4 fill-current"} />
              </div>
            </div>

            {/* Limassol Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">Limassol</p>
              <div>
                <CircleCloseIcon className={"w-4 h-4 fill-current"} />
              </div>
            </div>

            {/* Villas Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">Villas</p>
              <div>
                <CircleCloseIcon className={"w-4 h-4 fill-current"} />
              </div>
            </div>

            {/* Bedrooms 1-3 Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">Bedrooms 1-3</p>
              <div>
                <CircleCloseIcon className={"w-4 h-4 fill-current"} />
              </div>
            </div>

            {/* £750 - £3500 Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">£750 - £3500</p>
              <div>
                <CircleCloseIcon className={"w-4 h-4 fill-current"} />
              </div>
            </div>
          </div>
        </div>
      )}

      {
        //* Property Detail Cards Sidebar
        showSearchResult && <PropertySidebar />
      }

      {
        //* Property Badge with Number
        showSearchResult && (
          <div className="flex justify-center items-center absolute bottom-5 right-96">
            <div className="relative w-14 h-14">
              {/* Pasta Grafiği */}
              <div
                className="w-full h-full rounded-full relative"
                style={{
                  background: "conic-gradient(#F78E2F 0deg 120deg, #36BB2A  120deg 240deg, #FF0004 240deg 360deg)",
                }}
              >
                <div className="w-11 h-11 flex justify-center items-center text-xl font-semibold bg-white text-middleMenuTextBlack rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <p>6</p>
                </div>
              </div>

              {/* Bildirim Rozeti */}
              <span className="absolute -top-1 -right-1 bg-green-500 text-white font-bold text-sm w-6 h-6 flex justify-center items-center rounded-full border-2 border-white">6</span>
            </div>
          </div>
        )
      }

      {
        //* Property Badge with Image
        showSearchResult && (
          <div className="flex justify-center items-center absolute bottom-5 right-72">
            <div className="relative w-14 h-14">
              {/* Pasta Grafiği */}
              <div
                className="w-full h-full rounded-full relative"
                style={{
                  background: "conic-gradient(#F78E2F 0deg 120deg, #36BB2A  120deg 240deg, #FF0004 240deg 360deg)",
                }}
              >
                <div className="w-12 h-12 flex justify-center items-center text-xl font-semibold text-middleMenuTextBlack rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <img src={miniCircleImage} alt="miniCircleImage" />
                </div>
              </div>

              {/* Bildirim Rozeti */}
              <span className="absolute -top-1 -right-1 bg-green-500 text-white shadow-lg font-bold text-xs w-7 h-7 flex justify-center items-center rounded-full border-2 border-white">42</span>
            </div>
          </div>
        )
      }

      {
        //* Property Detail Card
        showSearchResult && (
          <div
            className="flex flex-col absolute top-72 right-[200px] shadow-lg bg-white rounded-xl font-inter before:bg-white before:w-10 before:h-10 before:absolute
        before:top-0 before:-left-8 before:windowArrow before:rounded-tl-md"
          >
            <div className="p-2 pb-0">
              <img src={miniCardImage} alt="miniCardImage" />
            </div>

            <div className="flex flex-col p-3 px-5 border-b border-gray-200">
              <p className="text-xl font-semibold leading-5">Limassol Marina</p>
              <p className="text-xs font-medium leading-5">2 Bedrooms</p>
            </div>

            <div className="p-3 py-4 pt-3 px-5 flex justify-between items-center border-b border-gray-200">
              <div className="flex justify-start items-end gap-1.5">
                <div className="max-w-5 max-h-5">
                  <DollarIcon className={"w-5 h-5 fill-current"} />
                </div>
                <div>
                  <p className="text-[8px] font-medium leading-3">From</p>
                  <p className="text-xs font-semibold leading-3">$135,555,000</p>
                </div>
              </div>

              <div className="flex justify-start items-end gap-1.5">
                <div className="max-w-5 max-h-5">
                  <SizeArrowIcon className={"w-5 h-5 fill-current"} />
                </div>
                <div>
                  <p className="text-[8px] font-medium leading-3">Sqm</p>
                  <p className="text-xs font-semibold leading-3">150-225</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pb-4 px-5 pt-4">
              <button className="flex justify-center items-center gap-1 w-full px-3 py-2 bg-gray-100 rounded-full">
                <div className="flex justify-center items-center max-w-4 max-h-4">
                  <LocalAmenitiesIcon className={"w-5 h-5 fill-current"} />
                </div>
                <p className="text-xs font-medium">Local Amenities</p>
              </button>
              <button className="bg-orange-400 flex justify-center items-center gap-1 w-full px-3 py-2 rounded-full">
                <div className="flex justify-center items-center max-w-4 max-h-4">
                  <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
                  {/* <BoxIcon className={"w-5 h-5 fill-current"} /> */}
                </div>
                <p className="text-xs text-white font-medium">Portal</p>
              </button>
            </div>
          </div>
        )
      }

      {
        //* Property Detail Card Second Design
        showSearchResult && (
          <div className="flex rounded-3xl absolute top-96 left-[500px] bg-white shadow-md max-w-[450px]">
            <div>
              <img className="rounded-tl-3xl rounded-bl-3xl" src={cardImage_2} alt="cardImage" />
            </div>
            <div className="p-3 pl-4 pr-3">
              {/* Number */}
              <div className="flex justify-end">
                <span className="flex justify-center items-center bg-green-500 text-white p-3 w-8 h-8 rounded-full -mb-2">2</span>
              </div>
              {/* Price */}
              <div>
                <div className="mb-5">
                  <p className="text-xs font-medium leading-5">From</p>
                  <p className="text-base font-bold leading-3">€170,555,000+VAT</p>
                </div>
              </div>
              {/* Title */}
              <div>
                <p className="text-2xl font-semibold text-middleMenuTextBlack leading-5">Aria Residences</p>
                <p className="text-base font-light text-middleMenuTextBlack mt-2">2-3 Bedrooms</p>
                <p className="text-base font-light text-middleMenuTextBlack mt-1">150-225 sqm</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-4 ">
                <button className="flex justify-center items-center gap-1 w-full px-3 py-1.5 bg-gray-100 rounded-full">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <LocalAmenitiesIcon className={"w-5 h-5 fill-current"} />
                  </div>
                  <p className="text-xs font-light">Local Amenities</p>
                </button>
                <button className="bg-orange-400 flex justify-center items-center gap-1 w-full px-3 py-1.5 rounded-full">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
                    {/* <BoxIcon className={"w-5 h-5 fill-current"} /> */}
                  </div>
                  <p className="text-xs text-white font-light">Portal</p>
                </button>
              </div>
            </div>
          </div>
        )
      }

      {
        //* Background Image
        showSearchResult ? <img className="z-0 w-full h-screen object-cover" src={buildingMap} alt="buildingMap" /> : <img className="z-0 w-full h-screen object-cover" src={moonBackground} alt="moonBackground" />
      }

      {
        //* Status Window
        showStatusWindow && <Status setShowStatusWindow={setShowStatusWindow} setShowProfileWindow={setShowProfileWindow} setShowVisitWindow={setShowVisitWindow} setShowNotificationWindow={setShowNotificationWindow} />
      }
      {
        //* Profile Window
        showProfileWindow && <ProfileSetting setShowStatusWindow={setShowStatusWindow} setShowProfileWindow={setShowProfileWindow} />
      }
      {
        //* Visit Window
        showVisitWindow && <LastVisits setShowStatusWindow={setShowStatusWindow} setShowVisitWindow={setShowVisitWindow} />
      }
      {
        //* Notification Window
        showNotificationWindow && <Notifications setShowStatusWindow={setShowStatusWindow} setShowNotificationWindow={setShowNotificationWindow} />
      }
    </div>
  );
}

export default LoggedInLandingPage;

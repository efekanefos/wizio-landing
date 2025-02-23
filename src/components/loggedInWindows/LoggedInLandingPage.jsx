import React, { useState } from "react";
/* Menu */
import MiniMenu from "../menuVersions/MiniMenu";
import UpperMiniMenu from "../menuVersions/UpperMiniMenu";
import LargeMenu from "../menuVersions/LargeMenu";
import LanguageButton from "../menuRightSide/LanguageFiles/LanguageButton";
/* New SVG Components */
import SearchIcon from "../newIcons/SearchIcon";
/* Background Images */
import buildingMap from "../../assets/images/homepage/building_map_background.png";
import earthBackground from "../../assets/images/homepage/planet_earth_background.png";
import LocalAmenitiesBackground from "../../assets/images/homepage/local_amenities_background.svg";
/* Windows */
import Status from "./Status";
import Favourites from "./Favourites";
import RecentViews from "./RecentViews";
import ProfileSetting from "./ProfileSetting";
import LocationCardSideBar from "../searchResultComponents/LocationCardSideBar";
import LocationViewOptions from "../searchResultComponents/LocationViewOptions";
import BelowHeaderFilterMenu from "../searchResultComponents/BelowHeaderFilterMenu";
import CircleWithImage from "../searchResultComponents/CircleWithImage";
import MiniLocationCardSideBar from "../searchResultComponents/MiniLocationCardSideBar";
import MobileMenu from "../mobileMenus/MobileMenu";
import UserMobileMenu from "../mobileMenus/UserMobileMenu";
import LocalAmenitiesGPS from "../LocalAmenitiesGPS";
import Calendar from "../Calendar";
import ContactButton from "../menuRightSide/ContactFiles/ContactButton";
import LoginButton from "../menuRightSide/LoginFiles/LoginButton";
import ThemeButton from "../menuRightSide/ThemeFiles/ThemeButton";
import LogoContent from "../menuLeftSide/LogoContent";

function LoggedInLandingPage({ isLoggedIn, toggleTheme, setToggleTheme }) {
  const [showStatusWindow, setShowStatusWindow] = useState(false);
  const [showFavouritesWindow, setShowFavouritesWindow] = useState(false);
  const [showRecentViewsWindow, setShowRecentViewsWindow] = useState(false);
  const [showProfileWindow, setShowProfileWindow] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);

  // Other States
  const [showUpperOptions, setShowUpperOptions] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);
  const [showBedroomSlider, setShowBedroomSlider] = useState(false);
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [showLocalAmenitiesGPS, setShowLocalAmenitiesGPS] = useState(false);
  const [showLanguageWindow, setShowLanguageWindow] = useState(false);
  const [showContactWindow, setShowContactWindow] = useState(false);
  const [showCalendarWindow, setShowCalendarWindow] = useState(false);

  //* Mobile Menu
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openUserMobileMenu, setOpenUserMobileMenu] = useState(false);

  return (
    <div className="overflow-y-hidden max-h-screen font-inter">
      <nav className="flex justify-between items-center py-3 px-9 z-10 relative bg-white font-inter max-lg:px-5 max-md:px-5 max-sm:gap-4">
        {/* Left Side Of The Navbar */}
        <LogoContent />
        {/* Middle Part Of The Navbar */}
        <div className={`flex flex-col gap-7 max-sm:w-full`}>
          {showUpperOptions ? (
            <UpperMiniMenu
              showProjectList={showProjectList}
              setShowProjectList={setShowProjectList}
              setShowBedroomSlider={setShowBedroomSlider}
              setShowPriceRange={setShowPriceRange}
              setShowPropertyDetails={setShowPropertyDetails}
              showLocalAmenitiesGPS={showLocalAmenitiesGPS}
              setShowLocalAmenitiesGPS={setShowLocalAmenitiesGPS}
            />
          ) : (
            <MiniMenu
              openMobileMenu={openMobileMenu}
              openUserMobileMenu={openUserMobileMenu}
              showUpperOptions={showUpperOptions}
              setShowUpperOptions={setShowUpperOptions}
              showProjectList={showProjectList}
              setShowProjectList={setShowProjectList}
              showBedroomSlider={showBedroomSlider}
              setShowBedroomSlider={setShowBedroomSlider}
              showPriceRange={showPriceRange}
              setShowPriceRange={setShowPriceRange}
              showPropertyDetails={showPropertyDetails}
              setShowPropertyDetails={setShowPropertyDetails}
              showSearchResult={showSearchResult}
              setShowSearchResult={setShowSearchResult}
            />
          )}
        </div>
        {/* Right Side Of The Navbar */}
        <div className="flex justify-start items-center">
          <div className={`w-full flex justify-start items-center`}>
            {/* Contact Button */}
            <ContactButton showContactWindow={showContactWindow} setShowContactWindow={setShowContactWindow} setShowLanguageWindow={setShowLanguageWindow} showCalendarWindow={showCalendarWindow} setShowCalendarWindow={setShowCalendarWindow} />

            {/* Language Button */}
            <LanguageButton showLanguageWindow={showLanguageWindow} setShowLanguageWindow={setShowLanguageWindow} setShowContactWindow={setShowContactWindow} />

            {/* Dark-Light Theme Button */}
            <ThemeButton toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} setShowContactWindow={setShowContactWindow} setShowLanguageWindow={setShowLanguageWindow} />
          </div>
          {/* Login Button */}
          <LoginButton
            isLoggedIn={isLoggedIn}
            openMobileMenu={openMobileMenu}
            setOpenMobileMenu={setOpenMobileMenu}
            openUserMobileMenu={openUserMobileMenu}
            setOpenUserMobileMenu={setOpenUserMobileMenu}
            showStatusWindow={showStatusWindow}
            setShowStatusWindow={setShowStatusWindow}
            setShowLanguageWindow={setShowLanguageWindow}
            setShowContactWindow={setShowContactWindow}
          />
          {/* Status Window */}
          {showStatusWindow && <Status setShowStatusWindow={setShowStatusWindow} setShowProfileWindow={setShowProfileWindow} setShowRecentViewsWindow={setShowRecentViewsWindow} setShowFavouritesWindow={setShowFavouritesWindow} />}
          {/* Favourites Window */}
          {showFavouritesWindow && <Favourites setShowStatusWindow={setShowStatusWindow} setShowFavouritesWindow={setShowFavouritesWindow} />}
          {/* Recent Views Window */}
          {showRecentViewsWindow && <RecentViews setShowStatusWindow={setShowStatusWindow} setShowRecentViewsWindow={setShowRecentViewsWindow} />}
          {/* Profile Settings Window */}
          {showProfileWindow && <ProfileSetting setShowStatusWindow={setShowStatusWindow} setShowProfileWindow={setShowProfileWindow} />}
        </div>
      </nav>

      {showUpperOptions && !showLocalAmenitiesGPS ? (
        <div className="flex justify-center items-center mb-3">
          <LargeMenu
            openMobileMenu={openMobileMenu}
            openUserMobileMenu={openUserMobileMenu}
            showUpperOptions={showUpperOptions}
            setShowUpperOptions={setShowUpperOptions}
            showProjectList={showProjectList}
            setShowProjectList={setShowProjectList}
            showBedroomSlider={showBedroomSlider}
            setShowBedroomSlider={setShowBedroomSlider}
            showPriceRange={showPriceRange}
            setShowPriceRange={setShowPriceRange}
            showPropertyDetails={showPropertyDetails}
            setShowPropertyDetails={setShowPropertyDetails}
          />
        </div>
      ) : showUpperOptions && showLocalAmenitiesGPS ? (
        <div className="flex justify-between items-center border border-gray-200 w-full max-w-96 mx-auto rounded-full pl-6 pr-2 py-1.5 shadow-lg">
          <div className={`flex justify-start items-center gap-2 h-full cursor-pointer min-h-12 max-md:pr-1`}>
            <div className="flex justify-start items-center">
              <div className={`flex flex-col`}>
                <p className={`text-black leading-tight font-semibold text-xs`}>Locations and</p>
                <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Developments</p>
              </div>
            </div>
          </div>
          <div className={`rounded-full bg-black p-4 flex justify-start items-center gap-2`}>
            <SearchIcon className={"w-4 h-4 stroke-white"} />
          </div>
        </div>
      ) : (
        ""
      )}

      {openMobileMenu && <MobileMenu />}
      {openUserMobileMenu && <UserMobileMenu />}
      {showLocalAmenitiesGPS && <LocalAmenitiesGPS />}

      {/* Search Filters Below Header */}
      {showSearchResult && <BelowHeaderFilterMenu />}
      {/* Searched Location Card Sidebar */}
      {showSearchResult && <LocationCardSideBar />}
      {/* Searched Location Card Sidebar (1024px Version) */}
      {showSearchResult && <MiniLocationCardSideBar />}
      {/* Searched Location View Option Badge */}
      {showSearchResult && <LocationViewOptions />}
      {/* Property Circle with Number */}
      {/* showSearchResult && <CircleWithNumber /> */}
      {/* Property Circle with Image */}
      {showSearchResult && <CircleWithImage />}
      {/* Vertical Detail Card */}
      {/* showSearchResult && <VerticalDetailCard /> */}

      {
        //* Calendar Window
        showCalendarWindow && <Calendar />
      }

      {
        //* Background Image
        <img className="z-0 w-full h-screen object-cover" src={showSearchResult ? buildingMap : showLocalAmenitiesGPS ? LocalAmenitiesBackground : earthBackground} alt="Background Image" />
      }

      {!showLocalAmenitiesGPS && !showSearchResult && (
        <div className="font-inter text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-7xl text-center">
            World of <span className="font-bold">Pafilia</span>
          </h1>
          <button className="block text-center border border-white py-4 px-14 rounded-full mt-10 mx-auto">Discover</button>
        </div>
      )}
    </div>
  );
}

export default LoggedInLandingPage;

import React, { useState } from "react";
/* Menu */
import MiniMenu from "../menuVersions/miniMenu";
import UpperMiniMenu from "../menuVersions/UpperMiniMenu";
import LargeMenu from "../menuVersions/LargeMenu";
/* New SVG Components */
import GuestIcon from "../newIcons/GuestIcon";
import NavbarCallIcon from "../newIcons/NavbarCallIcon";
import NavbarGlobalIcon from "../newIcons/NavbarGlobalIcon";
import NavbarLightModeIcon from "../newIcons/NavbarLightModeIcon";
import MobileHamburgerIcon from "../newIcons/MobileHamburgerIcon";
import CloseIcon from "../newIcons/CloseIcon";
/* SVG Components */
import LogoIcon from "../icons/LogoIcon";
import moonBackground from "../../assets/images/homepage/moon_background.png";
import buildingMap from "../../assets/images/homepage/building_map_background.png";
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
import Language from "../logoutWindows/Language";
import Contact from "../logoutWindows/Contact";
import MobileMenu from "../mobileMenus/MobileMenu";
import UserMobileMenu from "../mobileMenus/UserMobileMenu";
import LocalAmenitiesGPS from "../LocalAmenitiesGPS";
import LocalAmenitiesList from "../LocalAmenitiesList";
import Calendar from "../Calendar";

function LoggedInLandingPage() {
  const [showStatusWindow, setShowStatusWindow] = useState(false);
  const [showFavouritesWindow, setShowFavouritesWindow] = useState(false);
  const [showRecentViewsWindow, setShowRecentViewsWindow] = useState(false);
  const [showProfileWindow, setShowProfileWindow] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);

  // Other States
  const [showUpperOptions, setShowUpperOptions] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);
  const [showLocationDevelopments, setShowLocationDevelopments] = useState(false);
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

  const handleUserMobileMenuToggle = () => {
    if (window.innerWidth > 768) {
      setShowLoginWindow((prev) => !prev);
    } else {
      setOpenUserMobileMenu((prev) => !prev);
    }
  };

  return (
    <div className="overflow-y-hidden max-h-screen font-inter">
      <nav className="flex justify-between items-center py-3 px-9 z-10 relative bg-white font-inter max-lg:px-5 max-md:px-5 max-sm:gap-4">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-5 lg:min-w-40 max-sm:hidden">
          <div>
            <LogoIcon className={"w-20 h-7 fill-[#F78E2F]"} />
          </div>
        </div>
        {/* Middle Two Row Part */}
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
          {/* Menu Side */}
        </div>
        {/* Profile Side */}
        <div className="flex justify-start items-center gap-6 max-md:gap-0">
          <div className={`w-full flex justify-start items-center gap-6`}>
            {/* Contact Button */}
            <div
              onClick={() => {
                setShowContactWindow(true);
                setShowLanguageWindow(false);
                setShowStatusWindow(false);
              }}
              className={`w-5 cursor-pointer max-md:hidden`}
            >
              <NavbarCallIcon className={"w-6 h-6 fill-white"} />
            </div>
            {/* Language Button */}
            <div
              onClick={() => {
                setShowLanguageWindow(true);
                setShowContactWindow(false);
                setShowStatusWindow(false);
              }}
              className="w-5 cursor-pointer max-md:hidden"
            >
              <NavbarGlobalIcon className={`w-6 h-6 fill-white`} />
            </div>
            {/* Dark-Light Theme Button */}
            <div className="w-5 max-md:hidden">
              <NavbarLightModeIcon className={"w-6 h-6 fill-white"} />
            </div>
          </div>
          {/* Login Button */}
          <div className="flex justify-start items-center gap-3 w-full h-full cursor-pointer">
            <div className="w-full flex justify-between items-center">
              {openMobileMenu && !openUserMobileMenu ? (
                <div onClick={() => setOpenMobileMenu(false)} className="border border-gray-200 rounded-full p-3 cursor-pointer">
                  <CloseIcon className={"w-3 h-3 fill-white"} />
                </div>
              ) : !openMobileMenu && openUserMobileMenu ? (
                <div className="flex justify-start items-center gap-3">
                  <div className="flex justify-center items-center">
                    <NavbarLightModeIcon className={"w-6 h-6 fill-white"} />
                  </div>
                  <div onClick={() => setOpenUserMobileMenu(false)} className="border border-gray-200 rounded-full p-3 cursor-pointer">
                    <CloseIcon className={"w-3 h-3 fill-white"} />
                  </div>
                </div>
              ) : (
                <div className="flex justify-start items-center w-full gap-2 max-md:border max-md:border-gray-200 max-md:rounded-full max-md:p-1">
                  <div onClick={() => setShowStatusWindow(!showStatusWindow)}>
                    <GuestIcon className={"w-6 h-6 fill-current max-md:w-5 max-md:h-5"} />
                  </div>
                  <div onClick={() => setOpenMobileMenu(!openMobileMenu)} className="hidden max-md:block px-1 py-1.5 pl-0 ">
                    <MobileHamburgerIcon className={"w-4 h-3 fill-current"} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showUpperOptions && (
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
      )}

      {openMobileMenu && <MobileMenu />}
      {openUserMobileMenu && <UserMobileMenu />}
      {showLocalAmenitiesGPS && <LocalAmenitiesGPS />}
      {showLocationDevelopments && <LocalAmenitiesList />}

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
        //* Contact Window
        showContactWindow && <Contact showCalendarWindow={showCalendarWindow} setShowCalendarWindow={setShowCalendarWindow} setShowContactWindow={setShowContactWindow} />
      }
      {
        //* Calendar Window
        showCalendarWindow && <Calendar />
      }
      {
        //* Language Window
        showLanguageWindow && <Language setShowLanguageWindow={setShowLanguageWindow} />
      }

      {
        //* Background Image
        showSearchResult ? <img className="z-0 w-full h-screen object-cover" src={buildingMap} alt="buildingMap" /> : <img className="z-0 w-full h-screen object-cover" src={moonBackground} alt="moonBackground" />
      }
      {
        //* Status Window
        showStatusWindow && <Status setShowStatusWindow={setShowStatusWindow} setShowProfileWindow={setShowProfileWindow} setShowRecentViewsWindow={setShowRecentViewsWindow} setShowFavouritesWindow={setShowFavouritesWindow} />
      }
      {
        //* Favourites Window
        showFavouritesWindow && <Favourites setShowStatusWindow={setShowStatusWindow} setShowFavouritesWindow={setShowFavouritesWindow} />
      }
      {
        //* Recent Views Window
        showRecentViewsWindow && <RecentViews setShowStatusWindow={setShowStatusWindow} setShowRecentViewsWindow={setShowRecentViewsWindow} />
      }
      {
        //* Profile Window
        showProfileWindow && <ProfileSetting setShowStatusWindow={setShowStatusWindow} setShowProfileWindow={setShowProfileWindow} />
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

export default LoggedInLandingPage;

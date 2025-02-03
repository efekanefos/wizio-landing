import React, { useState } from "react";
/* Images */
import logo from "../../assets/images/header/logo.svg";
import homeIcon from "../../assets/images/header/home_icon.svg";
import locationIcon from "../../assets/images/header/location_icon.svg";
import bedroomIcon from "../../assets/images/header/bedroom_number_icon.svg";
import priceRangeIcon from "../../assets/images/header/price_range_icon.svg";
import dropDownArrowIcon from "../../assets/images/header/dropdown_arrow_icon.svg";
import whiteDropDownArrowIcon from "../../assets/images/header/white_dropdown_arrow_icon.svg";
import searchIcon from "../../assets/images/header/search_icon.svg";
import callIcon from "../../assets/images/header/call_icon.svg";
import globalIcon from "../../assets/images/header/global.svg";
import lightModeIcon from "../../assets/images/header/light_mode_icon.svg";
import octagonProfileIcon from "../../assets/images/header/octagon_profile_icon.svg";
import blackOctagonProfileIcon from "../../assets/images/header/black_octagon_profile_icon.svg";
import moonBackground from "../../assets/images/homepage/moon_background.png";
import buildingMap from "../../assets/images/homepage/building_map_background.png";
import blackCircleClose from "../../assets/images/loggedInWindows/black_circle_close_icon.svg";
import miniCardImage from "../../assets/images/loggedInWindows/mini_card_image.png";
import blackDollar from "../../assets/images/logoutWindows/black_dollar.svg";
import black_size_arrow from "../../assets/images/logoutWindows/black_size_arrow.svg";
import whiteBox from "../../assets/images/logoutWindows/white_box.svg";
import localAmenities from "../../assets/images/header/local_amenities_icon.svg";
/* Windows */
import Status from "./Status";
import ProfileSetting from "./ProfileSetting";
import LastVisits from "./LastVisits";
import Notifications from "./Notifications";
import PropertySidebar from "./PropertySidebar";

function LoggedInLandingPage() {
  const [showStatusWindow, setShowStatusWindow] = useState(false);
  const [showProfileWindow, setShowProfileWindow] = useState(false);
  const [showVisitWindow, setShowVisitWindow] = useState(false);
  const [showNotificationWindow, setShowNotificationWindow] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(true);

  return (
    <div className="overflow-y-hidden max-h-screen font-inter">
      <nav className="flex justify-between items-center mt-0 py-3 px-7 z-10 relative bg-white font-inter border-b border-[#D2D3D7]">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-5">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-grayIconBg p-3 rounded-full w-fit">
            <img src={homeIcon} alt="homeIcon" />
          </div>
        </div>
        {/* Menu Side */}
        <div className="border border-[#DEDEDE] flex justify-between items-center rounded-full shadow-md py-1 pl-10 pr-1 max-w-[900px] w-full">
          <div className="flex justify-center items-center gap-5 ">
            {/* Location Button */}
            <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
              <img src={locationIcon} alt="location" />
              <div className="flex justify-start items-center">
                <a className="text-xs font-inter text-middleMenuTextBlack mr-9" href="/">
                  Location
                </a>
                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>
            </div>
            {/* Number of Bedrooms Button */}
            <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
              <img src={bedroomIcon} alt="bedroomIcon" />
              <div className="flex justify-start items-center">
                <a className="text-xs font-inter text-middleMenuTextBlack mr-9" href="/">
                  Number Of Bedrooms
                </a>
                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>
            </div>
            {/* Price Range Button */}
            <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
              <img src={priceRangeIcon} alt="priceRangeIcon" />
              <div className="flex justify-start items-center">
                <a className="text-xs font-inter text-middleMenuTextBlack mr-9" href="/">
                  Price Range
                </a>
                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>
            </div>
            {/* Property Details Button */}
            <div className="flex justify-start items-center gap-3 h-full min-h-[47px]">
              <img src={priceRangeIcon} alt="priceRangeIcon" />
              <div className="flex justify-start items-center">
                <p className="text-xs font-inter text-middleMenuTextBlack mr-9">Property Details</p>
                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>
            </div>
          </div>

          <div className="bg-buttonOrange p-4 rounded-full">
            <img src={searchIcon} alt="search" />
          </div>
        </div>
        {/* Profile Side */}
        <div className="flex justify-start items-center gap-6">
          <div className="w-full flex justify-start items-center gap-6">
            <div className="w-full max-w-5">
              <img className="w-full" src={callIcon} alt="callIcon" />
            </div>
            <div className="w-full max-w-5">
              <img className="w-full" src={globalIcon} alt="globalIcon" />
            </div>
            <div className="w-full max-w-5">
              <img className="w-full" src={lightModeIcon} alt="lightModeIcon" />
            </div>
          </div>
          {showSearchResult ? (
            <div className="w-full max-w-6">
              <img className="w-full" src={blackOctagonProfileIcon} alt="blackOctagonProfileIcon" />
            </div>
          ) : (
            <div onClick={() => setShowStatusWindow(!showStatusWindow)} className="flex justify-start items-center gap-3 bg-middleMenuTextBlack min-h-[64px] min-w-[210px] w-full h-full p-3 rounded-full cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <div className="flex w-full gap-3">
                  <img className="w-full max-w-[22px] ml-2" src={octagonProfileIcon} alt="octagonProfileIcon" />
                  <div className="border-l border-[#D7D7D7] border-opacity-20 pl-4">
                    <p className="text-[14px] text-white font-medium">B.Douglas</p>
                    <p className="text-xs text-white font-regular">Customer</p>
                  </div>
                </div>
                <img src={whiteDropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>
            </div>
          )}
        </div>
      </nav>

      {showSearchResult && (
        <div className="w-full py-6 bg-white flex justify-center items-center z-10">
          <div className="flex justify-center items-center gap-3">
            {/* Limassol Marina Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">Limassol Marina</p>
              <div>
                <img src={blackCircleClose} alt="blackCircleClose" />
              </div>
            </div>

            {/* Limassol Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">Limassol</p>
              <div>
                <img src={blackCircleClose} alt="blackCircleClose" />
              </div>
            </div>

            {/* Villas Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">Villas</p>
              <div>
                <img src={blackCircleClose} alt="blackCircleClose" />
              </div>
            </div>

            {/* Bedrooms 1-3 Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">Bedrooms 1-3</p>
              <div>
                <img src={blackCircleClose} alt="blackCircleClose" />
              </div>
            </div>

            {/* £750 - £3500 Button */}
            <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
              <p className="text-xs text-middleMenuTextBlack">£750 - £3500</p>
              <div>
                <img src={blackCircleClose} alt="blackCircleClose" />
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
                  <img className="w-full h-full" src={blackDollar} alt="blackDollar" />
                </div>
                <div>
                  <p className="text-[8px] font-medium leading-3">From</p>
                  <p className="text-xs font-semibold leading-3">$135,555,000</p>
                </div>
              </div>

              <div className="flex justify-start items-end gap-1.5">
                <div className="max-w-5 max-h-5">
                  <img className="w-full h-full" src={black_size_arrow} alt="black_size_arrow" />
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
                  <img className="w-full h-full" src={localAmenities} alt="localAmenities" />
                </div>
                <p className="text-xs font-medium">Local Amenities</p>
              </button>
              <button className="bg-orange-400 flex justify-center items-center gap-1 w-full px-3 py-2 rounded-full">
                <div className="flex justify-center items-center max-w-4 max-h-4">
                  <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
                </div>
                <p className="text-xs text-white font-medium">Portal</p>
              </button>
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

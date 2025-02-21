import React from "react";
import searchIcon from "../../assets/images/header/search_icon.svg";
import PropertyDetails from "../PropertyDetails";

const MiniMenu = ({
  openMobileMenu,
  openUserMobileMenu,
  showUpperOptions,
  setShowUpperOptions,
  showLocationDevelopments,
  showProjectList,
  setShowProjectList,
  showBedroomSlider,
  setShowBedroomSlider,
  showPriceRange,
  setShowPriceRange,
  showPropertyDetails,
  setShowPropertyDetails,
  showSearchResult,
  setShowSearchResult,
}) => {
  return (
    <div
      className={` flex justify-between items-center rounded-full shadow-xl py-1.5 relative pl-1 pr-2 w-fit max-sm:w-full
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
          className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 pl-6 h-full cursor-pointer min-h-6`}
        >
          <div className="flex justify-start items-center">
            <div className={`flex flex-col`}>
              <p className={`text-sm text-middleMenuTextBlack leading-tight font-light`}>Limassol</p>
            </div>
          </div>
          {showProjectList ? <DiscoverProjects /> : ""}
        </div>

        {/* Number of Bedrooms Button */}
        {!showUpperOptions ? (
          <div
            onClick={() => {
              setShowProjectList(false);
              setShowPriceRange(false);
              setShowPropertyDetails(false);
              setShowBedroomSlider(!showBedroomSlider);
              setShowUpperOptions(showBedroomSlider ? false : true);
            }}
            className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full cursor-pointer min-h-6`}
          >
            <div className="flex justify-start items-center">
              <div className={`flex flex-col`}>
                <p className={`text-sm text-middleMenuTextBlack leading-tight font-light`}>2-3 Bed...</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Price Range Button */}
        {!showUpperOptions ? (
          <div
            onClick={() => {
              setShowProjectList(false);
              setShowBedroomSlider(false);
              setShowPropertyDetails(false);
              setShowPriceRange(!showPriceRange);
              setShowUpperOptions(showPriceRange ? false : true);
            }}
            className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full cursor-pointer min-h-6`}
          >
            <div className="flex justify-start items-center">
              <div className={`flex flex-col`}>
                <p className={`text-sm text-middleMenuTextBlack leading-tight font-light`}>€350,00...</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Property Details and Search Container */}
        <div className={`flex items-center`}>
          {!showUpperOptions ? (
            <div
              onClick={() => {
                setShowProjectList(false);
                setShowBedroomSlider(false);
                setShowPriceRange(false);
                setShowPropertyDetails(!showPropertyDetails);
                setShowUpperOptions(showPropertyDetails ? false : true);
              }}
              className={`flex justify-start items-center gap-2 px-4 h-full min-h-8 cursor-pointer`}
            >
              <div className="flex justify-start items-center">
                <div className={`flex flex-col`}>
                  <p className={`text-sm text-middleMenuTextBlack leading-tight font-light`}>Apartme...</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div onClick={() => setShowSearchResult(!showSearchResult)} className={`p-2 rounded-full bg-buttonOrange cursor-pointer`}>
            <img className="w-4" src={searchIcon} alt="search" />
          </div>
        </div>
      </div>
      {/* Mobile Search Input */}
      {!(openMobileMenu || openUserMobileMenu) ? (
        <div className={`hidden max-sm:flex w-full rounded-full`}>
          <input className="w-full outline-none px-6 text-middleMenuTextBlack text-base font-light rounded-full" type="text" name="searchInput" id="searchInput" placeholder="Search" />
          <div className={`p-2 rounded-full w-fit bg-buttonOrange`}>
            <img className="w-4" src={searchIcon} alt="search" />
          </div>
        </div>
      ) : (
        ""
      )}

      {showPropertyDetails && <PropertyDetails />}
    </div>
  );
};

export default MiniMenu;

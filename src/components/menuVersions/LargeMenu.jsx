import React from "react";
import searchIcon from "../../assets/images/header/search_icon.svg";
import PropertyDetails from "../PropertyDetails";
import DiscoverProjects from "../DiscoverProjects";
import NumberOfBedrooms from "../NumberOfBedrooms";
import PriceRange from "../PriceRange";

const LargeMenu = ({
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
}) => {
  return (
    <div
      className={` flex justify-between items-center rounded-full shadow-xl py-0.5 relative pl-0.5 pr-2 w-fit max-sm:w-full
        ${showPropertyDetails && "!pr-0.5"}
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
          className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 pl-6 h-full cursor-pointer min-h-12 max-md:pr-1 ${showUpperOptions ? "max-md:pr-2" : ""}
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
            <div className={`flex flex-col min-w-36 max-md:min-w-20`}>
              <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>Location</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Search destination</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:hidden block">Search des..</p>
            </div>
          </div>
          {showProjectList && !showLocationDevelopments ? <DiscoverProjects /> : ""}
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
            className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full cursor-pointer min-h-12 max-md:pr-1 ${showUpperOptions ? "max-md:pr-2" : ""} ${
              showBedroomSlider ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-0` : showPriceRange ? `border-r-0` : ""
            }`}
          >
            <div className="flex justify-start items-center">
              <div className={`flex flex-col min-w-36 max-md:min-w-20`}>
                <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>Bedrooms</p>
                <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Add bedrooms</p>
                <p className="text-sm font-light leading-4 text-gray-400 md:hidden block">Add bedro..</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {showBedroomSlider && <NumberOfBedrooms />}

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
                min-h-12 `}
          >
            <div className="flex justify-start items-center">
              <div className={`flex flex-col min-w-36 max-md:min-w-20`}>
                <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>Price</p>
                <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Add price range</p>
                <p className="text-sm font-light leading-4 text-gray-400 md:hidden block">Add price r..</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {showPriceRange && <PriceRange />}

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
                <div className={`flex flex-col min-w-36 max-md:min-w-40`}>
                  <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>More</p>
                  <p className="text-sm font-light leading-4 text-gray-400">Details</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className={`rounded-full bg-black p-3 flex justify-start items-center gap-2 max-md:p-4`}>
            <img className="w-4 h-4 max-md:w-5 max-md:h-5" src={searchIcon} alt="search" />
            {/* <p className="text-white font-light text-sm">Search</p> */}
          </div>
        </div>
      </div>
      {/* Mobile Search Input */}
      {!(openMobileMenu || openUserMobileMenu) ? (
        <div className={`hidden max-sm:flex w-full rounded-full`}>
          <input className="w-full outline-none px-6 text-middleMenuTextBlack text-base font-light rounded-full" type="text" name="searchInput" id="searchInput" placeholder="Search" />
          <div className={`rounded-full w-fit bg-black p-7 py-3 flex justify-start items-center gap-2`}>
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

export default LargeMenu;
